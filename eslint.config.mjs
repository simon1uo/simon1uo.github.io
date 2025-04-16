import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  markdown: {
    overrides: {
      'ts/no-empty-object-type': 'off',
    },
  },
})
