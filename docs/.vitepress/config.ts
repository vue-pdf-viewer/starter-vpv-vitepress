import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VPV x Vitepress starter",
  description: "A VPV x Vitepress site starter kit ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/mobile-example' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Mobile Example', link: '/mobile-example' },
          { text: 'Desktop Example', link: '/desktop-example' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vue-pdf-viewer' }
    ]
  }
})
