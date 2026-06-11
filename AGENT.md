# 前端技术生态导航 - 项目开发约束

## 项目概述

这是一个纯原生HTML/CSS/JavaScript的前端技术汇总网站，包含70+前端技术领域，旨在为前端开发者提供完整的技术生态导航。

## 技术栈

- **前端**: 原生HTML5 + CSS3 + JavaScript (ES6+)
- **字体**: Space Grotesk + Inter (Google Fonts)
- **设计**: 深色主题，响应式设计
- **构建**: 无构建工具，纯静态文件
- **校验环境**: Node.js 18+

## 项目结构规范

```
frontend-nav/
├── index.html                 # 主页入口
├── favicon.svg                # 站点图标
├── robots.txt                 # 搜索引擎抓取规则
├── package.json               # 站点校验命令
├── AGENT.md                   # 项目开发约束文档
├── css/
│   ├── style.css             # 主样式（全局变量、布局、组件）
│   ├── framework.css         # 框架详情页共享样式
│   └── components/
│       └── tech-detail.css   # 技术详情二级菜单样式
├── js/
│   ├── main.js               # 主交互逻辑
│   ├── data/
│   │   ├── tech-categories.js # 技术分类数据
│   │   └── tech-details.js    # 技术详细信息（一句话介绍+官网）
│   └── components/
│       └── tech-card.js       # 卡片组件逻辑
├── scripts/
│   ├── validate-site.js       # 离线结构、链接、SEO与数据校验
│   └── check-external-links.js # 在线外链失效检查
└── pages/
    ├── react.html             # React 生态详解
    ├── vue.html               # Vue.js 生态详解
    ├── angular.html           # Angular 生态详解
    ├── svelte.html            # Svelte 生态详解
    ├── nextjs.html            # Next.js 生态详解
    └── ...                    # 更多热门技术页面
```

## 开发规范

### 1. 文件命名规范
- **HTML文件**: 小写字母，连字符分隔 (如: `react.html`, `vue.html`)
- **CSS文件**: 小写字母，连字符分隔 (如: `style.css`, `tech-detail.css`)
- **JS文件**: 小写字母，连字符分隔 (如: `main.js`, `tech-card.js`)
- **目录名**: 小写字母，连字符分隔 (如: `js/data`, `css/components`)

### 2. 代码规范

#### HTML规范
- 使用语义化标签 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- 属性使用双引号
- 标签闭合完整
- 使用中文注释
- 保持良好的缩进 (2个空格)

#### CSS规范
- 使用CSS变量管理颜色、间距、阴影等
- 遵循BEM命名规范 (推荐但不强制)
- 响应式设计使用媒体查询
- 保持样式模块化，避免全局污染
- 使用中文注释说明设计意图

#### JavaScript规范
- 使用ES6+语法
- 函数和变量使用驼峰命名
- 添加JSDoc注释
- 保持函数单一职责
- 使用中文注释说明逻辑
- 避免全局变量污染，使用模块化

### 3. 数据管理规范

#### 技术数据结构
```javascript
{
  id: Number,           // 唯一标识
  number: String,       // 显示编号 (如: "01")
  title: String,        // 技术领域标题
  description: String,  // 领域描述
  category: String,     // 分类 (basic/framework/engineering/visualization/crossplatform/ai/advanced)
  techs: Array,         // 相关技术列表
  link: String|null     // 官网链接 (可选)
}
```

#### 技术详情数据结构
```javascript
{
  name: String,         // 技术名称
  description: String,  // 一句话介绍
  category: String,     // 所属分类
  website: String|null, // 官网链接
  github: String|null,  // GitHub链接
  isHot: Boolean,       // 是否热门技术
  detailPage: String|null // 详情页路径 (如果是热门技术)
}
```

### 4. 设计规范

#### 颜色系统
- 主色调: 深色主题 (`#0a0a0a` 背景)
- 文字颜色: 白色 (`#ffffff`) + 灰色层次
- 类别强调色: 7种颜色对应7个分类
- 框架特殊颜色: React蓝、Vue绿、Angular红等

#### 字体系统
- 标题字体: Space Grotesk (700, 600, 500)
- 正文字体: Inter (400, 500)
- 代码字体: Fira Code, Monaco, Consolas

