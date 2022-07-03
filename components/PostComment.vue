<template>
  <div id="post-comment">
    <div class="p-4 rounded-lg mb-6 bg-slate-100 dark:bg-slate-700 relative">
      <div class="text-sm leading-5 z-20 text-center">
        👋 欢迎留下评论～
      </div>
    </div>

    <Waline
      :server-u-r-l="serverURL"
      :path="path"
      dark="html[class='dark']"
      :emoji="emoji"
      :gif="false"
      login="force"
      :image-uploader="false"
    />
  </div>
</template>

<script setup>
import { Waline } from '@waline/client/dist/component'

const serverURL = 'waline-comment-container-rjrabjk7j-simon1uo.vercel.app'
const path = computed(() => useRoute().path)
const emoji = ['//unpkg.com/@waline/emojis@1.0.1/tw-emoji', '//unpkg.com/@waline/emojis@1.0.1/tw-symbol', '//unpkg.com/@waline/emojis@1.0.1/tw-weather']

</script>

<style lang="postcss">
#post-comment {
  @apply prose dark:prose-invert  max-w-none p-6 my-4;

  img {
    margin: 0;
    padding: 0;
  }
}
</style>
