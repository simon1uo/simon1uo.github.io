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
  <div class="max-w-4xl my-6 px-5 py-1 mx-auto">
    <div class="sm:justify-between sm:flex">
      <NuxtLink
        to="/"
        class="logo"
      >
        simon's blog
      </NuxtLink>
      <nav>
        <ul class="flex text-lg text-slate-500 dark:text-slate-200 mt-2">
          <li v-for="nav in navigation" :key="nav.link">
            <NuxtLink
              :to="nav.link"
              class="transition duration-500 rounded-md mr-2 hover:bg-slate-200 active:bg-slate-300 active:dark:bg-slate-400 hover:dark:bg-slate-500 py-1 px-3"
              active-class="bg-slate-200 dark:bg-slate-500 no-underline underline"
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
