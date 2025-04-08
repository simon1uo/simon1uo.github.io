<script setup lang="ts">
import { actions } from '../../config/actions'
import Button from './Button.vue'
</script>

<template>
  <div class="actions">
    <div v-for="action in actions" :key="action.link" class="m-2">
      <Button
        tag="a"
        :theme="action.theme"
        :text="action.text"
        :href="action.link"
      />
    </div>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
