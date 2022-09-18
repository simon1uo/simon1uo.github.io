<script setup lang="ts">
import Button from "./Button.vue";
import { actions } from "../../config/actions";
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
