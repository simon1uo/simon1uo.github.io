import NotFound from './components/NotFound.vue'
import Layout from './Layout.vue'
import { registerPageComponents } from './utils/components'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import 'vitepress/theme-without-fonts'
import './style/custom.css'
import './style/main.css'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    registerPageComponents(app)
  },
}
