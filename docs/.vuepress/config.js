module.exports = {
  title: 'ω-ToolBox',
  description: 'This is a Launchpad content transit site',
  theme: 'antdocs',
  themeConfig: {
    search: false,
    displayAllHeaders: true,
    smoothScroll: true,
    nextLinks: false,
    prevLinks: false,
    nav: [
      { text: '下载区', link: '/transit-docs/' },
      { text: 'Launchpad固件助手', link: '/fwutil/' },
      { text: '请支持本站！', link: '/support' },
    ],
    sidebar: {
      '/transit-docs/': [
        'amxd',
        'tools'
      ]
    }
  }
}