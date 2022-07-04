<template>
  <div>
    <ContentList v-slot="{ list }" path="/posts">
      <div v-for="article in toNewestContentList(list)" :key="article.title" class="card archive-card">
        <NuxtLink :to="article.link" class="cover-img">
          <img :src="article.cover" alt="cover">
        </NuxtLink>
        <div class="flex-col">
          <NuxtLink :to="article.link" class="font-semibold text-lg text-slate-700 dark:text-slate-200">
            {{ article.title }}
          </NuxtLink>
        </div>
        <div class="font-normal text-sm dark:text-slate-50">
          {{ toFormattedDate(article.date) }} · <span class="tag"> {{ toTag(article.tag) }}</span>
        </div>
      </div>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

useHead({
  title: 'archive'
})

const toFormattedDate = (date: any) => {
  return dayjs(date).format('YYYY/MM/DD')
}

const toTag = (tag: string) => {
  return '#' + tag
}

const toNewestContentList = (list: any) => {
  return list.sort((a, b) => {
    return dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
  })
}

</script>

<style lang="postcss" scoped>
.archive-card {
  @apply my-3 p-3 dark:prose-invert relative;
  transition: .5s;
}

.archive-card:hover {
  box-shadow: 0 5px 15px rgba(0, 2, 4, .06), 0 0 10px rgba(0, 2, 4, .11);
}

.archive-card a {
  @apply no-underline
}

.cover-img {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 73px;
  overflow: hidden;
  img {
    @apply rounded-r-lg transition duration-500;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }

  img:hover {
    transform: scale(1.3);
  }
}

.tag {
  @apply text-xs p-1 rounded bg-slate-200 dark:bg-slate-400;
}

</style>
