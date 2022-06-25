<template>
  <footer>
    <footer class="text-end text-slate-500 dark:text-slate-200 my-5 px-4">
      <div class="text-sm mb-1">
        powered by <span
          class="cursor-pointer font-semibold from-green-300 to-green-500 bg-gradient-to-r bg-clip-text text-transparent"
          @click="to('https://content.nuxtjs.org/')"
        >
          <Icon name="logos:nuxt-icon" />NuxtJS Content
        </span>
      </div>
      <div class="text-sm mb-1">
        © 2022 <span class="font-bold from-cyan-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">SIMON1UO (nomisoul)</span>
      </div>
    </footer>
  </footer>
</template>

<script lang="ts" setup>
const to = (href) => {
  window.open(href)
}
</script>

<style lang="less" scoped>

</style>
