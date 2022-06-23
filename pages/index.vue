<template>
  <div class="grid gap-4 md:grid-cols-6 sm:grid-cols-1">
    <div class="md:col-span-2 col-span-1 sm:row-span-4 card profile">
      <img src="https://cdn.jsdelivr.net/gh/simon1uo/image-flow@master/image/9fi5n2.png" alt="avatar">
      <div class="info">
        simon1uo
      </div>
      <div class="description text-center">
        💭  <br>
      </div>
    </div>
    <div class="sm:col-span-4 col-span-1 sm:row-span-2 card recently-update">
      <div class="title mt-0">
        recently working on
      </div>
      <div class="content-list text-sm">
        💂🏻‍ still building
      </div>
    </div>
    <div class="sm:col-span-4 col-span-1 sm:row-span-2 card recently-update">
      <div class="title mt-0">
        recently updates
      </div>
      <div class="content-list text-sm">
        💂🏻‍ still building
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.profile {
  @apply p-3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile img {
  @apply my-3 border-2 border-slate-300 hover:shadow-lg transition;
  width: 150px;
  border-radius: 50%;
}

.profile .info {
  @apply text-lg font-semibold text-slate-600 dark:text-gray-200;
}

.profile .description {
  @apply font-light text-slate-400 dark:text-slate-300;
}

.recently-update {
  @apply p-4 prose dark:prose-invert;
}
</style>
