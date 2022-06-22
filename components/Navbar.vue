<script lang="ts" setup>
const navigation = [
  {
    title: 'index',
    link: '/',
    icon: 'twemoji:globe-showing-americas'
  },
  {
    title: 'archive',
    link: '/archive',
    icon: 'twemoji:card-file-box'
  },
  {
    title: 'about',
    link: '/about',
    icon: 'twemoji:eyes'
  }
]
</script>

<template>
  <div class="max-w-4xl my-6 px-3 py-1 mx-auto">
    <div class="flex justify-between">
      <NuxtLink
        to="/"
        class="logo"
        style="{line-height: 48px}"
      >
        simon's
      </NuxtLink>
      <nav>
        <ul class="flex text-lg text-slate-500 dark:text-slate-200">
          <li v-for="nav in navigation" :key="nav.link">
            <NuxtLink
              :to="nav.link"
              class="transition rounded-md mr-2 md:hover:bg-slate-200 md:hover:dark:bg-slate-700 py-1 md:px-3"
              active-class="md:bg-slate-300 md:dark:bg-slate-500 md:no-underline underline"
            >
              <Icon :name="nav.icon" />
              {{ nav.title }}
            </NuxtLink>
          </li>
          <div class="transition">
            <ColorModeSwitch />
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="postcss">
.logo {
  @apply font-bold text-3xl from-cyan-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent;
}
</style>
