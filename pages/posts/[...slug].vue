<template>
  <div class="card">
    <!--     Fetch and display the Markdown document from current path -->
    <ContentDoc class="content-doc">
      <!-- Slot if document is not found -->
      <template #not-found>
        <div class="p-5 prose dark:prose-invert">
          <h1 class="text-3xl">
            Post not found
          </h1>
          <NuxtLink class="text-xl" to="/">
            return to index
          </NuxtLink>
        </div>
      </template>
      <!-- Slot if document is empty -->
      <template #empty>
        <div class="p-5 prose dark:prose-invert">
          <h1 class="text-3xl">
            Post Content Empty
          </h1>
          <NuxtLink class="text-xl" to="/">
            return to index
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </div>
  <!--  <div class="card comments">-->
  <!--    <div class="title">-->
  <!--      comments-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts" setup>
</script>

<style lang="postcss">
.content-doc {
  @apply prose dark:prose-invert  max-w-none p-6;
}

.prose h1,
.prose h2,
.prose h3 {
  @apply my-1;
}

/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline font-bold;

  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}

.prose p {
  @apply mt-0 mb-0;
}

.prose ul {
  @apply pl-0;
}

.comments {
  @apply prose dark:prose-invert  max-w-none px-6 py-2 my-3;
}
</style>
