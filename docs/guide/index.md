# encode-hooks

印客学院 React 业务 Hooks

## ⛰️ 能力支持

### 1. 可靠的代码健壮

使用 Typescript 构建，提供完善的类型定义文件

### 2. 完善的文档能力

支持文档记录，支持 demo 演示

### 3. 完整的测试用例

配套完整的测试用例，帮助您提升项目健壮性

## 🌟 设计目的

在前端项目开发中，我们通常有着各种各样可以复用的业务场景，如何能够将重复的代码量转为可复用的开发工具，是判断一个程序员编码水平及代码能力的衡量因素之一。但如何实现代码复用，也是前端开发同学乃至前端架构师都老生常谈的一个问题。

除此之外，很多同学在平时的开发中只是实现最基本的页面开发，对于构建工具的使用，测试用例的编写都少有涉及，在前端 `gulp`、`grunt`、`webpack`、`esbuild`、`SWC`、`vite`、`trubo` 等构件工具越出越多的背景下，如何掌握和选择这些框架，也是能够体现是否到达高级前端开发工程师水平的一个衡量依据。因此，这里我们通过以 `React` 为前端框架，`React Hooks` 作为核心产出，从 0 ～ 1 手把手搭建一个前端业务 `Hooks` 库，从产品设计、框架选择、架构设计到最终的编码落地，通过一个完整的产品实现，解决如何提升代码复用的问题。

## ⚒️ 技术选型

### 包管理工具 -- pnpm

作为基础包，选择社区内更推崇的`pnpm`作为包管理工具，主要原因有：

1. `pnpm`安装速度更快，磁盘空间利用率高；
2. `pnpm`的`lock`文件适用于多个单一子功能的模块，且能保证每个模块的依赖不耦合；
3. 打包产物清晰，打包后产物确保全部为静态站点资源；

### 构建工具 -- webpack & gulp

1. 最终产物为多个基础子功能模块的耦合，选择`gulp`这种流程式的构建工具，能够更清晰的表达构建流程；
2. 选择常用的`webpack`作为构建产物的声明式接入方式；

### 静态文件打包工具 -- dumi

就目前前端社区而言，`dumi`是当之无愧的为组件研发而生的静态站点解决方案；

### 测试工具 -- jest

`jest`功能全面，资料丰富，能够很好地支撑原子化集合的工具函数；

## 其他

### 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```

## 📧 联系

- **印客学院官网**: <http://encodestudio.cn>
- **encode Hooks** <https://encode-studio-fe.github.io/encode-hooks/>
- **GitHub**: <https://github.com/encode-studio-fe/encode-hooks>

</br>
