/**
 * 技术分类数据
 * 定义前端技术领域的分类和元数据
 */

// 分类颜色映射
const categoryColors = {
    basic: '#3b82f6',           // 基础核心 - 蓝色
    framework: '#10b981',       // 框架生态 - 绿色
    engineering: '#f59e0b',     // 工程化 - 琥珀色
    visualization: '#8b5cf6',   // 可视化 - 紫色
    crossplatform: '#ec4899',   // 跨平台 - 粉色
    ai: '#06b6d4',              // AI与智能 - 青色
    advanced: '#f97316'         // 前沿技术 - 橙色
};

// 分类名称映射
const categoryNames = {
    basic: '基础核心',
    framework: '框架生态',
    engineering: '工程化',
    visualization: '可视化',
    crossplatform: '跨平台',
    ai: 'AI与智能',
    advanced: '前沿技术'
};

// 分类描述
const categoryDescriptions = {
    basic: '前端开发的基础技术栈，包括HTML、CSS、JavaScript等核心语言和工具',
    framework: '现代前端框架和库，提供组件化开发、状态管理、路由等核心能力',
    engineering: '工程化工具和最佳实践，提升开发效率、代码质量和项目可维护性',
    visualization: '数据可视化、图形渲染和动画技术，将数据转化为直观的视觉呈现',
    crossplatform: '跨平台开发方案，一套代码多端运行，覆盖Web、移动端、桌面端',
    ai: 'AI与机器学习技术在前端的应用，包括AI辅助开发、智能交互等',
    advanced: '前沿技术和新兴方向，探索Web平台的边界和未来可能性'
};

// 分类图标
const categoryIcons = {
    basic: 'foundation',
    framework: 'component',
    engineering: 'settings',
    visualization: 'chart',
    crossplatform: 'devices',
    ai: 'brain',
    advanced: 'rocket'
};

// 导出分类数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        categoryColors,
        categoryNames,
        categoryDescriptions,
        categoryIcons
    };
}
