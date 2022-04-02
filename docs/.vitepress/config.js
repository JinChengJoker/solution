module.exports = {
  title: '疑难杂症聚集地',
  description: 'Just playing around.',
  lang: 'zh-Hans',
  base: '/solution/',
  themeConfig: {
    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    { text: '欢迎', link: '/' },
    {
      text: 'CI & CD',
      children: [
        { text: 'GitLab 部署', link: '/ci_cd/gitlab' },
      ]
    }
  ]
}