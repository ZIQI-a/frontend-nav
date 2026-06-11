const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const htmlFiles = [
    'index.html',
    ...fs.readdirSync(path.join(root, 'pages'))
        .filter(file => file.endsWith('.html'))
        .map(file => path.join('pages', file))
];
const urls = new Set();
const broken = [];
const unreachable = [];
let nextIndex = 0;

htmlFiles.forEach(file => {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    for (const match of html.matchAll(/<a\b[^>]*href="(https?:[^"]+)"/g)) {
        urls.add(match[1]);
    }
});

const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(root, 'js/data/tech-categories.js'), 'utf8')}; this.techDataValue = techData`, context);
vm.runInContext(`${fs.readFileSync(path.join(root, 'js/data/tech-details.js'), 'utf8')}; this.techDetailsValue = techDetails`, context);
context.techDataValue.forEach(item => {
    if (item.link) urls.add(item.link);
});
Object.values(context.techDetailsValue).forEach(detail => {
    if (detail.website) urls.add(detail.website);
});

async function checkNext() {
    const urlList = [...urls];
    while (nextIndex < urlList.length) {
        const url = urlList[nextIndex++];
        try {
            const response = await fetch(url, {
                method: 'HEAD',
                redirect: 'follow',
                headers: { 'user-agent': 'Mozilla/5.0' },
                signal: AbortSignal.timeout(10000)
            });
            if ([404, 410].includes(response.status)) {
                broken.push(`${response.status} ${url}`);
            }
        } catch (error) {
            unreachable.push(`${url} (${error.cause?.code || error.message})`);
        }
    }
}

(async () => {
    await Promise.all(Array.from({ length: 10 }, checkNext));

    if (broken.length) {
        console.error(`发现 ${broken.length} 个失效链接：`);
        broken.forEach(item => console.error(`- ${item}`));
        process.exitCode = 1;
        return;
    }

    console.log(`外链检查通过：${urls.size} 个链接未发现 404/410。`);
    if (unreachable.length) {
        console.log(`另有 ${unreachable.length} 个链接因超时或访问限制无法自动确认。`);
    }
})();
