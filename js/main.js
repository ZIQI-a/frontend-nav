/**
 * 前端技术生态导航 - 主交互脚本
 * 功能：动态生成技术卡片、搜索过滤、分类筛选、二级菜单
 *
 * 注意：techData、categoryColors 和 categoryNames 在 tech-categories.js 中定义
 * techDetails 和 getTechDetail() 在 tech-details.js 中定义
 * TechCard 类在 tech-card.js 中定义
 */

// DOM 元素
const techGrid = document.getElementById('techGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultsSummary = document.getElementById('resultsSummary');

// 当前状态
let currentCategory = 'all';
let currentSearch = '';
let techCards = []; // 存储卡片组件实例
let cardObserver = null;
let searchTimer = null;

/**
 * 观察新渲染的卡片，使筛选后的内容也能正常触发入场动画
 */
function observeCards() {
    const cards = techGrid.querySelectorAll('.tech-card');
    if (!cardObserver) {
        cards.forEach(card => card.classList.add('is-visible'));
        return;
    }

    cards.forEach(card => cardObserver.observe(card));
}

/**
 * 生成技术卡片HTML
 * @param {Object} tech - 技术数据对象
 * @returns {string} 卡片HTML字符串
 */
function createTechCard(tech) {
    const card = new TechCard(tech, categoryColors, categoryNames);
    techCards.push(card);
    return card.render();
}

/**
 * 渲染技术卡片
 * @param {Array} techs - 技术数据数组
 */
function renderTechCards(techs) {
    if (cardObserver) {
        techGrid.querySelectorAll('.tech-card').forEach(card => cardObserver.unobserve(card));
    }

    techCards = []; // 重置卡片实例
    techGrid.innerHTML = techs.length
        ? techs.map(createTechCard).join('')
        : '<p class="empty-state">没有找到匹配的技术领域，请尝试其他关键词或分类。</p>';
    
    // 绑定卡片事件
    techCards.forEach(card => {
        card.bindEvents();
    });
    
    // 重新触发动画
    const cards = techGrid.querySelectorAll('.tech-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${Math.min(index, 8) * 0.04}s`;
    });

    observeCards();
}

/**
 * 关闭所有二级菜单
 */
function closeAllDetailMenus() {
    techCards.forEach(card => {
        card.closeDetailMenu();
    });
}

/**
 * 过滤技术数据
 * @returns {Array} 过滤后的技术数据
 */
function filterTechs() {
    return techData.filter(tech => {
        const matchesCategory = currentCategory === 'all' || tech.category === currentCategory;
        const matchesSearch = currentSearch === '' || 
            tech.title.toLowerCase().includes(currentSearch) ||
            tech.description.toLowerCase().includes(currentSearch) ||
            tech.techs.some(t => t.toLowerCase().includes(currentSearch));
        
        return matchesCategory && matchesSearch;
    });
}

/**
 * 更新显示
 */
function updateDisplay() {
    const filteredTechs = filterTechs();
    renderTechCards(filteredTechs);
    
    // 更新结果计数
    const resultCount = filteredTechs.length;
    resultsSummary.textContent = currentSearch
        ? `找到 ${resultCount} 个与“${searchInput.value.trim()}”相关的技术领域`
        : `当前显示 ${resultCount} 个技术领域`;
    document.title = `前端技术生态导航 | ${resultCount} 个技术领域`;
}

// 事件监听器
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        currentSearch = searchInput.value.toLowerCase().trim();
        updateDisplay();
    }, 120);
});

searchButton.addEventListener('click', () => {
    clearTimeout(searchTimer);
    currentSearch = searchInput.value.toLowerCase().trim();
    updateDisplay();
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        clearTimeout(searchTimer);
        currentSearch = searchInput.value.toLowerCase().trim();
        updateDisplay();
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        clearTimeout(searchTimer);
        currentSearch = searchInput.value.toLowerCase().trim();

        // 更新按钮状态
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        
        // 更新类别过滤
        currentCategory = button.dataset.category;
        updateDisplay();
    });
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    filterButtons.forEach(button => {
        button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    });

    if ('IntersectionObserver' in window) {
        cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
    }

    updateDisplay();
    
    // 添加全局点击事件，关闭所有二级菜单（只绑定一次）
    document.addEventListener('click', (e) => {
        // 如果点击的不是展开按钮或二级菜单内部，则关闭所有菜单
        if (!e.target.closest('.expand-btn') && !e.target.closest('.tech-detail-menu')) {
            techCards.forEach(card => card.closeDetailMenu());
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const expandedButton = document.querySelector('.expand-btn[aria-expanded="true"]');
            closeAllDetailMenus();
            expandedButton?.focus();
        }
    });
});
