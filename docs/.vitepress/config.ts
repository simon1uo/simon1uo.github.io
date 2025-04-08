import { defineConfig } from 'vitepress'
import head from './config/head'
import meta from './config/meta'
import themeConfig from './config/themeConfig'

export default defineConfig({
  ...meta,
  base: '/',
  head,
  themeConfig,
})
