<template>
  <div id="post-recently-container">
    <div v-for="post in posts" :key="post" class="card post-item">
      <NuxtLink :to="post.link">
        {{ post.title }}
      </NuxtLink>
      <div>{{ toFormattedDate(post.date) }} · <span class="tag">{{ toTag(post.tag) }}</span></div>
      <NuxtLink v-if="post.cover" :to="post.link" class="cover-img">
        <img :src="post.cover" alt="cover">
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

import dayjs from 'dayjs'

const posts = await queryContent('posts')
  .limit(5)
  .sort({ date: -1 })
  .find()

const toFormattedDate = (date: any) => {
  return dayjs(date).format('YYYY/MM/DD')
}

const toTag = (tag: string) => {
  return '#' + tag
}

</script>

<style lang="postcss" scoped>
#post-recently-container {
  li {
    list-style: none;
  }

  .post-item {
    @apply p-4 mb-2 prose dark:prose-invert relative transition duration-500;

    a {
      text-decoration: none;
      @apply decoration-slate-400 hover:text-slate-400 transition duration-500;
    }

    .tag {
      @apply text-sm p-1 rounded bg-slate-200 dark:bg-slate-400;
    }

    .cover-img {
      width: 200px;
      height: 88px;
      position: absolute;
      top: 0;
      right: 0;
      overflow: hidden;
      img {
        @apply rounded-r transition duration-500;
        margin: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .cover-img:hover {
      img {
        transform: scale(1.5);
      }
    }
  }

  .post-item:hover {
    box-shadow: 0 5px 15px rgba(0, 2, 4, .06), 0 0 10px rgba(0, 2, 4, .11);
  }
}
</style>
