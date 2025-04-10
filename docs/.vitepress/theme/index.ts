import NotFound from './components/NotFound.vue'
import Layout from './Layout.vue'
import { registerPageComponents } from './utils/components'
import 'virtual:uno.css'
// import './style/custom.css'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    registerPageComponents(app)
  },
}
