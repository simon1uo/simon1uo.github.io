<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button class="hidden h-full w-48px flex items-center justify-center sm:block" type="button" :class="{ active }">
    <span class="hamburger-container relative h-14px w-16px overflow-hidden">
      <span class="top" />
      <span class="middle" />
      <span class="bottom" />
    </span>
  </button>
</template>

<style scoped>
.hamburger:hover .top {
  top: 0;
  left: 0;
  transform: translateX(4px);
}

.hamburger:hover .middle {
  top: 6px;
  left: 0;
  transform: translateX(0);
}

.hamburger:hover .bottom {
  top: 12px;
  left: 0;
  transform: translateX(8px);
}

.hamburger.active .top {
  top: 6px;
  transform: translateX(0) rotate(225deg);
}

.hamburger.active .middle {
  top: 6px;
  transform: translateX(16px);
}

.hamburger.active .bottom {
  top: 6px;
  transform: translateX(0) rotate(135deg);
}

.hamburger.active:hover .top,
.hamburger.active:hover .middle,
.hamburger.active:hover .bottom {
  background-color: var(--vp-c-text-2);
  transition:
    top 0.25s,
    background-color 0.25s,
    transform 0.25s;
}

.top,
.middle,
.bottom {
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: var(--vp-c-text-1);
  transition:
    top 0.25s,
    background-color 0.5s,
    transform 0.25s;
}

.top {
  top: 0;
  left: 0;
  transform: translateX(0);
}

.middle {
  top: 6px;
  left: 0;
  transform: translateX(8px);
}

.bottom {
  top: 12px;
  left: 0;
  transform: translateX(4px);
}
</style>
