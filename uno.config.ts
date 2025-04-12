import { fileURLToPath } from 'node:url'
import { defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig((() => {
  return {
    // theme: {
    //   extend: {
    //     colors: {
    //       primary: {
    //         DEFAULT: '#424242',
    //         deep: '#242424',
    //       },
    //     },
    //   },
    // },
    presets: [
      presetWind3(),
      presetAttributify({

      }),
      presetIcons({
        collections: {
          akar: () => import('@iconify-json/akar-icons/icons.json').then(i => i.default),
        },
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      presetWebFonts({
        provider: 'bunny',
        fonts: {
          sans: ['Roboto', 'Inter'],
          mono: ['IBM Plex Mono'],
        },
      }),
    ],
    shortcuts: {
      'icon-button': 'inline-block cursor-pointer font-size-5 text-dark/50 dark:text-white/50 hover:text-dark/70 dark:hover:text-white/70 transition-colors duration-250',
    },
    content: {
      pipeline: {
        include: [
          /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
          fileURLToPath(new URL('./.vitepress/config/themeConfig.ts', import.meta.url)),
        ],
      },
    },

  }
})())
