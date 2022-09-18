<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
const { theme } = useData();

import postData from "../../post-data.json";
import { initArchive } from "../utils/archive";

const archiveData = computed(() => initArchive(postData));
</script>

<template>
  <div class="archive">
    <div v-for="(post, year) in archiveData" :key="year">
      <div class="text-2xl font-extrabold italic font-serif">{{ year }}</div>
      <div class="item" v-for="item in post" :key="item">
        <div>
          <span class="italic font-serif"> ({{ item.date }}) </span>
          <a :href="item.path" class="font-bold text-lg">{{ item.title }} </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.archive {
  margin-top: 10px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @apply my-3;
}
</style>
