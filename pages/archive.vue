<template>
  <main>
    <ContentList v-slot="{ list }" path="/posts">
      <div v-for="article in toNewestContentList(list)" :key="article.title">
        <div class="card archive-card">
          <div class="font-normal dark:text-slate-50 float-left">
            {{ toFormattedDate(article.date) }}
          </div>
          <NuxtLink :to="article.link" class="font-bold text-lg text-slate-700 dark:text-slate-200 ">
            {{ article.title }}
          </NuxtLink>
          <div class="text-md font-semibold text-slate-300 right-0">
            {{ toTag(article.tag) }}
          </div>
        </div>
      </div>
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

useHead({
  title: 'archive'
})

const toFormattedDate = (date: any) => {
  return dayjs(date).format('YY/MM/DD')
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
  @apply my-3 p-3 dark:prose-invert hover:shadow-lg flex justify-between;
}

.archive-card a {
  @apply no-underline
}

</style>
