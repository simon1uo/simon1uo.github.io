<template>
  <div class="p-4 rounded-lg bg-slate-100 dark:bg-slate-700 relative">
    <div class="text-xl sm:text-3xl absolute font-bold text-slate-200 bottom-12 sm:top-4 right-3">
      copyright
    </div>
    <div class="flex">
      <div class="text-sm leading-5 z-20">
        <div>
          本文标题
          <span class="ml-1 font-bold">
            <Markdown :use="$slots.title" unwrap="p" />
          </span>
        </div>
        <div>
          本文作者
          <span class="ml-1 font-medium">
            <Markdown :use="$slots.author" unwrap="p" />
          </span>
        </div>
        <div>
          发布时间
          <span class="ml-1 font-medium">
            <Markdown :use="$slots.date" unwrap="p" />
          </span>
        </div>
        <div>
          许可协议
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank" one-link-mark="yes">CC BY-NC-SA 4.0
            <Icon name="ri:creative-commons-line" />
            <Icon name="ri:creative-commons-by-line" />
            <Icon name="ri:creative-commons-nc-line" />
            <Icon name="ri:creative-commons-sa-line" />
          </a>
        </div>
        <div class="font-bold mt-2">
          转载或引用本文时请遵守许可协议，注明出处、不得用于商业用途！
        </div>
      </div>
    </div>
    <div class="absolute -bottom-5 -right-5 ">
      <Icon class="text-slate-200 w-16 h-16 sm:w-28 sm:h-28" name="ri:creative-commons-fill" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>

</style>
