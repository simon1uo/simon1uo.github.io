<template>
  <div class="not-found">
    <div class="text-4xl font-extrabold">😵 404 NOT FOUND 😵</div>
    <blockquote class="m-5">{{ getMsg() }}</blockquote>
    <Button tag="a" :href="site.base" theme="alt" text="Take me home." />
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import Button from "./Button.vue";

const { site } = useData();

const msgs = [
  "There's nothing here.",
  "How did we get here?",
  "That's a Four-Oh-Four.",
  "Looks like we've got some broken links.",
];

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)];
}
</script>

<style scoped>
.not-found {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
