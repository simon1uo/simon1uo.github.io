<script setup lang="ts">
// Utils from Nuxt Content
const { flatUnwrap } = useUnwrap()

defineProps({
  icon: {
    type: String,
    default: 'ci:dot-05-xl'
  }
})
</script>

<template>
  <ul class="p-0 m-0">
    <li v-for="(item, index) of flatUnwrap($slots.default(), ['ul'])" :key="index" class="flex-col">
      <Icon :name="icon" class="w-4 h-4 items-center" />
      <span><Markdown :use="() => item" unwrap="li" /></span>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
li {
  @apply ml-0 pl-0 list-none;
}

</style>
