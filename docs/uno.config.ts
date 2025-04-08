import { defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
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
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: ['Roboto'],
        mono: ['IBM Plex Mono'],
      },
    }),
  ],

})
