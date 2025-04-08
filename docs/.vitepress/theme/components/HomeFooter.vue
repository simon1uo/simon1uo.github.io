<script setup lang="ts">
import { useData } from 'vitepress'

const data = useData()
const { theme } = data
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="text">
        {{ theme.footer.copyright }}
      </p>
      <p class="text">
        Theme by
        <a href="https://github.com/simon1uo/simon1uo.github.io">simon1uo</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin: 0 auto;
  max-width: 960px;
}

@media (min-width: 720px) {
  .footer {
    padding: 0 1.5rem;
  }
}

.text {
  margin: 0;
  text-align: center;
  line-height: 1.4;
  font-size: 0.9rem;
  color: var(--c-text-light);
  @apply opacity-60;
}
</style>
