<script setup lang="ts">
import IconCreativeByLine from "~icons/ri/creative-commons-line";
import IconCreativeCommonsByLine from "~icons/ri/creative-commons-by-line";
import IconCreativeCommonNcLine from "~icons/ri/creative-commons-nc-line";
import IconCreativeCommonsSaLine from "~icons/ri/creative-commons-sa-line";
import IconCreativeCommonFill from "~icons/ri/creative-commons-fill";
</script>

<template>
  <div class="rounded-lg bg-slate-200 dark:bg-dark-800 p-4 mt-5 relative">
    <div class="copyright">
      copyright <IconCreativeCommonFill class="inline" />
    </div>
    <div class="flex dark:text-slate-400">
      <div class="text-sm leading-5 z-20">
        <div>
          本文标题
          <span class="ml-1 font-bold"> {{ $frontmatter.title }} </span>
        </div>
        <div>
          本文作者
          <span class="ml-1 font-medium"> (Simon)</span>
        </div>
        <div>
          发布时间
          <span class="ml-1 font-medium">
            {{ $frontmatter.date.split("T")[0] }}</span
          >
        </div>
        <div>
          许可协议
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
            one-link-mark="yes"
            >CC BY-NC-SA 4.0
            <IconCreativeByLine class="inline" />
            <IconCreativeCommonsByLine class="inline" />
            <IconCreativeCommonNcLine class="inline" />
            <IconCreativeCommonsSaLine class="inline" />
          </a>
        </div>
        <div class="font-bold mt-2">
          转载或引用本文时请遵守许可协议，注明出处、不得用于商业用途！
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.copyright {
  @apply text-2xl sm:text-3xl absolute font-bold text-slate-300 dark:text-slate-600 bottom-12 top-4 right-3;
}
</style>
