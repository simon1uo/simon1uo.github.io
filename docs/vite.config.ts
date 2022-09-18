import type { UserConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import WindiCSS from "vite-plugin-windicss";

const config: UserConfig = {
  base: "/",
  optimizeDeps: {
    exclude: ["vue-demi", "@vueuse/shared", "@vueuse/core"],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      dirs: ["docs/.vitepress/theme/components"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: "",
        }),
      ],
    }),
    Icons(),
    WindiCSS({
      preflight: false,
    }),
    {
      name: "code-block-escape",
      enforce: "post",
      transform(code, id) {
        if (!id.endsWith(".md")) return;
        return code.replace(/\/\/```/gm, "```");
      },
    },
  ],
};

export default config;
