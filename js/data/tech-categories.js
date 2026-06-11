/**
 * 技术分类数据
 * 定义前端技术领域数据、分类和元数据
 */

// 技术领域数据
const techData = [
    {
        id: 1,
        number: "01",
        title: "前端基础三件套",
        description: "HTML、CSS、JavaScript 是前端开发的三大基石，构建了所有 Web 应用的基础。",
        category: "basic",
        techs: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Web Components", "WebGL", "WebAssembly"],
        link: "https://developer.mozilla.org/zh-CN/"
    },
    {
        id: 2,
        number: "02",
        title: "UI 框架 / 库",
        description: "现代前端开发的核心框架和库，提供了组件化开发、状态管理、路由等核心能力。",
        category: "framework",
        techs: ["React", "Vue.js", "Angular", "Svelte", "SvelteKit", "SolidJS", "Qwik", "Preact", "Lit", "htmx", "Alpine.js"],
        link: null
    },
    {
        id: 3,
        number: "03",
        title: "包管理器与运行时",
        description: "管理项目依赖和运行 JavaScript 代码的环境工具。",
        category: "engineering",
        techs: ["npm", "Yarn", "pnpm", "Bun", "Node.js", "Deno", "Cloudflare Workers"],
        link: null
    },
    {
        id: 4,
        number: "04",
        title: "工程化与构建工具",
        description: "自动化构建、打包、编译和代码质量保障的工具链。",
        category: "engineering",
        techs: ["Webpack", "Vite", "Rollup", "Rspack", "esbuild", "Babel", "SWC", "ESLint", "Prettier", "Biome"],
        link: null
    },
    {
        id: 5,
        number: "05",
        title: "CSS / 样式工具",
        description: "处理样式、布局和视觉表现的工具和框架。",
        category: "basic",
        techs: ["Tailwind CSS", "UnoCSS", "Sass", "Less", "PostCSS", "Styled Components", "Emotion"],
        link: null
    },
    {
        id: 6,
        number: "06",
        title: "React 生态",
        description: "围绕 React 构建的完整生态系统，包括状态管理、路由、全栈框架等。",
        category: "framework",
        techs: ["React Core", "React Router", "Next.js", "Remix", "Redux", "Zustand", "React Query"],
        link: "https://react.dev/"
    },
    {
        id: 7,
        number: "07",
        title: "Vue 生态",
        description: "Vue.js 的完整生态系统，以易用性和渐进式设计著称。",
        category: "framework",
        techs: ["Vue Core", "Vue Router", "Pinia", "Nuxt.js", "VitePress", "VueUse", "Vant"],
        link: "https://vuejs.org/"
    },
    {
        id: 8,
        number: "08",
        title: "Angular 生态",
        description: "Google 维护的企业级前端框架，提供完整的开发解决方案。",
        category: "framework",
        techs: ["Angular Core", "Angular CLI", "Angular Material", "NgRx", "RxJS", "PrimeNG"],
        link: "https://angular.dev/"
    },
    {
        id: 9,
        number: "09",
        title: "测试框架",
        description: "保障代码质量和功能正确性的测试工具和框架。",
        category: "engineering",
        techs: ["Jest", "Vitest", "Cypress", "Playwright", "Testing Library", "Storybook", "Puppeteer"],
        link: null
    },
    {
        id: 10,
        number: "10",
        title: "跨端与多端开发",
        description: "一套代码多端运行的跨平台开发方案。",
        category: "crossplatform",
        techs: ["React Native", "Flutter", "Electron", "Tauri", "uni-app", "Taro", "Ionic"],
        link: null
    },
    {
        id: 11,
        number: "11",
        title: "BFF层 & API",
        description: "前端与后端之间的中间层和 API 交互方案。",
        category: "engineering",
        techs: ["GraphQL", "tRPC", "REST API", "Axios", "Fetch API", "Express", "NestJS", "Hono", "Fastify"],
        link: null
    },
    {
        id: 12,
        number: "12",
        title: "游戏 & 3D & 2D图形",
        description: "在浏览器中创建游戏、3D 场景和 2D 图形的技术。",
        category: "visualization",
        techs: ["Three.js", "Babylon.js", "PlayCanvas", "Cocos Creator", "Phaser", "PixiJS", "Excalibur.js", "Construct 3", "WebGL", "WebGPU", "Canvas"],
        link: null
    },
    {
        id: 13,
        number: "13",
        title: "数据可视化",
        description: "将数据转化为直观图表和可视化展示的技术。",
        category: "visualization",
        techs: ["ECharts", "D3.js", "Chart.js", "AntV", "Highcharts", "Plotly.js", "Deck.gl"],
        link: null
    },
    {
        id: 14,
        number: "14",
        title: "微前端",
        description: "将大型前端应用拆分为多个可独立开发、部署的微型应用。",
        category: "engineering",
        techs: ["Qiankun", "Single-spa", "Module Federation", "Wujie", "Micro-app", "Garfish"],
        link: null
    },
    {
        id: 15,
        number: "15",
        title: "状态管理方案汇总",
        description: "管理应用状态的各种方案和库，从简单到复杂场景全覆盖。",
        category: "framework",
        techs: ["Redux", "Zustand", "Jotai", "Recoil", "MobX", "Pinia", "XState", "Valtio"],
        link: null
    },
    {
        id: 16,
        number: "16",
        title: "AI 与机器学习库",
        description: "在浏览器和 Node.js 中运行 AI 模型和机器学习算法。",
        category: "ai",
        techs: ["TensorFlow.js", "Transformers.js", "LangChain.js", "WebLLM", "ONNX Runtime Web", "Brain.js"],
        link: null
    },
    {
        id: 17,
        number: "17",
        title: "文档生成器",
        description: "自动生成和维护项目文档的工具。",
        category: "engineering",
        techs: ["Docusaurus", "VitePress", "Storybook", "GitBook", "Hugo", "Astro", "Nextra", "Eleventy"],
        link: null
    },
    {
        id: 18,
        number: "18",
        title: "Monorepo管理",
        description: "在单个仓库中管理多个项目的工程化方案。",
        category: "engineering",
        techs: ["Nx", "Turborepo", "Lerna", "pnpm workspace", "Yarn Workspaces", "Rush"],
        link: null
    },
    {
        id: 19,
        number: "19",
        title: "内容管理 (CMS)",
        description: "管理和发布数字内容的系统，从传统CMS到无头CMS。",
        category: "engineering",
        techs: ["WordPress", "Strapi", "Contentful", "Sanity", "Payload CMS", "Directus", "Ghost"],
        link: null
    },
    {
        id: 20,
        number: "20",
        title: "开发者工具",
        description: "提升开发效率的工具和环境。",
        category: "engineering",
        techs: ["VS Code", "Chrome DevTools", "React DevTools", "Vue DevTools", "Lighthouse", "Git"],
        link: null
    },
    {
        id: 21,
        number: "21",
        title: "设计系统 / 开发语言",
        description: "统一设计语言和组件规范，提升开发效率和用户体验一致性。",
        category: "framework",
        techs: ["Ant Design", "Material Design", "Fluent Design", "Carbon Design", "TDesign", "Semi Design"],
        link: null
    },
    {
        id: 22,
        number: "22",
        title: "协作与实时",
        description: "支持实时协作和多人编辑的技术方案。",
        category: "advanced",
        techs: ["Yjs", "Liveblocks", "WebSocket", "Socket.io", "CRDT", "Automerge"],
        link: null
    },
    {
        id: 23,
        number: "23",
        title: "表单管理",
        description: "处理表单状态、验证和提交的库和工具。",
        category: "framework",
        techs: ["React Hook Form", "Formik", "VeeValidate", "Zod", "Yup", "FormKit"],
        link: null
    },
    {
        id: 24,
        number: "24",
        title: "国际化 (i18n)",
        description: "支持多语言和多地区内容的国际化方案。",
        category: "basic",
        techs: ["i18next", "vue-i18n", "react-intl", "FormatJS", "Lingui", "typesafe-i18n"],
        link: null
    },
    {
        id: 25,
        number: "25",
        title: "后端即服务 (BaaS) & Serverless",
        description: "无需管理服务器的后端服务和无服务器计算平台。",
        category: "engineering",
        techs: ["Firebase", "Supabase", "AWS Amplify", "Vercel", "Netlify", "Cloudflare Workers"],
        link: null
    },
    {
        id: 26,
        number: "26",
        title: "WebAssembly (WASM)",
        description: "在浏览器中运行高性能编译代码的技术。",
        category: "advanced",
        techs: ["AssemblyScript", "wasm-pack", "Emscripten", "WASI", "Wasmer", "wasmtime"],
        link: null
    },
    {
        id: 27,
        number: "27",
        title: "低代码 / 零代码搭建平台",
        description: "通过可视化拖拽快速构建应用的开发平台。",
        category: "ai",
        techs: ["Amis", "LowCodeEngine", "tmagic-editor", "Appsmith", "Retool", "Budibase"],
        link: null
    },
    {
        id: 28,
        number: "28",
        title: "静态资源处理",
        description: "处理图像、视频、音频等静态资源的工具库。",
        category: "basic",
        techs: ["Sharp", "FFmpeg.wasm", "Video.js", "Howler.js", "HTML2Canvas", "PDF.js"],
        link: null
    },
    {
        id: 29,
        number: "29",
        title: "性能优化",
        description: "提升 Web 应用加载速度和运行性能的技术和策略。",
        category: "engineering",
        techs: ["Lighthouse", "WebPageTest", "代码分割", "懒加载", "CDN", "缓存策略", "Service Worker", "PWA", "Partytown"],
        link: null
    },
    {
        id: 30,
        number: "30",
        title: "前端架构模式",
        description: "组织和设计前端应用的架构方法论和设计模式。",
        category: "engineering",
        techs: ["FSD", "Atomic Design", "MVC", "MVVM", "Flux", "DDD", "微前端", "群岛架构"],
        link: null
    },
    {
        id: 31,
        number: "31",
        title: "辅助工具库汇总",
        description: "提升开发效率的通用工具库集合。",
        category: "basic",
        techs: ["Lodash", "Day.js", "date-fns", "Zod", "Ramda", "Math.js", "validator.js"],
        link: null
    },
    {
        id: 32,
        number: "32",
        title: "AI 辅助编码工具",
        description: "利用 AI 技术提升编码效率的工具。",
        category: "ai",
        techs: ["GitHub Copilot", "Cursor AI", "TabNine", "Codeium", "Cody", "Continue"],
        link: null
    },
    {
        id: 33,
        number: "33",
        title: "跨平台设计方案",
        description: "一套代码多端运行的跨平台解决方案总结。",
        category: "crossplatform",
        techs: ["React Native", "Flutter", "Electron", "Tauri", "uni-app", "Taro", "Quasar"],
        link: null
    },
    {
        id: 34,
        number: "34",
        title: "Web3 & DApp 开发前端生态",
        description: "去中心化应用和区块链技术的前端开发工具。",
        category: "advanced",
        techs: ["viem", "wagmi", "ethers.js", "WalletConnect", "RainbowKit", "Solana Web3.js"],
        link: null
    },
    {
        id: 35,
        number: "35",
        title: "Local-First (本地优先) 架构",
        description: "数据优先存储在本地，然后同步到云端的架构模式。",
        category: "advanced",
        techs: ["RxDB", "WatermelonDB", "ElectricSQL", "PowerSync", "PGlite", "Dexie.js"],
        link: null
    },
    {
        id: 36,
        number: "36",
        title: "可观测性与用户行为分析",
        description: "监控应用性能和用户行为的工具和平台。",
        category: "engineering",
        techs: ["rrweb", "OpenTelemetry", "PostHog", "Mixpanel", "Amplitude", "神策数据"],
        link: null
    },
    {
        id: 37,
        number: "37",
        title: "可访问性 (A11y) 自动化与辅助",
        description: "确保 Web 应用对所有人可用，包括残障人士。",
        category: "basic",
        techs: ["axe-core", "eslint-plugin-jsx-a11y", "pa11y", "aria-query", "WCAG", "Screen Reader"],
        link: null
    },
    {
        id: 38,
        number: "38",
        title: "CLI 脚手架与研发工具链构建",
        description: "命令行工具和项目脚手架，加速开发流程。",
        category: "engineering",
        techs: ["Commander.js", "Inquirer.js", "chalk", "oclif", "execa", "cac"],
        link: null
    },
    {
        id: 39,
        number: "39",
        title: "样式与类名处理的遗珠",
        description: "处理 CSS 类名和样式的补充工具。",
        category: "basic",
        techs: ["StyleX", "tailwind-merge", "clsx", "classnames", "CSS Modules"],
        link: null
    },
    {
        id: 40,
        number: "40",
        title: "全栈部署与基础设施即代码 (IaC)",
        description: "自动化部署和基础设施管理的工具。",
        category: "engineering",
        techs: ["SST", "Coolify", "Docker", "Caddy", "PM2", "Terraform", "Pulumi"],
        link: null
    },
    {
        id: 41,
        number: "41",
        title: "现代 Web Platform / 浏览器新能力",
        description: "浏览器提供的新 API 和能力，扩展 Web 应用的可能性。",
        category: "advanced",
        techs: ["Container Queries", "View Transition API", "Popover API", "File System Access API", "Web Locks API"],
        link: null
    },
    {
        id: 42,
        number: "42",
        title: "前端认证 / 鉴权 / 身份系统",
        description: "处理用户认证、授权和身份管理的方案。",
        category: "engineering",
        techs: ["Auth.js", "Clerk", "Supabase Auth", "Firebase Auth", "Auth0", "Keycloak"],
        link: null
    },
    {
        id: 43,
        number: "43",
        title: "数据表格 / Data Grid / 类 Excel 组件",
        description: "处理大量数据表格展示和交互的组件。",
        category: "visualization",
        techs: ["AG Grid", "TanStack Table", "MUI X Data Grid", "Handsontable", "VXE Table"],
        link: null
    },
    {
        id: 44,
        number: "44",
        title: "浏览器插件 / Extension 开发",
        description: "开发浏览器扩展程序的技术和工具。",
        category: "crossplatform",
        techs: ["WebExtensions API", "Chrome Extension MV3", "Plasmo", "WXT", "CRXJS"],
        link: null
    },
    {
        id: 45,
        number: "45",
        title: "API 契约 / 类型安全接口生成",
        description: "定义和生成类型安全的 API 接口。",
        category: "engineering",
        techs: ["OpenAPI", "Swagger", "Orval", "openapi-typescript", "GraphQL Code Generator", "tRPC"],
        link: null
    },
    {
        id: 46,
        number: "46",
        title: "前端组件库开发 / npm 包发布工程化",
        description: "开发和发布可复用组件库的工程化工具。",
        category: "engineering",
        techs: ["tsup", "unbuild", "Rollup", "Changesets", "semantic-release", "size-limit"],
        link: null
    },
    {
        id: 47,
        number: "47",
        title: "前端供应链安全 / 依赖安全",
        description: "保障项目依赖安全，防止供应链攻击。",
        category: "engineering",
        techs: ["npm audit", "Dependabot", "Renovate", "Snyk", "Socket.dev", "OSV Scanner"],
        link: null
    },
    {
        id: 48,
        number: "48",
        title: "Feature Flag / A/B Test / 实验平台",
        description: "功能开关和实验平台，支持渐进式发布和数据驱动决策。",
        category: "engineering",
        techs: ["LaunchDarkly", "GrowthBook", "Unleash", "PostHog", "Statsig", "ConfigCat"],
        link: null
    },
    {
        id: 49,
        number: "49",
        title: "搜索 / 站内检索 / Command Palette",
        description: "实现站内搜索和命令面板的技术。",
        category: "basic",
        techs: ["Fuse.js", "FlexSearch", "Algolia", "Meilisearch", "cmdk", "kbar"],
        link: null
    },
    {
        id: 50,
        number: "50",
        title: "节点编辑器 / 流程编排 / 无限画布",
        description: "创建可视化流程图、节点编辑器和无限画布的技术。",
        category: "visualization",
        techs: ["React Flow", "Vue Flow", "tldraw", "Excalidraw", "Rete.js", "LiteGraph.js"],
        link: null
    },
    {
        id: 51,
        number: "51",
        title: "文件上传 / 大文件 / 云存储直传",
        description: "处理文件上传，特别是大文件和云存储直传的方案。",
        category: "basic",
        techs: ["Uppy", "FilePond", "Dropzone.js", "tus-js-client", "S3 Presigned URL"],
        link: null
    },
    {
        id: 52,
        number: "52",
        title: "AI 应用前端 / Agent UI",
        description: "构建 AI 应用界面和 Agent 交互的技术。",
        category: "ai",
        techs: ["Vercel AI SDK", "assistant-ui", "CopilotKit", "LangGraph.js", "WebLLM UI"],
        link: null
    },
    {
        id: 53,
        number: "53",
        title: "框架编译器 / 新响应式模型",
        description: "前端框架的编译时优化和新响应式编程模型。",
        category: "advanced",
        techs: ["React Compiler", "Svelte 5 Runes", "Angular Signals", "Vue Vapor Mode", "Solid Signals"],
        link: null
    },
    {
        id: 54,
        number: "54",
        title: "支付 / 电商 / 交易前端",
        description: "支付集成和电商前端开发的技术方案。",
        category: "crossplatform",
        techs: ["Stripe.js", "PayPal JS SDK", "Shopify Hydrogen", "支付宝 JSAPI", "微信支付 JSAPI"],
        link: null
    },
    {
        id: 55,
        number: "55",
        title: "邮件 / 模板 / 营销页面前端",
        description: "创建邮件模板和营销页面的技术。",
        category: "basic",
        techs: ["React Email", "MJML", "Maizzle", "Nodemailer", "Resend", "SendGrid"],
        link: null
    },
    {
        id: 56,
        number: "56",
        title: "前端安全与防护",
        description: "Web 应用安全防护，包括 XSS、CSRF、CSP 等攻击防御。",
        category: "engineering",
        techs: ["DOMPurify", "CSP", "CSRF Token", "SRI", "Web Crypto API", "Trusted Types"],
        link: null
    },
    {
        id: 57,
        number: "57",
        title: "前端部署与 CI/CD",
        description: "持续集成与持续部署，现代前端工程化的核心环节。",
        category: "engineering",
        techs: ["GitHub Actions", "GitLab CI/CD", "Vercel", "Netlify", "Docker", "ArgoCD"],
        link: null
    },
    {
        id: 58,
        number: "58",
        title: "前端监控与错误追踪",
        description: "线上问题排查、错误收集和用户行为追踪的基础设施。",
        category: "engineering",
        techs: ["Sentry", "Bugsnag", "LogRocket", "Datadog RUM", "New Relic", "Google Analytics"],
        link: null
    },
    {
        id: 59,
        number: "59",
        title: "前端实时数据流与响应式编程",
        description: "处理复杂异步数据流的编程范式和工具库。",
        category: "advanced",
        techs: ["RxJS", "Most.js", "Bacon.js", "Effector", "XStream", "Legend-State"],
        link: null
    },
    {
        id: 60,
        number: "60",
        title: "前端物联网与智能设备交互",
        description: "连接物理设备与 Web 应用的技术方案。",
        category: "advanced",
        techs: ["Web Bluetooth API", "Web USB API", "Web Serial API", "MQTT.js", "Socket.io"],
        link: null
    },
    {
        id: 61,
        number: "61",
        title: "前端语音与多媒体交互",
        description: "语音识别、语音合成及多媒体交互的前端能力。",
        category: "advanced",
        techs: ["Web Speech API", "MediaRecorder API", "getUserMedia", "Web Audio API", "Howler.js"],
        link: null
    },
    {
        id: 62,
        number: "62",
        title: "前端区块链与去中心化存储",
        description: "去中心化存储和区块链技术在前端的应用。",
        category: "advanced",
        techs: ["IPFS", "Helia", "Pinata", "Arweave", "Ceramic Network", "The Graph"],
        link: null
    },
    {
        id: 63,
        number: "63",
        title: "前端边缘计算与边缘渲染",
        description: "在边缘节点执行前端逻辑，降低延迟，提升用户体验。",
        category: "advanced",
        techs: ["Cloudflare Workers", "Vercel Edge Functions", "Deno Deploy", "Hono", "Itty Router"],
        link: null
    },
    {
        id: 64,
        number: "64",
        title: "前端微服务架构",
        description: "不同于微前端，微服务架构关注服务拆分与通信。",
        category: "engineering",
        techs: ["GraphQL Federation", "Apollo Federation", "tRPC", "gRPC-Web", "BFF Pattern"],
        link: null
    },
    {
        id: 65,
        number: "65",
        title: "前端动画与交互设计工具",
        description: "高级动画库和交互设计工具，提升用户体验。",
        category: "visualization",
        techs: ["GSAP", "Framer Motion", "React Spring", "Anime.js", "Lottie", "Rive", "View Transitions API"],
        link: null
    },
    {
        id: 66,
        number: "66",
        title: "前端数学与计算几何",
        description: "科学计算、图形学和数据处理的数学工具库。",
        category: "basic",
        techs: ["Math.js", "Numeric.js", "ml-matrix", "gl-matrix", "Simple Statistics", "Decimal.js"],
        link: null
    },
    {
        id: 67,
        number: "67",
        title: "前端国际化增强",
        description: "超越基础 i18n 的高级国际化场景和技术。",
        category: "basic",
        techs: ["ICU MessageFormat", "Intl API", "Temporal API", "FormatJS", "LinguiJS", "Paraglide.js"],
        link: null
    },
    {
        id: 68,
        number: "68",
        title: "前端测试增强",
        description: "高级测试策略、工具和最佳实践。",
        category: "engineering",
        techs: ["Playwright", "Vitest", "Testing Library", "MSW", "Storybook", "Chromatic", "Percy"],
        link: null
    },
    {
        id: 69,
        number: "69",
        title: "前端隐私与合规",
        description: "隐私保护、GDPR 合规和数据处理的前端方案。",
        category: "engineering",
        techs: ["Cookie Consent", "OneTrust", "Cookiebot", "Privacy Sandbox", "Topics API"],
        link: null
    },
    {
        id: 70,
        number: "70",
        title: "前端可扩展性与插件架构",
        description: "构建可扩展应用的插件系统和微内核架构。",
        category: "advanced",
        techs: ["Plugin Architecture", "Micro-kernel", "Hook System", "Event-driven", "Middleware Pattern"],
        link: null
    }
];

// 分类颜色映射
const categoryColors = {
    basic: '#3b82f6',           // 基础核心 - 蓝色
    framework: '#10b981',       // 框架生态 - 绿色
    engineering: '#f59e0b',     // 工程化 - 琥珀色
    visualization: '#a78bfa',   // 可视化 - 紫色
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
        techData,
        categoryColors,
        categoryNames,
        categoryDescriptions,
        categoryIcons
    };
}
