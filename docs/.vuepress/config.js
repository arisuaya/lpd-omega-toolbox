module.exports = {
  title: 'Omega-ToolBox',
  description: 'This is a Launchpad content transit site',
  theme: 'antdocs',
  themeConfig: {
    search: false,
    displayAllHeaders: true,
    smoothScroll: true,
    nextLinks: false,
    prevLinks: false,
    nav: [
      { text: '中转站', link: '/transit-docs/' },
      { text: 'Launchpad固件助手', link: '/fwutil/' },
    ],
    sidebar: {
      '/transit-docs/': [
        'amxd',
        'tools'
      ]
    }
  }
}