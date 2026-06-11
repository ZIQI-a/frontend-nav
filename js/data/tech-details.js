/**
 * 技术详细信息数据
 * 包含每个技术的一句话介绍和官网链接
 */

// 技术详情数据
const techDetails = {
    // 基础核心
    "HTML5": {
        description: "超文本标记语言第五版，定义网页结构和内容的标准语言",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
        github: null,
        isHot: true,
        detailPage: null
    },
    "CSS3": {
        description: "层叠样式表第三版，控制网页外观和布局的样式语言",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
        github: null,
        isHot: true,
        detailPage: null
    },
    "JavaScript": {
        description: "轻量级、解释型的编程语言，是Web开发的核心脚本语言",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
        github: null,
        isHot: true,
        detailPage: null
    },
    "TypeScript": {
        description: "JavaScript的超集，添加静态类型检查和现代语言特性",
        website: "https://www.typescriptlang.org/",
        github: "https://github.com/microsoft/TypeScript",
        isHot: true,
        detailPage: "pages/typescript.html"
    },
    "Web Components": {
        description: "浏览器原生组件化标准，支持创建可复用的自定义元素",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Components",
        github: null,
        isHot: false,
        detailPage: null
    },
    "WebGL": {
        description: "Web图形库，在浏览器中渲染3D和2D图形的JavaScript API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API",
        github: null,
        isHot: false,
        detailPage: null
    },
    "WebAssembly": {
        description: "二进制指令格式，在浏览器中运行高性能编译代码",
        website: "https://webassembly.org/",
        github: "https://github.com/WebAssembly",
        isHot: true,
        detailPage: null
    },

    // 框架生态
    "React": {
        description: "用于构建用户界面的JavaScript库，由Meta开发维护",
        website: "https://react.dev/",
        github: "https://github.com/facebook/react",
        isHot: true,
        detailPage: "pages/react.html"
    },
    "Vue.js": {
        description: "渐进式JavaScript框架，易学易用，性能出色",
        website: "https://vuejs.org/",
        github: "https://github.com/vuejs/core",
        isHot: true,
        detailPage: "pages/vue.html"
    },
    "Angular": {
        description: "Google维护的企业级前端框架，提供完整开发解决方案",
        website: "https://angular.dev/",
        github: "https://github.com/angular/angular",
        isHot: true,
        detailPage: "pages/angular.html"
    },
    "Svelte": {
        description: "编译时框架，零运行时开销，极致性能",
        website: "https://svelte.dev/",
        github: "https://github.com/sveltejs/svelte",
        isHot: true,
        detailPage: "pages/svelte.html"
    },
    "SolidJS": {
        description: "声明式、高效且灵活的JavaScript库，用于构建用户界面",
        website: "https://www.solidjs.com/",
        github: "https://github.com/solidjs/solid",
        isHot: false,
        detailPage: null
    },
    "Qwik": {
        description: "即时加载的Web框架，通过可恢复性实现极速加载",
        website: "https://qwik.dev/",
        github: "https://github.com/BuilderIO/qwik",
        isHot: false,
        detailPage: null
    },
    "Preact": {
        description: "React的轻量级替代品，仅3KB，相同的API",
        website: "https://preactjs.com/",
        github: "https://github.com/preactjs/preact",
        isHot: false,
        detailPage: null
    },
    "Alpine.js": {
        description: "轻量级JavaScript框架，用最少的代码实现丰富的交互",
        website: "https://alpinejs.dev/",
        github: "https://github.com/alpinejs/alpine",
        isHot: false,
        detailPage: null
    },
    "Lit": {
        description: "基于 Web Components 标准构建轻量、可复用组件的库",
        website: "https://lit.dev/",
        github: "https://github.com/lit/lit",
        isHot: true,
        detailPage: null
    },
    "htmx": {
        description: "通过 HTML 属性直接使用 AJAX、WebSocket 等能力的轻量库",
        website: "https://htmx.org/",
        github: "https://github.com/bigskysoftware/htmx",
        isHot: true,
        detailPage: null
    },
    "SvelteKit": {
        description: "Svelte 官方应用框架，支持服务端渲染、静态生成与全栈开发",
        website: "https://svelte.dev/docs/kit",
        github: "https://github.com/sveltejs/kit",
        isHot: true,
        detailPage: null
    },

    // 工程化
    "npm": {
        description: "Node.js包管理器，JavaScript生态系统的标准包管理工具",
        website: "https://www.npmjs.com/",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Yarn": {
        description: "快速、可靠、安全的依赖管理工具",
        website: "https://yarnpkg.com/",
        github: "https://github.com/yarnpkg/yarn",
        isHot: true,
        detailPage: null
    },
    "pnpm": {
        description: "快速、节省磁盘空间的包管理工具",
        website: "https://pnpm.io/",
        github: "https://github.com/pnpm/pnpm",
        isHot: true,
        detailPage: null
    },
    "Bun": {
        description: "极速的JavaScript运行时、打包器、包管理器和测试框架",
        website: "https://bun.sh/",
        github: "https://github.com/oven-sh/bun",
        isHot: true,
        detailPage: null
    },
    "Node.js": {
        description: "基于Chrome V8引擎的JavaScript运行时，构建高性能网络应用",
        website: "https://nodejs.org/",
        github: "https://github.com/nodejs/node",
        isHot: true,
        detailPage: "pages/nodejs.html"
    },
    "Deno": {
        description: "安全的JavaScript/TypeScript运行时，内置工具链",
        website: "https://deno.land/",
        github: "https://github.com/denoland/deno",
        isHot: true,
        detailPage: "pages/deno.html"
    },
    "Webpack": {
        description: "现代JavaScript应用程序的静态模块打包工具",
        website: "https://webpack.js.org/",
        github: "https://github.com/webpack/webpack",
        isHot: true,
        detailPage: "pages/webpack.html"
    },
    "Vite": {
        description: "下一代前端构建工具，极速的开发服务器和构建优化",
        website: "https://vitejs.dev/",
        github: "https://github.com/vitejs/vite",
        isHot: true,
        detailPage: "pages/vite.html"
    },
    "Rollup": {
        description: "JavaScript模块打包器，适合库和应用程序开发",
        website: "https://rollupjs.org/",
        github: "https://github.com/rollup/rollup",
        isHot: true,
        detailPage: null
    },
    "esbuild": {
        description: "极速的JavaScript打包器和压缩器",
        website: "https://esbuild.github.io/",
        github: "https://github.com/evanw/esbuild",
        isHot: true,
        detailPage: null
    },
    "Babel": {
        description: "JavaScript编译器，将ES6+代码转换为向后兼容的JavaScript",
        website: "https://babeljs.io/",
        github: "https://github.com/babel/babel",
        isHot: true,
        detailPage: null
    },
    "SWC": {
        description: "基于Rust的超快速TypeScript/JavaScript编译器",
        website: "https://swc.rs/",
        github: "https://github.com/swc-project/swc",
        isHot: true,
        detailPage: null
    },
    "ESLint": {
        description: "JavaScript和TypeScript的静态代码分析工具",
        website: "https://eslint.org/",
        github: "https://github.com/eslint/eslint",
        isHot: true,
        detailPage: "pages/eslint.html"
    },
    "Prettier": {
        description: "具有明确风格约定的代码格式化工具，支持多种语言",
        website: "https://prettier.io/",
        github: "https://github.com/prettier/prettier",
        isHot: true,
        detailPage: null
    },
    "Biome": {
        description: "使用 Rust 构建的快速代码格式化与静态检查工具链",
        website: "https://biomejs.dev/",
        github: "https://github.com/biomejs/biome",
        isHot: true,
        detailPage: null
    },

    // 可视化
    "Three.js": {
        description: "JavaScript 3D库，在Web浏览器中创建和显示3D图形",
        website: "https://threejs.org/",
        github: "https://github.com/mrdoob/three.js",
        isHot: true,
        detailPage: "pages/threejs.html"
    },
    "ECharts": {
        description: "基于JavaScript的开源可视化图表库",
        website: "https://echarts.apache.org/",
        github: "https://github.com/apache/echarts",
        isHot: true,
        detailPage: "pages/echarts.html"
    },
    "D3.js": {
        description: "基于数据驱动的文档操作JavaScript库",
        website: "https://d3js.org/",
        github: "https://github.com/d3/d3",
        isHot: true,
        detailPage: null
    },
    "Chart.js": {
        description: "简单而灵活的JavaScript图表库",
        website: "https://www.chartjs.org/",
        github: "https://github.com/chartjs/Chart.js",
        isHot: true,
        detailPage: null
    },
    "Babylon.js": {
        description: "功能完整的 Web 3D 渲染与游戏引擎，支持 WebGL 和 WebGPU",
        website: "https://www.babylonjs.com/",
        github: "https://github.com/BabylonJS/Babylon.js",
        isHot: true,
        detailPage: null
    },
    "PlayCanvas": {
        description: "基于 WebGL 的开源 3D 游戏引擎与在线协作编辑器",
        website: "https://playcanvas.com/",
        github: "https://github.com/playcanvas/engine",
        isHot: true,
        detailPage: null
    },
    "Cocos Creator": {
        description: "面向 2D/3D 游戏和互动内容的跨平台开发引擎与编辑器",
        website: "https://www.cocos.com/creator",
        github: "https://github.com/cocos/cocos-engine",
        isHot: true,
        detailPage: null
    },
    "Phaser": {
        description: "面向桌面与移动浏览器的快速 HTML5 2D 游戏框架",
        website: "https://phaser.io/",
        github: "https://github.com/phaserjs/phaser",
        isHot: true,
        detailPage: null
    },
    "PixiJS": {
        description: "高性能 2D WebGL 渲染引擎，适合游戏和富交互内容",
        website: "https://pixijs.com/",
        github: "https://github.com/pixijs/pixijs",
        isHot: true,
        detailPage: null
    },
    "Excalibur.js": {
        description: "使用 TypeScript 构建的开源 HTML5 2D 游戏引擎",
        website: "https://excaliburjs.com/",
        github: "https://github.com/excaliburjs/Excalibur",
        isHot: false,
        detailPage: null
    },
    "Construct 3": {
        description: "运行于浏览器的可视化游戏开发工具，支持快速跨平台发布",
        website: "https://www.construct.net/",
        github: null,
        isHot: false,
        detailPage: null
    },
    "WebGPU": {
        description: "现代 Web 图形与通用 GPU 计算 API，提供更低层级的硬件能力",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/WebGPU_API",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Canvas": {
        description: "浏览器原生的即时模式 2D 图形绘制 API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API",
        github: null,
        isHot: true,
        detailPage: null
    },

    // 跨平台
    "React Native": {
        description: "使用React构建原生移动应用的框架",
        website: "https://reactnative.dev/",
        github: "https://github.com/facebook/react-native",
        isHot: true,
        detailPage: "pages/react-native.html"
    },
    "Flutter": {
        description: "Google开发的UI工具包，构建跨平台应用",
        website: "https://flutter.dev/",
        github: "https://github.com/flutter/flutter",
        isHot: true,
        detailPage: null
    },
    "Electron": {
        description: "使用JavaScript、HTML和CSS构建跨平台桌面应用",
        website: "https://www.electronjs.org/",
        github: "https://github.com/electron/electron",
        isHot: true,
        detailPage: null
    },
    "Tauri": {
        description: "构建小型、快速和安全的桌面应用程序",
        website: "https://tauri.app/",
        github: "https://github.com/tauri-apps/tauri",
        isHot: true,
        detailPage: "pages/tauri.html"
    },

    // 状态管理
    "Redux": {
        description: "JavaScript应用的可预测状态容器",
        website: "https://redux.js.org/",
        github: "https://github.com/reduxjs/redux",
        isHot: true,
        detailPage: "pages/redux.html"
    },
    "Zustand": {
        description: "轻量级状态管理库，简单、快速、可扩展",
        website: "https://zustand-demo.pmnd.rs/",
        github: "https://github.com/pmndrs/zustand",
        isHot: true,
        detailPage: "pages/zustand.html"
    },
    "Jotai": {
        description: "原始且灵活的React状态管理库",
        website: "https://jotai.org/",
        github: "https://github.com/pmndrs/jotai",
        isHot: true,
        detailPage: null
    },
    "Pinia": {
        description: "Vue的官方状态管理库，类型安全且轻量",
        website: "https://pinia.vuejs.org/",
        github: "https://github.com/vuejs/pinia",
        isHot: true,
        detailPage: "pages/pinia.html"
    },

    // 全栈框架
    "Next.js": {
        description: "React全栈框架，支持SSR、SSG、RSC等现代特性",
        website: "https://nextjs.org/",
        github: "https://github.com/vercel/next.js",
        isHot: true,
        detailPage: "pages/nextjs.html"
    },
    "Nuxt.js": {
        description: "Vue全栈框架，支持SSR/SSG/ISR，开箱即用",
        website: "https://nuxt.com/",
        github: "https://github.com/nuxt/nuxt",
        isHot: true,
        detailPage: "pages/nuxtjs.html"
    },
    "Remix": {
        description: "专注于Web标准的React全栈框架",
        website: "https://remix.run/",
        github: "https://github.com/remix-run/remix",
        isHot: true,
        detailPage: null
    },

    // 测试框架
    "Jest": {
        description: "JavaScript测试框架，简单易用，功能丰富",
        website: "https://jestjs.io/",
        github: "https://github.com/facebook/jest",
        isHot: true,
        detailPage: "pages/jest.html"
    },
    "Vitest": {
        description: "Vite原生测试框架，极速的单元测试",
        website: "https://vitest.dev/",
        github: "https://github.com/vitest-dev/vitest",
        isHot: true,
        detailPage: "pages/vitest.html"
    },
    "Cypress": {
        description: "端到端测试框架，适合现代Web应用",
        website: "https://www.cypress.io/",
        github: "https://github.com/cypress-io/cypress",
        isHot: true,
        detailPage: "pages/cypress.html"
    },
    "Playwright": {
        description: "Microsoft开发的端到端测试框架",
        website: "https://playwright.dev/",
        github: "https://github.com/microsoft/playwright",
        isHot: true,
        detailPage: "pages/playwright.html"
    },

    // UI组件库
    "Ant Design": {
        description: "企业级UI设计语言和React组件库",
        website: "https://ant.design/",
        github: "https://github.com/ant-design/ant-design",
        isHot: true,
        detailPage: "pages/antdesign.html"
    },
    "Element Plus": {
        description: "Vue 3组件库，适合中后台管理系统",
        website: "https://element-plus.org/",
        github: "https://github.com/element-plus/element-plus",
        isHot: true,
        detailPage: "pages/elementplus.html"
    },
    "Material Design": {
        description: "Google的设计系统，提供统一的设计语言",
        website: "https://m3.material.io/",
        github: null,
        isHot: true,
        detailPage: null
    },

    // CSS工具
    "Tailwind CSS": {
        description: "功能优先的CSS框架，快速构建现代网站",
        website: "https://tailwindcss.com/",
        github: "https://github.com/tailwindlabs/tailwindcss",
        isHot: true,
        detailPage: "pages/tailwindcss.html"
    },
    "Sass": {
        description: "CSS预处理器，扩展CSS功能",
        website: "https://sass-lang.com/",
        github: "https://github.com/sass/sass",
        isHot: true,
        detailPage: "pages/sass.html"
    },

    // 数据获取
    "Axios": {
        description: "基于Promise的HTTP客户端，用于浏览器和Node.js",
        website: "https://axios-http.com/",
        github: "https://github.com/axios/axios",
        isHot: true,
        detailPage: "pages/axios.html"
    },
    "Fetch API": {
        description: "浏览器原生API，用于网络请求",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API",
        github: null,
        isHot: true,
        detailPage: null
    },

    // 动画库
    "GSAP": {
        description: "专业级JavaScript动画库，高性能动画引擎",
        website: "https://gsap.com/",
        github: "https://github.com/greensock/GSAP",
        isHot: true,
        detailPage: "pages/gsap.html"
    },
    "Framer Motion": {
        description: "React的动画库，简单且强大的动画API",
        website: "https://www.framer.com/motion/",
        github: "https://github.com/framer/motion",
        isHot: true,
        detailPage: "pages/framermotion.html"
    },

    // 工具库
    "Lodash": {
        description: "JavaScript工具库，提供模块化、高性能的工具函数",
        website: "https://lodash.com/",
        github: "https://github.com/lodash/lodash",
        isHot: true,
        detailPage: "pages/lodash.html"
    },
    "Day.js": {
        description: "轻量级JavaScript日期库，Moment.js的替代品",
        website: "https://day.js.org/",
        github: "https://github.com/iamkun/dayjs",
        isHot: true,
        detailPage: "pages/dayjs.html"
    },
    "date-fns": {
        description: "现代JavaScript日期工具库",
        website: "https://date-fns.org/",
        github: "https://github.com/date-fns/date-fns",
        isHot: true,
        detailPage: null
    },
    "Zod": {
        description: "TypeScript优先的模式验证库",
        website: "https://zod.dev/",
        github: "https://github.com/colinhacks/zod",
        isHot: true,
        detailPage: "pages/zod.html"
    },

    // 表单管理
    "React Hook Form": {
        description: "高性能、灵活的React表单验证库",
        website: "https://react-hook-form.com/",
        github: "https://github.com/react-hook-form/react-hook-form",
        isHot: true,
        detailPage: "pages/reacthookform.html"
    },
    "Formik": {
        description: "React表单管理库，构建复杂表单",
        website: "https://formik.org/",
        github: "https://github.com/jaredpalmer/formik",
        isHot: true,
        detailPage: null
    },

    // 国际化
    "i18next": {
        description: "JavaScript国际化框架，支持多种框架",
        website: "https://www.i18next.com/",
        github: "https://github.com/i18next/i18next",
        isHot: true,
        detailPage: null
    },

    // 监控工具
    "Sentry": {
        description: "应用监控和错误追踪平台",
        website: "https://sentry.io/",
        github: "https://github.com/getsentry/sentry",
        isHot: true,
        detailPage: null
    },

    // 部署平台
    "Vercel": {
        description: "现代Web应用部署平台，支持Next.js等框架",
        website: "https://vercel.com/",
        github: null,
        isHot: true,
        detailPage: "pages/vercel.html"
    },
    "Netlify": {
        description: "现代Web项目部署和托管平台",
        website: "https://www.netlify.com/",
        github: null,
        isHot: true,
        detailPage: null
    },

    // AI工具
    "GitHub Copilot": {
        description: "AI编程助手，提供代码建议和自动完成",
        website: "https://github.com/features/copilot",
        github: null,
        isHot: true,
        detailPage: null
    },
    "TensorFlow.js": {
        description: "在浏览器和Node.js中运行机器学习模型",
        website: "https://www.tensorflow.org/js",
        github: "https://github.com/tensorflow/tfjs",
        isHot: true,
        detailPage: null
    },

    // 微前端
    "Qiankun": {
        description: "基于single-spa的微前端实现库",
        website: "https://qiankun.umijs.org/",
        github: "https://github.com/umijs/qiankun",
        isHot: true,
        detailPage: null
    },
    "Module Federation": {
        description: "Webpack 5模块联邦，实现微前端架构",
        website: "https://webpack.js.org/concepts/module-federation/",
        github: null,
        isHot: true,
        detailPage: null
    },

    // 文档工具
    "VitePress": {
        description: "基于Vue和Vite的静态站点生成器",
        website: "https://vitepress.dev/",
        github: "https://github.com/vuejs/vitepress",
        isHot: true,
        detailPage: null
    },
    "Storybook": {
        description: "UI组件开发和文档工具",
        website: "https://storybook.js.org/",
        github: "https://github.com/storybookjs/storybook",
        isHot: true,
        detailPage: null
    },

    // Monorepo工具
    "Nx": {
        description: "智能、快速、可扩展的构建系统",
        website: "https://nx.dev/",
        github: "https://github.com/nrwl/nx",
        isHot: true,
        detailPage: null
    },
    "Turborepo": {
        description: "高性能JavaScript构建系统",
        website: "https://turbo.build/repo",
        github: "https://github.com/vercel/turbo",
        isHot: true,
        detailPage: null
    },

    // 低代码平台
    "Amis": {
        description: "百度低代码前端框架，JSON配置生成页面",
        website: "https://aisuda.bce.baidu.com/amis/",
        github: "https://github.com/baidu/amis",
        isHot: true,
        detailPage: null
    },

    // BaaS服务
    "Firebase": {
        description: "Google应用开发平台，提供后端服务",
        website: "https://firebase.google.com/",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Supabase": {
        description: "开源的Firebase替代品，基于PostgreSQL",
        website: "https://supabase.com/",
        github: "https://github.com/supabase/supabase",
        isHot: true,
        detailPage: null
    },

    // 浏览器API
    "Web Speech API": {
        description: "浏览器语音识别和合成API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API",
        github: null,
        isHot: false,
        detailPage: null
    },
    "Web Bluetooth API": {
        description: "浏览器蓝牙通信API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Bluetooth_API",
        github: null,
        isHot: false,
        detailPage: null
    },

    // Web3
    "ethers.js": {
        description: "以太坊JavaScript库，与区块链交互",
        website: "https://docs.ethers.org/",
        github: "https://github.com/ethers-io/ethers.js",
        isHot: true,
        detailPage: null
    },

    // 协作技术
    "Yjs": {
        description: "高性能CRDT框架，实现实时协作",
        website: "https://yjs.dev/",
        github: "https://github.com/yjs/yjs",
        isHot: true,
        detailPage: null
    },
    "WebSocket": {
        description: "浏览器全双工通信协议",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket",
        github: null,
        isHot: true,
        detailPage: null
    },
    "ONNX Runtime Web": {
        description: "在浏览器中使用 WebAssembly、WebGPU 等后端运行 ONNX 模型",
        website: "https://onnxruntime.ai/docs/get-started/with-javascript/web.html",
        github: "https://github.com/microsoft/onnxruntime",
        isHot: true,
        detailPage: null
    },

    // 常用框架与工程工具补充
    "Cloudflare Workers": {
        description: "运行在 Cloudflare 全球边缘网络上的 Serverless 计算平台",
        website: "https://workers.cloudflare.com/",
        github: "https://github.com/cloudflare/workers-sdk",
        isHot: true,
        detailPage: null
    },
    "Rspack": {
        description: "使用 Rust 构建、兼容 Webpack 生态的高性能打包工具",
        website: "https://rspack.dev/",
        github: "https://github.com/web-infra-dev/rspack",
        isHot: true,
        detailPage: null
    },
    "UnoCSS": {
        description: "即时按需生成的原子化 CSS 引擎，强调灵活性与性能",
        website: "https://unocss.dev/",
        github: "https://github.com/unocss/unocss",
        isHot: true,
        detailPage: null
    },
    "Less": {
        description: "向后兼容 CSS 的动态样式预处理语言",
        website: "https://lesscss.org/",
        github: "https://github.com/less/less.js",
        isHot: false,
        detailPage: null
    },
    "PostCSS": {
        description: "使用 JavaScript 插件转换和分析 CSS 的工具",
        website: "https://postcss.org/",
        github: "https://github.com/postcss/postcss",
        isHot: true,
        detailPage: null
    },
    "Styled Components": {
        description: "使用标签模板为 React 组件编写局部作用域样式的 CSS-in-JS 库",
        website: "https://styled-components.com/",
        github: "https://github.com/styled-components/styled-components",
        isHot: true,
        detailPage: null
    },
    "Emotion": {
        description: "面向 JavaScript 应用的高性能 CSS-in-JS 样式库",
        website: "https://emotion.sh/",
        github: "https://github.com/emotion-js/emotion",
        isHot: true,
        detailPage: null
    },
    "React Router": {
        description: "React 应用广泛使用的声明式路由解决方案",
        website: "https://reactrouter.com/",
        github: "https://github.com/remix-run/react-router",
        isHot: true,
        detailPage: null
    },
    "React Query": {
        description: "TanStack Query 的 React 适配方案，用于异步服务端状态管理",
        website: "https://tanstack.com/query/latest",
        github: "https://github.com/TanStack/query",
        isHot: true,
        detailPage: null
    },
    "Vue Router": {
        description: "Vue.js 官方客户端路由解决方案",
        website: "https://router.vuejs.org/",
        github: "https://github.com/vuejs/router",
        isHot: true,
        detailPage: null
    },
    "VueUse": {
        description: "面向 Vue Composition API 的实用组合式函数集合",
        website: "https://vueuse.org/",
        github: "https://github.com/vueuse/vueuse",
        isHot: true,
        detailPage: null
    },
    "Vant": {
        description: "轻量、可靠的移动端 Vue 组件库",
        website: "https://vant-ui.github.io/vant/",
        github: "https://github.com/youzan/vant",
        isHot: true,
        detailPage: null
    },
    "Angular Material": {
        description: "Angular 官方 Material Design UI 组件库",
        website: "https://material.angular.dev/",
        github: "https://github.com/angular/components",
        isHot: true,
        detailPage: null
    },
    "RxJS": {
        description: "使用 Observable 组合和处理异步事件流的响应式编程库",
        website: "https://rxjs.dev/",
        github: "https://github.com/ReactiveX/rxjs",
        isHot: true,
        detailPage: null
    },
    "Testing Library": {
        description: "鼓励以用户行为为中心测试 UI 组件的工具集合",
        website: "https://testing-library.com/",
        github: "https://github.com/testing-library",
        isHot: true,
        detailPage: null
    },
    "Puppeteer": {
        description: "通过 DevTools Protocol 控制 Chrome 和 Firefox 的浏览器自动化库",
        website: "https://pptr.dev/",
        github: "https://github.com/puppeteer/puppeteer",
        isHot: true,
        detailPage: null
    },
    "uni-app": {
        description: "使用 Vue.js 开发多端应用的跨平台框架",
        website: "https://uniapp.dcloud.net.cn/",
        github: "https://github.com/dcloudio/uni-app",
        isHot: true,
        detailPage: null
    },
    "Taro": {
        description: "京东开源的多端统一开发框架，覆盖小程序、H5 与原生应用",
        website: "https://taro.zone/",
        github: "https://github.com/NervJS/taro",
        isHot: true,
        detailPage: null
    },
    "Ionic": {
        description: "使用 Web 技术构建跨平台移动与桌面应用的 UI 工具包",
        website: "https://ionicframework.com/",
        github: "https://github.com/ionic-team/ionic-framework",
        isHot: true,
        detailPage: null
    },
    "GraphQL": {
        description: "面向 API 的查询语言及服务端执行规范",
        website: "https://graphql.org/",
        github: "https://github.com/graphql/graphql-spec",
        isHot: true,
        detailPage: null
    },
    "tRPC": {
        description: "无需代码生成即可构建端到端类型安全 API 的 TypeScript 框架",
        website: "https://trpc.io/",
        github: "https://github.com/trpc/trpc",
        isHot: true,
        detailPage: null
    },
    "Express": {
        description: "简洁灵活的 Node.js Web 应用框架",
        website: "https://expressjs.com/",
        github: "https://github.com/expressjs/express",
        isHot: true,
        detailPage: null
    },
    "NestJS": {
        description: "用于构建高效、可扩展 Node.js 服务端应用的渐进式框架",
        website: "https://nestjs.com/",
        github: "https://github.com/nestjs/nest",
        isHot: true,
        detailPage: null
    },
    "Hono": {
        description: "面向边缘运行时和 Web 标准的轻量、快速 Web 框架",
        website: "https://hono.dev/",
        github: "https://github.com/honojs/hono",
        isHot: true,
        detailPage: null
    },
    "Fastify": {
        description: "低开销、插件化并注重开发体验的 Node.js Web 框架",
        website: "https://fastify.dev/",
        github: "https://github.com/fastify/fastify",
        isHot: true,
        detailPage: null
    },
    "AntV": {
        description: "蚂蚁集团开源的数据可视化解决方案集合",
        website: "https://antv.antgroup.com/",
        github: "https://github.com/antvis",
        isHot: true,
        detailPage: null
    },
    "Highcharts": {
        description: "成熟的交互式 Web 图表库，覆盖丰富商业可视化场景",
        website: "https://www.highcharts.com/",
        github: "https://github.com/highcharts/highcharts",
        isHot: true,
        detailPage: null
    },
    "Plotly.js": {
        description: "支持科学、统计与 3D 图表的声明式 JavaScript 可视化库",
        website: "https://plotly.com/javascript/",
        github: "https://github.com/plotly/plotly.js",
        isHot: true,
        detailPage: null
    },
    "Deck.gl": {
        description: "面向大规模数据集的 WebGL 地理空间可视化框架",
        website: "https://deck.gl/",
        github: "https://github.com/visgl/deck.gl",
        isHot: true,
        detailPage: null
    },
    "Single-spa": {
        description: "用于组合多个前端框架与应用的微前端路由框架",
        website: "https://single-spa.js.org/",
        github: "https://github.com/single-spa/single-spa",
        isHot: true,
        detailPage: null
    },
    "MobX": {
        description: "通过透明响应式编程实现简单、可扩展状态管理的库",
        website: "https://mobx.js.org/",
        github: "https://github.com/mobxjs/mobx",
        isHot: true,
        detailPage: null
    },
    "XState": {
        description: "使用状态机和状态图编排复杂应用逻辑的工具",
        website: "https://stately.ai/docs/xstate",
        github: "https://github.com/statelyai/xstate",
        isHot: true,
        detailPage: null
    },
    "Valtio": {
        description: "基于 Proxy 的轻量 React 状态管理库",
        website: "https://valtio.dev/",
        github: "https://github.com/pmndrs/valtio",
        isHot: false,
        detailPage: null
    },
    "Docusaurus": {
        description: "Meta 开源的现代静态文档网站生成器",
        website: "https://docusaurus.io/",
        github: "https://github.com/facebook/docusaurus",
        isHot: true,
        detailPage: null
    },
    "Astro": {
        description: "面向内容网站、默认减少客户端 JavaScript 的 Web 框架",
        website: "https://astro.build/",
        github: "https://github.com/withastro/astro",
        isHot: true,
        detailPage: null
    },
    "Eleventy": {
        description: "灵活且简单的 JavaScript 静态站点生成器",
        website: "https://www.11ty.dev/",
        github: "https://github.com/11ty/eleventy",
        isHot: false,
        detailPage: null
    },
    "Lighthouse": {
        description: "用于审计网页性能、可访问性、SEO 与最佳实践的自动化工具",
        website: "https://developer.chrome.com/docs/lighthouse/",
        github: "https://github.com/GoogleChrome/lighthouse",
        isHot: true,
        detailPage: null
    },
    "WebPageTest": {
        description: "从真实浏览器和全球节点测量网站性能的测试平台",
        website: "https://www.webpagetest.org/",
        github: "https://github.com/WPO-Foundation/webpagetest",
        isHot: true,
        detailPage: null
    },
    "Service Worker": {
        description: "运行于浏览器后台、支持离线缓存与请求拦截的 Web API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API",
        github: null,
        isHot: true,
        detailPage: null
    },
    "PWA": {
        description: "利用现代 Web 能力提供可安装、可靠且接近原生体验的应用模式",
        website: "https://web.dev/explore/progressive-web-apps",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Partytown": {
        description: "将第三方脚本移入 Web Worker，降低主线程负载的性能工具",
        website: "https://partytown.qwik.dev/",
        github: "https://github.com/QwikDev/partytown",
        isHot: false,
        detailPage: null
    },

    // 专项领域代表工具补充
    "WordPress": {
        description: "成熟的开源内容管理系统，拥有庞大的主题与插件生态",
        website: "https://wordpress.org/",
        github: "https://github.com/WordPress/wordpress-develop",
        isHot: true,
        detailPage: null
    },
    "Strapi": {
        description: "开源、可定制的无头内容管理系统",
        website: "https://strapi.io/",
        github: "https://github.com/strapi/strapi",
        isHot: true,
        detailPage: null
    },
    "Emscripten": {
        description: "将 C/C++ 等语言编译到 WebAssembly 的工具链",
        website: "https://emscripten.org/",
        github: "https://github.com/emscripten-core/emscripten",
        isHot: true,
        detailPage: null
    },
    "WASI": {
        description: "为 WebAssembly 提供系统接口能力的标准化 API",
        website: "https://wasi.dev/",
        github: "https://github.com/WebAssembly/WASI",
        isHot: true,
        detailPage: null
    },
    "Sharp": {
        description: "高性能 Node.js 图像处理库，基于 libvips",
        website: "https://sharp.pixelplumbing.com/",
        github: "https://github.com/lovell/sharp",
        isHot: true,
        detailPage: null
    },
    "Video.js": {
        description: "可扩展、跨浏览器的开源 HTML5 视频播放器",
        website: "https://videojs.com/",
        github: "https://github.com/videojs/video.js",
        isHot: true,
        detailPage: null
    },
    "PDF.js": {
        description: "Mozilla 开源的浏览器 PDF 解析与渲染方案",
        website: "https://mozilla.github.io/pdf.js/",
        github: "https://github.com/mozilla/pdf.js",
        isHot: true,
        detailPage: null
    },
    "FSD": {
        description: "Feature-Sliced Design，用于组织大型前端项目的架构方法",
        website: "https://feature-sliced.design/",
        github: "https://github.com/feature-sliced/documentation",
        isHot: false,
        detailPage: null
    },
    "RxDB": {
        description: "面向 JavaScript 应用的本地优先响应式数据库",
        website: "https://rxdb.info/",
        github: "https://github.com/pubkey/rxdb",
        isHot: true,
        detailPage: null
    },
    "Dexie.js": {
        description: "简化 IndexedDB 使用的轻量 JavaScript 数据库封装",
        website: "https://dexie.org/",
        github: "https://github.com/dexie/Dexie.js",
        isHot: true,
        detailPage: null
    },
    "OpenTelemetry": {
        description: "厂商中立的可观测性数据采集标准与工具集合",
        website: "https://opentelemetry.io/",
        github: "https://github.com/open-telemetry",
        isHot: true,
        detailPage: null
    },
    "PostHog": {
        description: "开源产品分析平台，提供事件分析、回放和实验功能",
        website: "https://posthog.com/",
        github: "https://github.com/PostHog/posthog",
        isHot: true,
        detailPage: null
    },
    "axe-core": {
        description: "用于自动化检测 Web 可访问性问题的测试引擎",
        website: "https://www.deque.com/axe/core-documentation/",
        github: "https://github.com/dequelabs/axe-core",
        isHot: true,
        detailPage: null
    },
    "WCAG": {
        description: "W3C 制定的 Web 内容无障碍指南",
        website: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Commander.js": {
        description: "用于构建 Node.js 命令行界面的常用库",
        website: "https://github.com/tj/commander.js",
        github: "https://github.com/tj/commander.js",
        isHot: true,
        detailPage: null
    },
    "Inquirer.js": {
        description: "用于创建交互式命令行提示与表单的工具",
        website: "https://github.com/SBoudrias/Inquirer.js",
        github: "https://github.com/SBoudrias/Inquirer.js",
        isHot: true,
        detailPage: null
    },
    "StyleX": {
        description: "Meta 开源的可扩展、静态提取 CSS-in-JS 方案",
        website: "https://stylexjs.com/",
        github: "https://github.com/facebook/stylex",
        isHot: true,
        detailPage: null
    },
    "clsx": {
        description: "用于条件组合 className 字符串的小型工具",
        website: "https://github.com/lukeed/clsx",
        github: "https://github.com/lukeed/clsx",
        isHot: true,
        detailPage: null
    },
    "Docker": {
        description: "使用容器构建、分发和运行应用的平台",
        website: "https://www.docker.com/",
        github: "https://github.com/docker",
        isHot: true,
        detailPage: null
    },
    "Terraform": {
        description: "使用声明式配置管理基础设施的 IaC 工具",
        website: "https://developer.hashicorp.com/terraform",
        github: "https://github.com/hashicorp/terraform",
        isHot: true,
        detailPage: null
    },
    "Container Queries": {
        description: "根据包含容器尺寸应用样式的现代 CSS 能力",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_containment/Container_queries",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Popover API": {
        description: "用于声明和控制弹出层的浏览器原生 API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/popover",
        github: null,
        isHot: true,
        detailPage: null
    },
    "View Transition API": {
        description: "用于在页面状态或文档导航之间创建平滑视觉过渡的浏览器 API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/API/View_Transition_API",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Auth.js": {
        description: "面向现代 Web 应用的开源身份认证解决方案",
        website: "https://authjs.dev/",
        github: "https://github.com/nextauthjs/next-auth",
        isHot: true,
        detailPage: null
    },
    "Clerk": {
        description: "为 Web 与移动应用提供认证和用户管理的开发平台",
        website: "https://clerk.com/",
        github: "https://github.com/clerk",
        isHot: true,
        detailPage: null
    },
    "AG Grid": {
        description: "功能完整、高性能的 JavaScript 数据表格组件",
        website: "https://www.ag-grid.com/",
        github: "https://github.com/ag-grid/ag-grid",
        isHot: true,
        detailPage: null
    },
    "TanStack Table": {
        description: "面向多框架的无头表格与数据网格工具",
        website: "https://tanstack.com/table/latest",
        github: "https://github.com/TanStack/table",
        isHot: true,
        detailPage: null
    },
    "WebExtensions API": {
        description: "用于构建跨浏览器扩展的标准化 API",
        website: "https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Plasmo": {
        description: "面向浏览器扩展的现代 React 开发框架",
        website: "https://www.plasmo.com/",
        github: "https://github.com/PlasmoHQ/plasmo",
        isHot: true,
        detailPage: null
    },
    "WXT": {
        description: "支持多浏览器、多框架的下一代扩展开发工具",
        website: "https://wxt.dev/",
        github: "https://github.com/wxt-dev/wxt",
        isHot: true,
        detailPage: null
    },
    "Renovate": {
        description: "自动发现并更新项目依赖的依赖管理机器人",
        website: "https://docs.renovatebot.com/",
        github: "https://github.com/renovatebot/renovate",
        isHot: true,
        detailPage: null
    },
    "Snyk": {
        description: "用于发现和修复依赖、代码与容器安全问题的平台",
        website: "https://snyk.io/",
        github: "https://github.com/snyk",
        isHot: true,
        detailPage: null
    },
    "LaunchDarkly": {
        description: "用于功能开关、渐进发布与实验的平台",
        website: "https://launchdarkly.com/",
        github: "https://github.com/launchdarkly",
        isHot: true,
        detailPage: null
    },
    "GrowthBook": {
        description: "开源功能开关与 A/B 实验平台",
        website: "https://www.growthbook.io/",
        github: "https://github.com/growthbook/growthbook",
        isHot: true,
        detailPage: null
    },
    "Fuse.js": {
        description: "轻量、无依赖的客户端模糊搜索库",
        website: "https://www.fusejs.io/",
        github: "https://github.com/krisk/Fuse",
        isHot: true,
        detailPage: null
    },
    "Algolia": {
        description: "面向应用和网站的托管搜索与发现平台",
        website: "https://www.algolia.com/",
        github: "https://github.com/algolia",
        isHot: true,
        detailPage: null
    },
    "React Flow": {
        description: "用于构建节点式编辑器和交互图的 React 组件库",
        website: "https://reactflow.dev/",
        github: "https://github.com/xyflow/xyflow",
        isHot: true,
        detailPage: null
    },
    "tldraw": {
        description: "用于构建无限画布和白板体验的 SDK",
        website: "https://tldraw.dev/",
        github: "https://github.com/tldraw/tldraw",
        isHot: true,
        detailPage: null
    },
    "Uppy": {
        description: "模块化、可扩展的开源文件上传工具",
        website: "https://uppy.io/",
        github: "https://github.com/transloadit/uppy",
        isHot: true,
        detailPage: null
    },
    "FilePond": {
        description: "灵活的 JavaScript 文件上传组件",
        website: "https://pqina.nl/filepond/",
        github: "https://github.com/pqina/filepond",
        isHot: true,
        detailPage: null
    },
    "Vercel AI SDK": {
        description: "用于构建流式 AI 应用和 Agent 界面的 TypeScript 工具包",
        website: "https://ai-sdk.dev/",
        github: "https://github.com/vercel/ai",
        isHot: true,
        detailPage: null
    },
    "assistant-ui": {
        description: "用于构建 AI 聊天界面的开源 React 组件库",
        website: "https://www.assistant-ui.com/",
        github: "https://github.com/assistant-ui/assistant-ui",
        isHot: true,
        detailPage: null
    },
    "React Compiler": {
        description: "自动优化 React 组件与 Hook 的编译器",
        website: "https://react.dev/learn/react-compiler",
        github: "https://github.com/facebook/react",
        isHot: true,
        detailPage: null
    },
    "Angular Signals": {
        description: "Angular 内置的细粒度响应式状态模型",
        website: "https://angular.dev/guide/signals",
        github: "https://github.com/angular/angular",
        isHot: true,
        detailPage: null
    },
    "Stripe.js": {
        description: "用于安全集成 Stripe 支付体验的 JavaScript SDK",
        website: "https://docs.stripe.com/js",
        github: "https://github.com/stripe/stripe-js",
        isHot: true,
        detailPage: null
    },
    "Shopify Hydrogen": {
        description: "Shopify 面向无头电商的 React 工具与框架",
        website: "https://hydrogen.shopify.dev/",
        github: "https://github.com/Shopify/hydrogen",
        isHot: true,
        detailPage: null
    },
    "React Email": {
        description: "使用 React 和 TypeScript 构建邮件模板的组件库",
        website: "https://react.email/",
        github: "https://github.com/resend/react-email",
        isHot: true,
        detailPage: null
    },
    "MJML": {
        description: "用于生成响应式邮件 HTML 的标记语言与工具链",
        website: "https://mjml.io/",
        github: "https://github.com/mjmlio/mjml",
        isHot: true,
        detailPage: null
    },
    "DOMPurify": {
        description: "用于清理不可信 HTML、SVG 和 MathML 的安全库",
        website: "https://github.com/cure53/DOMPurify",
        github: "https://github.com/cure53/DOMPurify",
        isHot: true,
        detailPage: null
    },
    "CSP": {
        description: "用于限制页面可加载资源并缓解 XSS 的内容安全策略",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP",
        github: null,
        isHot: true,
        detailPage: null
    },
    "IPFS": {
        description: "面向内容寻址和点对点分发的开放协议与网络",
        website: "https://ipfs.tech/",
        github: "https://github.com/ipfs",
        isHot: true,
        detailPage: null
    },
    "Arweave": {
        description: "面向永久数据存储的去中心化网络",
        website: "https://www.arweave.org/",
        github: "https://github.com/ArweaveTeam",
        isHot: true,
        detailPage: null
    },
    "Math.js": {
        description: "面向 JavaScript 和 Node.js 的广泛数学运算库",
        website: "https://mathjs.org/",
        github: "https://github.com/josdejong/mathjs",
        isHot: true,
        detailPage: null
    },
    "gl-matrix": {
        description: "面向 WebGL 的高性能矩阵与向量运算库",
        website: "https://glmatrix.net/",
        github: "https://github.com/toji/gl-matrix",
        isHot: true,
        detailPage: null
    },
    "Intl API": {
        description: "浏览器原生的语言敏感字符串比较、数字和日期格式化 API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Temporal API": {
        description: "用于处理日期、时间和时区的现代 JavaScript API",
        website: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal",
        github: "https://github.com/tc39/proposal-temporal",
        isHot: true,
        detailPage: null
    },
    "Privacy Sandbox": {
        description: "旨在提升 Web 隐私保护并维持开放生态的技术计划",
        website: "https://privacysandbox.com/",
        github: null,
        isHot: true,
        detailPage: null
    },
    "Cookiebot": {
        description: "用于网站 Cookie 同意与隐私合规管理的平台",
        website: "https://www.cookiebot.com/",
        github: null,
        isHot: false,
        detailPage: null
    },
    "Plugin Architecture": {
        description: "通过稳定扩展点加载独立功能模块的应用架构方式",
        website: "https://code.visualstudio.com/api",
        github: "https://github.com/microsoft/vscode",
        isHot: false,
        detailPage: null
    },
    "Hook System": {
        description: "通过生命周期钩子扩展和组合软件行为的机制",
        website: "https://github.com/webpack/tapable",
        github: "https://github.com/webpack/tapable",
        isHot: false,
        detailPage: null
    },
    "Middleware Pattern": {
        description: "将请求或事件处理拆分为可组合中间步骤的设计模式",
        website: "https://expressjs.com/en/guide/using-middleware.html",
        github: "https://github.com/expressjs/express",
        isHot: false,
        detailPage: null
    }
};

// 常见生态别名复用核心技术信息，避免重复维护同一官网与描述
const techAliases = {
    "React Core": "React",
    "Vue Core": "Vue.js",
    "Angular Core": "Angular",
    "View Transitions API": "View Transition API"
};

// 获取技术详情
function getTechDetail(techName) {
    return techDetails[techAliases[techName] || techName] || {
        description: `${techName} - 前端技术工具`,
        website: null,
        github: null,
        isHot: false,
        detailPage: null
    };
}

// 获取所有热门技术
function getHotTechs() {
    return Object.entries(techDetails)
        .filter(([name, detail]) => detail.isHot)
        .map(([name, detail]) => ({
            name,
            ...detail
        }));
}

// 获取有详情页的技术
function getTechsWithDetailPage() {
    return Object.entries(techDetails)
        .filter(([name, detail]) => detail.detailPage)
        .map(([name, detail]) => ({
            name,
            ...detail
        }));
}

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        techDetails,
        getTechDetail,
        getHotTechs,
        getTechsWithDetailPage
    };
}
