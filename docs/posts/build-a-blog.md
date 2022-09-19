---
title: ⛳️ 又折腾了一次搭建博客
description: build build build a blog
date: 2022-09-01
tags:
  - random
---

# 又折腾了一遍搭建博客

折腾博客是一条漫漫长路，不过经过这次使用 VitePress 又一次重新开始，应该很长一段时间都不会再大改了。

## 技术选型

先说说前几个月使用 [Nuxt Content](https://content.nuxtjs.org/) 完完整搭建了一遍博客的过程，每一个页面的排版和样式都得重空白开始，组件和插槽的自定义程度确实很高，但也难免逃不过看厌的一劫，并且加上 Nuxt Content 还不是很成熟，总是有一些小小的 Bug，在网上找不到解决方案的那种，有时候热更新还得等半天，几个月没碰已经完全忘掉当初写的一些配置是什么意思，所以又得去翻官方文档。（其实 Nuxt Content 确实很不错，是我不配了）

最后，还是用上了 VitePress。这个 VuePress 的弟弟还是很香，看着现在大大小小的各种 feature 文档都用上了它来写就知道了。相比于 Nuxt Content 自带了很多默认主题的布局配置，导航栏、文章的牌排版、文章目录、统一的主题配色。最最重要的是基于 Vite 还有 Vue 3，自定义主题和组件的开发过程就是又舒服又快。缺点就是，相比 VuePress 没有了插件系统，文章的归档还得自己用 Node 爬一遍目录里的文件，不过这都是小问题，毕竟追求的就是一个简洁高效。

为了方便导入图标还配置了 [unplugin-icons](https://github.com/antfu/unplugin-icons) 和 [iconify](https://iconify.design/)，还有能够方便编写样式，用上了 [windicss](https://cn.windicss.org/features/) 和 [vite-plugin-windicss)](https://github.com/windicss/vite-plugin-windicss)，最后用上 Github Actions + Github Pages 自动配置，大致上搭建过程就出来了。

## 开发进度

- 主页的标题和按钮 （封装到组件和配置驱动）✅
- 归档页面 ✅
- 标签页面
- 文章版权协议声明 ✅

## 开发记录与参考

- 引入 `windicss` 和 `iconify` 的部分：参考 [windipress](https://github.com/seonglae/windipress) （不过因为 Vite 版本有所更新，所以有些配置的 API 已经改变了 🤦‍♂️）
- [Issue with VitePress running from subdirectory · Issue #26 · windicss/vite-plugin-windicss (github.com)](https://github.com/windicss/vite-plugin-windicss/issues/26) 解决了 `vite` 和 `windicss` 的配置文件无效的问题，需要放在 `vitepress` 处理的目录，而不是根目录。
- [Metadata for collections of pages (blogs etc.) · Issue #96 · vuejs/vitepress (github.com)](https://github.com/vuejs/vitepress/issues/96) 收集文章原数据，使用到了 Node.js 的`fs` 和 `gray-matter` 处理文章 `frontmatter` 。

总体来说，使用 VitePress 确实没什么技术含量，大多数都可以通过官方文档提供的 API 实现官方已经写好的功能，但又留了一些空间给自定义样式。写了这么多，这应该是最最最后一次再来折腾一下搭建博客了，毕竟搭建博客这些都是次要，写作和输出才是主要。
