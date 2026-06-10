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
        description: " opinionated 代码格式化工具，支持多种语言",
        website: "https://prettier.io/",
        github: "https://github.com/prettier/prettier",
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
        github: "https.com/nrwl/nx",
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
    }
};

// 获取技术详情
function getTechDetail(techName) {
    return techDetails[techName] || {
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
