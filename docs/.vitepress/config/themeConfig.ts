import type { DefaultTheme } from 'vitepress'
import nav from './nav'

const themeConfig: DefaultTheme.Config = {
  // logo: '/logo.svg',
  nav,
  socialLinks: [
    {
      icon: 'github',
      link: 'http://github.com/simon1uo/simon1uo.github.io',
    },
  ],

  editLink: {
    text: 'Edit',
    pattern:
      'https://github.com/simon1uo/simon1uo.github.io/edit/main/docs/:path',
  },
  footer: {
    copyright: 'copyright (c) simon1uo',
  },
}

export default themeConfig
