---
title: about
date: 2020-10-10
footer: ture
---

<script setup>
import {
  VPTeamPage,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/simon1uo.png',
    name: 'Simon Luo',
    links: [
      { icon: 'github', link: 'https://github.com/simon1uo' },
    ],
    desc:"👋🏻 hi/hey this is simon"
  },
  {
    avatar: 'https://s2.loli.net/2022/10/10/kcjXeShZu8ILnK9.png',
    name: 'simon\'s blog',
    desc: "🏙 constantly learning and marking about frontend development",
  },
]
</script>

# about

<VPTeamMembers
  size="small"
  :members="members"
  />
