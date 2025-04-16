<script setup lang="ts">
import { useData } from 'vitepress';
import ContentFooter from './ContentFooter.vue'
import PageWrapper from './PageWrapper.vue'

const { frontmatter } = useData() 
</script>

<template>
  <PageWrapper>
    <Content class="vp-doc slide-enter-content" :class="frontmatter.classes" />
    <ContentFooter />
  </PageWrapper>
</template>
