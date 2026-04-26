import type { HeadConfig } from 'vitepress'

export default <HeadConfig[]>[
  [
    'meta',
    {
      charset: 'utf-8',
    },
  ],
  [
    'meta',
    {
      'http-equiv': 'refresh',
      content: '0; url=https://simon1uo.me/',
    },
  ],
  [
    'link',
    {
      rel: 'canonical',
      href: 'https://simon1uo.me/',
    },
  ],
  [
    'script',
    {},
    'location.replace("https://simon1uo.me" + location.pathname + location.search + location.hash)',
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.svg',
    },
  ],
]
