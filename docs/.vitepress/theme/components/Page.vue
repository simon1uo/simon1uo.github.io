<script setup lang="ts"></script>

<template>
  <div class="page">
    <div class="container">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 32px 24px 96px;
  width: 100%;
}

@media (min-width: 768px) {
  .page {
    padding: 48px 32px 128px;
  }
}

@media (min-width: 960px) {
  .page {
    padding: 32px 32px 0;
  }
}

@media (min-width: 1280px) {
  .page .container {
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 1440px) {
  .page .content {
    max-width: 784px;
  }

  .page .container {
    max-width: 1104px;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
}

.content {
  position: relative;
  margin: 0 auto;
  width: 100%;
}
</style>
