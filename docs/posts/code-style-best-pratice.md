---
title: 🍳 代码规范和格式化的最佳实践
description: 在 Vue3 + Vite 项目中配置代码规范和代码格式化集成的最佳实践。
date: 2022-08-15
tags:
  - coding
---

# 🍳 代码规范和格式化的最佳实践

最近一次又一次创建 Vue3 和 Vite 项目，发现总是开始的第一步在做一些重复的工作，就是初始化配置，最常用的就是 ESLint + Prettier 的代码规范和代码格式化，至于为什么结合这两个一起集成，主要还是 ESLint 能保证项目代码质量，Prettier 保证代码的风格格式化统一，分工明确。

更新：为了将 CSS 代码进行代码规范和格式化，新增了 Stylelint 的集成，最后使用 `husky` 保证提交代码的规范。

以下的操作在创建好 Vue3 和 Vite 的项目完成后，并且我选择的包管理工具是 pnpm。

## 在项目中安装和配置 ESLint

执行安装 ESLint 的命令：

```shell
pnpm add eslint -D
```

执行初始化 ESLint 命令，可以帮助选择代码的规范、根据代码环境安装 ESlint 依赖：

```shell
pnppm eslint --init
```

![image-20221010142700280](https://s2.loli.net/2022/10/10/hK1ntrNHLYxIda8.png)

- 选择 ESLint 检查语法和错误
- 选择使用 ES Module 的模块化风格
- 选择应用于 Vue 和 TypeScript 的项目
- 选择代码运行于浏览器环境
- 选择配置文件的格式是 JavaScript
- 最后安装 ESLint 相关的依赖，选择的包管理器是 pnpm

依赖安装完后，会生成 `.eslintrc.cjs` 配置文件

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {},
};
```

> 为了 `module` 不报错，在初始的配置文件的基础上，添加 `env` 配置属性：`node: true`（添加了 Node 运行环境）

最后在 `package.json` 中添加 `lint` 命令，可以快捷运行 ESLint 检查项目中符合条件的文件：

```json
{
  "scripts": {
    // ...
    "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
  }
}
```

运行 `pnpm lint` 命令后发现，ESLint 在解析文件中出现了错误，因为有一些解析器产生了冲突。根据 [vue3+ts+vite 项目中使用 eslint+prettier+stylelint+husky 指南 - 掘金 (juejin.cn)](https://juejin.cn/post/7118294114734440455) 解决， 需要将 `parser` 修改为 `vue-eslint-parser`，并且将 `"parser": "@typescript-eslint/parser"` 移入 `parserOptions` 配置中，最后配置文件变为：

```js
module.exports = {
  // ...
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  // ...
};
```

这样才解决了两个解析器的冲突。因为 `vue-eslint-parser` 用来解析 `.vue` 后缀的文件，使得 ESLint 可以解析 Vue `<template>` 中的内容，而 `parserOptions` 中的 `parser` ，即 `@typescript-eslint/parser` 用来解析 Vue 中的 `script` 中的 TypeScript 代码。

## 在项目中安装和配置 Prettier

执行安装 Prettier 的命令：

```shell
pnpm add prettier -D
```

在项目根目录新建 Prettier 的配置文件 `.prettierrc.js`：

```js
module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 80,
  // 一个tab代表几个空格数，默认为80
  tabWidth: 2,
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // 行位是否使用分号，默认为true
  semi: false,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: "none",
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
};
```

在 `package.json` 中添加代码格式化命令：

```json
{
  "scripts": {
    // ...
    "prettier": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\""
  }
}
```

## VSCode 的相关插件

安装 VSCode 插件 [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，主要辅助 ESLint 在项目中的使用，实现每次保存后都修复代码的错误，需要添加设置配置：

```json
"editor.codeActionsOnSave": {
  "source.fixAll": false,
  "source.fixAll.eslint": true
}
```

安装 VSCode 插件 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ，可以实现在文件保存的时候自动完成 Prettier 对代码的格式化，并且添加设置配置：

```js
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

## 解决 ESLint 和 Prettier 的冲突

正常完成了上面的配置，ESLint 与 Prettier 应该各司其职。但是由于同时开启了 ESLint 和 Prettier 自动修复和格式化，ESLint 和 Prettier 的部分规则产生了冲突，先运行 ESLint 后运行 Prettier ，导致某些错误没有解决，仍然报错。

为了解决规则冲突，使用 ESLint 和 Prettier 规则冲突解决的插件：

- [eslint-plugin-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-plugin-prettier)： ESLint 使用 Prettier 的规则来格式化代码。
- [eslint-config-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-config-prettier)： 禁用所有与格式相关的 ESLint 规则，解决 Prettier 与 ESLint 规则冲突，**确保将其放在 `extends` 队列最后，这样它将覆盖其他配置**。

安装这两个依赖：

```shell
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

然后在 `.eslintrc.cjs` 的 `extends` 中添加：

```js
extends: [
  'eslint:recommended',
  'plugin:vue/vue3-essential',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended'
],
```



## todo 

+ Stylelint 的集成
+ Commitlint 和 husky 的集成



## 参考

- [vue3+ts+vite 项目中使用 eslint+prettier+stylelint+husky 指南 - 掘金 (juejin.cn)](https://juejin.cn/post/7118294114734440455)
- [实战--为 vite-vue3-ts 项目添加 eslint + prettier + lint-staged 项目规范 - 掘金 (juejin.cn)](https://juejin.cn/post/7043702363156119565)
- [手把手教你如何搭建vue3+ts+vite项目 - 掘金 (juejin.cn)](https://juejin.cn/post/7120947327879086093)
