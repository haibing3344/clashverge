import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clash Verge Rev",
  description: "Clash Verge 的延续",
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/about' },
      { text: '下载', link: '/install/install' },
      { text: '教程', link: '/guide/quickstart' },
      { text: '机场推荐', link: 'https://20220607.xyz' },
      { text: '常见问题', link: '/faq/windows' }
    ],

    sidebar: {
      // 教程页面的侧边栏
      '/guide/': [
        {
          text: '教程',
          items: [
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '订阅导入', link: '/guide/profile' },
            { text: '导出日志', link: '/guide/log' },
            { text: '自定义托盘图标', link: '/guide/tray_icon' },
            { text: '自定义主题/样式', link: '/guide/css_injection' },
            { text: 'URL Schemes', link: '/guide/url_schemes' },
            { text: '名词解释', link: '/guide/term' },
            { text: '自定义规则', link: '/guide/rules' }
          ]
        }
      ],
      // 安装页面的侧边栏
      '/install/': [
        {
          text: '下载',
          items: [
            { text: '下载', link: '/install/install' },
            { text: '快速入门', link: '/guide/quickstart' }
          ]
        }
      ],
      
      // 捐赠页面的侧边栏
      '/donate/': [
        {
          text: '捐赠支持',
          items: [
            { text: '捐赠方式', link: '/donate/' },
            { text: '捐赠记录', link: '/donate/records' }
          ]
        }
      ],
      
      // 常见问题的侧边栏
      '/faq/': [
        {
          text: '常见问题',
          items: [
            { text: 'Windows', link: '/faq/windows' },
            { text: 'macOS', link: '/faq/macos' },
            { text: 'Linux', link: '/faq/linux' },
            { text: '其它问题', link: '/faq/other' }

          ]
        }
      ],
      
      // 默认侧边栏（用于其他页面）
      '/': [
        {
          text: '介绍',
          items: [
            { text: '介绍', link: '/about' },
            { text: '快速入门', link: '/guide/quickstart' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clash-verge-rev/clash-verge-rev' }
    ],
     // 文章翻页
    docFooter: {
    prev: '上一篇',
    next: '下一篇'
    },
       
     // 移动端 - 外观
    darkModeSwitchLabel: '外观',
       
     // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',
       
    // 移动端 - menu
    sidebarMenuLabel: '菜单',
       
    outlineTitle: '本页导航',
       
    // 站点页脚配置
    footer: {
      message: "Clash Verge Rev,Clash Verge Rev怎么配置,Clash Verge Rev官网,Clash Verge Rev下载",
      copyright: 'Copyright © 2025  <a href="/"> Clash Verge Rev </a>'
    },
       
    search: {
      provider: 'local'
    }
  },
  sitemap: {
    hostname: 'https://clashverge.uk'
  }
})