#### 间距系统
- 使用CSS变量定义间距
- 响应式间距 (clamp函数)
- 保持垂直节奏

#### 动画效果
- 使用CSS过渡 (transition)
- 悬停效果: translateY + 阴影
- 滚动动画: IntersectionObserver
- 缓动函数: ease (推荐 ease-out)

### 5. 响应式设计

#### 断点设计
- 移动端: < 480px
- 平板端: 480px - 768px
- 桌面端: 768px - 1024px
- 大桌面: > 1024px

#### 适配策略
- 移动端优先
- 使用媒体查询适配不同屏幕
- 关键功能在移动端保持可用
- 使用弹性布局 (Flexbox + Grid)

## 内容规范

### 1. 技术领域覆盖
- **基础核心**: HTML、CSS、JavaScript、TypeScript等
- **框架生态**: React、Vue、Angular、Svelte等
- **工程化**: 构建工具、测试框架、包管理器等
- **可视化**: 图表库、3D引擎、动画库等
- **跨平台**: 移动App、桌面应用、小程序等
- **AI与智能**: AI/ML库、AI辅助工具、低代码平台等
- **前沿技术**: WebAssembly、Web3、边缘计算等

### 2. 热门技术识别标准
- GitHub Stars > 50k
- 周下载量 > 100k
- 社区活跃度高
- 工作常用技术
- 有完整的生态系统

### 3. 详情页内容要求
- 核心特性介绍
- 生态系统概览
- 快速入门代码示例
- 学习资源链接
- 保持与主页风格一致

## 开发流程

### 1. 新增技术领域
1. 在 `js/data/tech-categories.js` 中添加分类数据
2. 在 `js/data/tech-details.js` 中添加技术详情
3. 更新主页显示逻辑
4. 测试搜索和筛选功能

### 2. 新增热门技术详情页
1. 在 `pages/` 目录创建HTML文件
2. 参考现有框架详情页结构
3. 添加框架特殊颜色样式
4. 更新主页框架卡片链接
5. 测试页面响应式布局

### 3. 修改样式
1. 优先修改CSS变量
2. 保持深色主题一致性
3. 测试不同屏幕尺寸
4. 检查动画性能

### 4. 功能开发
1. 保持JavaScript模块化
2. 添加必要的注释
3. 测试浏览器兼容性
4. 优化性能

## 测试要求

### 1. 功能测试
- 搜索功能正常
- 分类筛选正常
- 链接跳转正常
- 响应式布局正常

### 2. 兼容性测试
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器

### 3. 性能测试
- 页面加载速度 < 3秒
- 动画流畅 (60fps)
- 内存使用合理
- 无内存泄漏

### 4. 发布前校验
```bash
# 离线校验：HTML结构、本地链接、SEO、数据和颜色对比度
npm run validate

# 在线校验：检查官网和详情页资源是否出现404/410
npm run validate:links
```

## 部署要求

### 1. 静态部署
- 支持Vercel、Netlify、GitHub Pages等
- 配置正确的MIME类型
- 启用Gzip压缩
- 配置缓存策略

### 2. SEO优化
- 添加meta标签
- 使用语义化HTML
- 配置Open Graph
- 生成sitemap.xml

### 3. 监控统计
- 添加访问统计 (可选)
- 监控错误日志
- 性能监控

## 维护规范

### 1. 数据更新
- 定期更新技术数据
- 添加新出现的技术
- 移除过时技术
- 更新技术描述

### 2. 内容审核
- 确保链接有效性
- 检查描述准确性
- 更新版本信息
- 修正错误信息

### 3. 版本管理
- 使用Git进行版本控制
- 语义化版本号
- 编写变更日志
- 创建发布标签

## 注意事项

1. **保持简洁**: 避免过度设计，保持代码简洁
2. **性能优先**: 优化加载速度和运行性能
3. **用户体验**: 关注交互细节和视觉体验
4. **可维护性**: 代码结构清晰，易于维护
5. **可扩展性**: 设计考虑未来扩展需求

## 更新记录

- 2026-06-10: 初始版本，建立项目开发约束
- 2026-06-11: 完善技术生态数据、交互可访问性与发布前自动校验
