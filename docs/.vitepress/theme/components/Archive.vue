<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

import postData from "../../post-data.json";
import { initArchive, formatTag } from "../utils/archive";

import Page from "./Page.vue";

const { theme } = useData();
const archiveData = computed(() => initArchive(postData));
</script>

<template>
  <Page>
    <div class="archive">
      <div class="text-3xl font-extrabold mb-4">Archive</div>
      <div v-for="(post, year) in archiveData" :key="year">
        <div class="text-2xl font-extrabold italic font-serif">
          {{ year }}
        </div>
        <div class="item" v-for="item in post" :key="item">
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
