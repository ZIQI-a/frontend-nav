const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const pageFiles = fs.readdirSync(path.join(root, 'pages'))
    .filter(file => file.endsWith('.html'))
    .map(file => path.join('pages', file));
const htmlFiles = ['index.html', ...pageFiles];
const errors = [];

function read(relativePath) {
    return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function countMatches(content, pattern) {
    return (content.match(pattern) || []).length;
}

function relativeLuminance(hexColor) {
    const channels = hexColor.match(/[0-9a-f]{2}/gi)
        .map(channel => parseInt(channel, 16) / 255)
        .map(channel => channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function validateHtml(relativePath) {
    const html = read(relativePath);
    const pairedTags = ['html', 'head', 'body', 'main', 'header', 'footer', 'section', 'article', 'div', 'a', 'span', 'p', 'pre', 'code', 'h1', 'h2', 'h3', 'h4'];

    pairedTags.forEach(tag => {
        const openCount = countMatches(html, new RegExp(`<${tag}(?:\\s|>)`, 'gi'));
        const closeCount = countMatches(html, new RegExp(`</${tag}>`, 'gi'));
        if (openCount !== closeCount) {
            errors.push(`${relativePath}: <${tag}> 标签数量不匹配 (${openCount}/${closeCount})`);
        }
    });

    if (countMatches(html, /<h1(?:\s|>)/gi) !== 1) {
        errors.push(`${relativePath}: 页面必须且只能包含一个 h1`);
    }

    ['<meta name="description"', 'property="og:title"', 'rel="icon"'].forEach(marker => {
        if (!html.includes(marker)) errors.push(`${relativePath}: 缺少 ${marker}`);
    });

    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    ids.filter((id, index) => ids.indexOf(id) !== index)
        .forEach(id => errors.push(`${relativePath}: 重复 id "${id}"`));

    for (const match of html.matchAll(/<(?:a|link)\b([^>]*?)>/g)) {
        const attributes = match[1];
        const href = attributes.match(/href="([^"]+)"/)?.[1];
        if (!href) continue;

        if (/^javascript:/i.test(href)) {
            errors.push(`${relativePath}: 禁止使用 javascript: 链接`);
            continue;
        }

        if (attributes.includes('target="_blank"') && !attributes.includes('rel="noopener noreferrer"')) {
            errors.push(`${relativePath}: 新窗口链接缺少 rel 安全属性 (${href})`);
        }

        if (/^https?:/.test(href)) {
            try {
                new URL(href);
            } catch {
                errors.push(`${relativePath}: 外链格式错误 (${href})`);
            }
        } else if (!/^(#|mailto:|tel:)/.test(href)) {
            const target = path.resolve(root, path.dirname(relativePath), href);
            if (!fs.existsSync(target)) errors.push(`${relativePath}: 本地链接不存在 (${href})`);
        }
    }

    for (const block of html.matchAll(/<pre><code>([\s\S]*?)<\/code><\/pre>/g)) {
        if (/<\/?[A-Za-z][^>]*>/.test(block[1])) {
            errors.push(`${relativePath}: 代码块包含未转义的 HTML 标签`);
        }
    }
}

function validateData() {
    const context = {};
    const categoriesSource = read('js/data/tech-categories.js');
    const detailsSource = read('js/data/tech-details.js');
    const declaredDetailKeys = [...detailsSource.matchAll(/^    "([^"]+)": \{/gm)].map(match => match[1]);
    const duplicateDetailKeys = declaredDetailKeys.filter((key, index) => declaredDetailKeys.indexOf(key) !== index);

    [...new Set(duplicateDetailKeys)].forEach(key => {
        errors.push(`techDetails: 重复定义 "${key}"`);
    });

    vm.createContext(context);
    vm.runInContext(`${categoriesSource}; this.techDataValue = techData; this.categoryColorsValue = categoryColors; this.categoryNamesValue = categoryNames`, context);
    vm.runInContext(`${detailsSource}; this.techDetailsValue = techDetails; this.getTechDetailValue = getTechDetail`, context);
    vm.runInContext(`${read('js/components/tech-card.js')}; this.TechCardValue = TechCard`, context);
    const techData = context.techDataValue;
    const techDetails = context.techDetailsValue;
    const getTechDetail = context.getTechDetailValue;
    const categoryColors = context.categoryColorsValue;
    const categoryNames = context.categoryNamesValue;
    const validCategories = new Set(['basic', 'framework', 'engineering', 'visualization', 'crossplatform', 'ai', 'advanced']);
    const ids = new Set();
    const numbers = new Set();
    const uniqueTechs = new Set();

    techData.forEach(item => {
        if (ids.has(item.id)) errors.push(`techData: 重复 id ${item.id}`);
        if (numbers.has(item.number)) errors.push(`techData: 重复编号 ${item.number}`);
        if (!validCategories.has(item.category)) errors.push(`techData: 未知分类 ${item.category}`);
        if (!item.title || !item.description || !item.techs.length) errors.push(`techData: ${item.number} 缺少必要内容`);
        if (item.link) {
            try {
                const url = new URL(item.link);
                if (!['http:', 'https:'].includes(url.protocol)) throw new Error('invalid protocol');
            } catch {
                errors.push(`techData: ${item.number} 的领域链接格式错误`);
            }
        }
        const duplicateTechs = item.techs.filter((name, index) => item.techs.indexOf(name) !== index);
        [...new Set(duplicateTechs)].forEach(name => errors.push(`techData: ${item.number} 重复包含 "${name}"`));
        if (!item.techs.some(name => {
            const detail = getTechDetail(name);
            return detail.website || detail.detailPage || detail.github;
        })) {
            errors.push(`techData: ${item.number} 没有任何可访问技术链接`);
        }
        item.techs.forEach(name => uniqueTechs.add(name));
        ids.add(item.id);
        numbers.add(item.number);
    });

    if (techData.length < 70) errors.push(`techData: 技术领域少于首页声明的 70 个 (${techData.length})`);
    if (uniqueTechs.size < 400) errors.push(`techData: 唯一技术少于首页声明的 400 个 (${uniqueTechs.size})`);

    const cardBackgroundLuminance = relativeLuminance('#161616');
    Object.entries(categoryColors).forEach(([name, color]) => {
        const colorLuminance = relativeLuminance(color);
        const contrast = (Math.max(cardBackgroundLuminance, colorLuminance) + 0.05)
            / (Math.min(cardBackgroundLuminance, colorLuminance) + 0.05);
        if (contrast < 4.5) errors.push(`categoryColors: ${name} 对比度不足 (${contrast.toFixed(2)}:1)`);
    });

    const gameCategory = techData.find(item => item.title.includes('游戏'));
    if (!gameCategory?.techs.includes('Cocos Creator')) {
        errors.push('techData: 游戏领域缺少 Cocos Creator');
    } else {
        const gameCardHtml = new context.TechCardValue(gameCategory, categoryColors, categoryNames).render();
        if (!gameCardHtml.includes('https://www.cocos.com/creator')) {
            errors.push('TechCard: 游戏卡片未渲染 Cocos Creator 官网链接');
        }
        if (!gameCardHtml.includes('aria-controls=') || !gameCardHtml.includes(' inert')) {
            errors.push('TechCard: 展开列表缺少必要的可访问性属性');
        }
    }

    Object.entries(techDetails).forEach(([name, detail]) => {
        ['website', 'github'].forEach(key => {
            if (!detail[key]) return;
            try {
                const url = new URL(detail[key]);
                if (!['http:', 'https:'].includes(url.protocol)) throw new Error('invalid protocol');
            } catch {
                errors.push(`techDetails: ${name}.${key} URL 格式错误`);
            }
        });

        if (detail.detailPage && !fs.existsSync(path.join(root, detail.detailPage))) {
            errors.push(`techDetails: ${name} 的详情页不存在`);
        }
    });
}

function validateDetailMenuLayout() {
    const css = read('css/components/tech-detail.css');
    const menuRule = css.match(/\.tech-detail-menu\s*\{([\s\S]*?)\}/)?.[1] || '';
    if (/position:\s*absolute/.test(menuRule)) {
        errors.push('css/components/tech-detail.css: 技术列表不能使用绝对定位，否则会遮挡后续卡片');
    }
}

function validateStyles() {
    const cssFiles = [
        'css/style.css',
        'css/framework.css',
        'css/components/tech-detail.css'
    ];

    cssFiles.forEach(file => {
        const css = read(file);
        if (countMatches(css, /\{/g) !== countMatches(css, /\}/g)) {
            errors.push(`${file}: CSS 花括号数量不匹配`);
        }
    });

    // 详情页强调色也用于卡片链接，以较亮的卡片背景作为更严格的对比度基准
    const backgroundLuminance = relativeLuminance('#161616');
    pageFiles.forEach(file => {
        const html = read(file);
        if (/\.fw-btn-primary:hover \{\s*background:/i.test(html)) {
            errors.push(`${file}: 主按钮悬停态不应覆盖已校验的可访问背景色`);
        }
        const match = html.match(/\.fw-hero h1, \.fw-stat-num \{ color: (#[0-9a-f]{6}); \}/i);
        if (!match) return;

        const accentLuminance = relativeLuminance(match[1]);
        const contrast = (Math.max(backgroundLuminance, accentLuminance) + 0.05)
            / (Math.min(backgroundLuminance, accentLuminance) + 0.05);
        if (contrast < 4.5) {
            errors.push(`${file}: 标题强调色对比度不足 (${contrast.toFixed(2)}:1)`);
        }
    });
}

htmlFiles.forEach(validateHtml);
validateData();
validateDetailMenuLayout();
validateStyles();

if (errors.length) {
    console.error(`站点校验失败，共 ${errors.length} 个问题：`);
    errors.forEach(error => console.error(`- ${error}`));
    process.exitCode = 1;
} else {
    console.log(`站点校验通过：${htmlFiles.length} 个 HTML 页面，未发现结构、链接、SEO 或数据错误。`);
}
