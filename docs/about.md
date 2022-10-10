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
    desc:"👋🏻 你好！这里是 Simon，目前在学习前端，并且在写一些有趣的前端项目。"
  },
  {
    avatar: 'https://s2.loli.net/2022/10/10/kcjXeShZu8ILnK9.png',
    name: 'simon\'s blog',
    desc: "🏙 这是一个关于与前端内容有关的博客。分享学习前端的思考、关于前端的文章。"
  },
]
</script>

# about

<VPTeamMembers
  size="small"
  :members="members"
  />
