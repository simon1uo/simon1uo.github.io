<script setup>
// 测试自动导入是否生效
// 注意这里没有显式导入 ref, onMounted 等 Vue API
const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('Component mounted, auto-import working!')
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
