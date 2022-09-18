import { defineConfig } from "vitepress";
import meta from "./config/meta";
import head from "./config/head";
import themeConfig from "./config/themeConfig";

export default defineConfig({
  ...meta,
  base: "/",
  head,
  themeConfig,
});
