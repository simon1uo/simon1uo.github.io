---
title: 🔖 Web Components 实践过后
description: build build build a blog
date: 2022-8-20
tags:
  - random
---

# 🔖 Web Components 实践过后

之前在逛云游君的博客时，就看到过一篇关于 Web Components 的文章，里面提到了[腾讯开源项目](https://opensource.tencent.com/summer-of-code) 的一个与 Web Components 相关的项目 [omi](https://github.com/Tencent/omi/)，恰逢暑假前的那段时间是新一届的腾讯犀牛鸟开源人才培训计划的报名时间，所以认真准备了计划书提交了报名，最终成功参与了 Omi 仓库的代码贡献，提交了小小的一个 PR，就此完完整整参与了项目实践毕业了。本着不浪费认真搜集的资料的原则，决定整理一下发出来分享一下。

## 关于 Web Components

在目前的流行前端开发中，存在着多种前端框架，而且框架的不同版本有可能不兼容共存，导致组件不能跨框架服用；而传统的组件库技术栈又是强耦合的。而前端的未来发展趋势，必然是朝着模块化发展的，所以出现了 Web Components。

Web Components 是创建多种用途、可重用的 HMTL 定制元素的前端现代标准，并且具有原生支持；跨框架服用；无依赖性；性能、可靠性、代码实现可读性较高等的特点。由自定义元素（Custom Element）、影子 DOM（Shadow Element）、HTML 模版（Template）以及 HTML Import 等主要技术组成。

在 2022 年，Web Components 仍然是未来前端开发的发展趋势。Web Components 的原生支持以及无排他性意味着可以跨框架完成组件的开发，用户也将有更好的体验、更低的网络请求、更加稳定的迭代；无依赖性可以使得我们无需任何依赖就可以导入到自定义组件到项目中；并且 Web Components 在页面中可以实现异步执行渲染或者结合 ES6 Module 完成组件的按需加载；同时 Shadow DOM 为自定义的组件提供了包括 CSS 、事件的有效隔离。

Web Components 已经是前端未来的优秀的一个 Web 标准，希望在 Omi 前端跨框架框架中，这次的开源实战项目任务中，能够从中更加深入对 Web Components 的理解和实践运用，从中收获大型组件的设计方案与实现的经验。

## 参与项目开发的思考

实际上，我还是第一次面对像 Omi 已经差不多成熟完整的一整个开源项目，面对整个仓库如此庞大的代码，难免还是产生难以下手的想法。但是 Omi 的代码仓库的结构还算明确，按照组件、依赖包分成了不同的项目包，加上在今年的计划开始不久，团队里的大佬就提交了一个新版本的引导教学 Playground，根据 Web Components 的代码结构还算清晰，所以很快就能上手了。

按照我的开发任务，我完成的是一个 OMIU 表格组件的新功能——合并单元格，最后提交的 PR 是 [feat(table): add table body cell span](https://github.com/Tencent/omi/pull/754) 。实际上提交的代码量并不多，并且在原来功能完备的代码之下新增功能，这个代码工作并不算困难，但是还是花了不少时间。实际上，HTML 表格的功能的知识点还是很广的，最后参考了目前开源社区的表格组件的功能实现，所幸的是找到了一个还算合适的解决方案，但是最后还是有一点瑕疵，鉴于时间问题还没有精力去更新代码，所以就直接提交了。希望后面能有时间开发更多关于 OMIU 表格组件相关的功能，能够补上这个不足。


## 参考

- [从零开始写一个 Web Component - GitHub Corners | 云游君的小站 (yunyoujun.cn)](https://www.yunyoujun.cn/posts/how-to-write-a-web-component/)
- [OMI - Introduction ](https://tencent.github.io/omi/site/docs/index.html) OMI 开发文档
- [Web Components | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 
- [Components.studio Documentation | Components.studio](https://components.studio/docs/) ｜ [WebComponents.dev](https://webcomponents.dev/)Web Components 开发模版
- [webcomponents.org](https://www.webcomponents.org/) Web Compontents 开发社区
