<script setup lang="ts">
import ContentFooter from './ContentFooter.vue'
</script>

<template>
  <div class="mx-auto max-w-960px md:px-6 pt-[theme(height.nav)]">
    <div class="content-padding">
      <Content class="vp-doc slide-enter-content" />
      <ContentFooter />
    </div>
  </div>
</template>
