<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

import postData from '../../post-data.json'
import { formatTag, initArchive } from '../utils/archive'

import Page from './Page.vue'

const { theme } = useData()
const archiveData = computed(() => initArchive(postData))
</script>

<template>
  <Page>
    <div class="archive">
      <div class="font-extrabold text-3xl mb-4">
        <div>Archive</div>
        <div class="text-lg font-normal">
          文章归档
        </div>
      </div>

      <div v-for="(post, year) in archiveData" :key="year">
        <div class="font-extrabold text-2xl italic font-serif">
          {{ year }}
        </div>
        <div v-for="item in post" :key="item" class="item">
          <div>
            <a :href="item.path" class="font-semibold text-xl">{{
              item.title
            }}</a>
          </div>
          <div class="italic font-serif">
            ({{ item.date }})
            <span v-for="tag in item.tags" :key="tag" class="tag">{{
              formatTag(tag)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.archive {
  margin-top: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  transition: all 0.25s;
  @apply my-4;
}

.item a:hover {
  color: var(--vp-c-brand-active);
}

.tag {
  @apply font-mono font-bold text-sm not-italic mr-1;
}
</style>
