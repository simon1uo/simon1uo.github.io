import Archive from './components/Archive.vue'
import NotFound from './components/NotFound.vue'

import Tags from './components/Tags.vue'
import Layout from './Layout.vue'

import 'virtual:uno.css'
import './style/custom.css'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('Archive', Archive)
    app.component('Tags', Tags)
  },
}
