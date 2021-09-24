module.exports = {
  title: 'Desafíos Frontend Mentor',
  description: 'Guía paso a paso para resolver los desafíos de Frontend Mentor',
  dest: 'docs',
  base: '/guia-desafios-frontend-mentor/',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
    ],
    sidebar: [
      '/',
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
