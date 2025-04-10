import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import head from './config/head'
import meta from './config/meta'
import themeConfig from './config/themeConfig'

export default defineConfig({
  ...meta,
  base: '/',
  head,
  themeConfig,
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/NavBar.vue', import.meta.url),
          ),
        },
      ],
    },
  },
})
