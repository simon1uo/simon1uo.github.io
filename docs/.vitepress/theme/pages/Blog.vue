<script setup lang="ts">
import { computed } from 'vue'
import postData from '../../post-data.json'

import { formatTag, initArchive } from '../utils/getPostList'

// const { theme } = useData()
const archiveData = computed(() => initArchive(postData))
</script>

<template>
  <!-- <div v-for="(post, year) in archiveData" :key="year">
    <div class="text-2xl font-extrabold font-serif italic">
      {{ year }}
    </div>
    <div v-for="item in post" :key="item.title" class="item">
      <div>
        <a :href="item.path" class="text-xl font-semibold">{{
          item.title
        }}</a>
      </div>
      <div class="font-serif italic">
        ({{ item.date }})
        <span v-for="tag in item.tags" :key="tag" class="tag">{{
          formatTag(tag)
        }}</span>
      </div>
    </div>
  </div> -->

  <div v-for="(posts, year) in archiveData" :key="year">
    <div v-for="post in posts" :key="post.title" >
      <a :href="post.path" class="no-underline">{{ post.title }}</a>
    </div>
  </div>
</template>
