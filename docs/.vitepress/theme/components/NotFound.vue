<script setup lang="ts">
import { useData } from 'vitepress'
import Button from './Button.vue'

const { site } = useData()

const msgs = [
  'There\'s nothing here.',
  'How did we get here?',
  'That\'s a Four-Oh-Four.',
  'Looks like we\'ve got some broken links.',
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>

<template>
  <div class="mt-40 flex flex-col justify-center items-center">
    <div class="font-extrabold text-4xl">
      😵 404 NOT FOUND 😵
    </div>
    <blockquote class="m-5">
      {{ getMsg() }}
    </blockquote>
    <Button tag="a" :href="site.base" theme="alt" text="Take me home." />
  </div>
</template>

<!-- No style needed as we're using UnoCSS utility classes -->
