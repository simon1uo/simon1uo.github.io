<template>
  <div>
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
    <div class="card comments">
      <PostComment />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss">

</style>
