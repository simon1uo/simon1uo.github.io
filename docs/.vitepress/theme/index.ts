import Layout from "./Layout.vue";
import NotFound from "./components/NotFound.vue";

import "virtual:windi.css";
import "./style/custom.css";

import Archive from "./components/Archive.vue";
import Tags from "./components/Tags.vue";

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    app.component("Archive", Archive);
    app.component("Tags", Tags);
  },
};
