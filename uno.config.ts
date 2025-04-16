import { fileURLToPath } from 'node:url'
import {
  createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'
import { defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig((() => {
  return {
    presets: [
      presetWind3(),
      presetAttributify({}),
      presetIcons({
        collections: {
          akar: () => import('@iconify-json/akar-icons/icons.json').then(i => i.default),
        },
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
          'height': '1.2em',
          'width': '1.2em',
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
      'content-padding': 'p-[32px_24px_96px] md:p-[48px_32px_128px] lg:p-[32px_32px_0]',
    },
    theme: {
      colors: {
        'brand': 'var(--vp-c-brand)',
        'brand-light': 'var(--vp-c-brand-light)',
        'brand-dark': 'var(--vp-c-brand-dark)',
        'brand-lighter': 'var(--vp-c-brand-lighter)',
        'brand-darker': 'var(--vp-c-brand-darker)',
      },

      height: {
        nav: 'var(--vp-nav-height)',
      },
      zIndex: {
        nav: 'var(--z-index-navbar)',
      },
    },

    rules: [
      [/^slide-enter-(\d+)$/, ([_, n]) => ({
        '--enter-stage': n,
      })],
    ],

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
