<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

import postData from "../../post-data.json";
import { initArchive } from "../utils/archive";

import Page from "./Page.vue";

const { theme } = useData();
const archiveData = computed(() => initArchive(postData));
</script>

<template>
  <Page>
    <div class="archive">
      <div class="text-3xl font-extrabold mb-4">Archive</div>
      <div v-for="(post, year) in archiveData" :key="year">
        <div class="text-2xl font-extrabold italic font-serif">{{ year }}</div>
        <div class="item" v-for="item in post" :key="item">
          <div>
            <span class="italic font-serif"> ({{ item.date }}) </span>
            <a :href="item.path">
              <span class="ml-2 font-semibold text-xl">{{ item.title }}</span>
            </a>
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
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s;
  @apply my-3;
}

.item a:hover {
  color: var(--vp-c-brand-active);
}
</style>
