module.exports = {
  title: 'Dr-UI',
  description: 'Vue2.x的组件库',
  base: '/',
  themeConfig: {
    nav:[
      { text: '首页', link: '/'},
      { text: '指南', link: '/guide/start'},
      // { text: '文档', link: '/'},
      { text: 'element', link: 'https://element.eleme.cn/#/zh-CN'}
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/',
          '/guide/start'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children:[
          {
            title: '通用',
            collapsable: false,
            children: [
              '/component/Button'
            ]
          }
        ]
      }
    ]
  }
}