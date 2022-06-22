<template>
  <div>
    <Navbar />
    <div class="content-layout">
      <NuxtPage />
      <PageFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Simon's Blog` : "Simon's Blog"
  }
})
</script>

<style lang="postcss">
body {
  @apply bg-slate-100 dark:bg-slate-800;
}

.content-layout {
  @apply prose max-w-4xl mx-auto px-4;
}
</style>
