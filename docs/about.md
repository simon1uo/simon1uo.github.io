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
  },
]
</script>

# about

<VPTeamPage class="flex justify-center">
<VPTeamMembers
    :members="members"
  />
</VPTeamPage>
