module.exports = {
  title: 'Guía de soluciones a Frontend Mentor',
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
      {
        text: 'Newbie',
        link: '/newbie/',
      },
      // {
      //   text: 'Junior',
      //   link: '/junior/',
      // },

    ],
    // sidebar: [
    //           '/',
    //           '/newbie/01/', 
    //           '/newbie/02/', 
    //         ]
    sidebar: {
      '/newbie/': [
        {
          title: 'Newbie',
          collapsable: false,
          children: [
            '',
            'newbie-01',
            // 'newbie-02',
          ]
        }
      ],
      '/junior/': [
        {
          title: 'Junior',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
