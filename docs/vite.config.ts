import UnoCss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    UnoCss(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'auto-imports.d.ts',
    }),
    {
      name: 'code-block-escape',
      enforce: 'post',
      transform(code, id) {
        if (!id.endsWith('.md'))
          return
        return code.replace(/\/\/```/g, '```')
      },
    },
  ],
})
