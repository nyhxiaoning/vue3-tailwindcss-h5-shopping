# vue3-airi
## 项目启动报错
### 解决vue-router4
这里升级vue-router：4.4.5版本做了兼容实现。



## vue3中引入两个组件：vantui+tailwindcss
- 这两种组件如何配置开发实现？

## 作者如何平衡使用UI组件：vantUI和tailwindcss
这是不是可以拓展到：antd或antd-mobile对应：tailwindcss
是不是可以总结出来一些使用指南：









## **📌 tailwindcss升级指南（从 2.0 -> 3.0）**
### ✅ **(1) 安装 Tailwind 3.0**
```sh
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
或：
```sh
yarn remove tailwindcss postcss autoprefixer
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### ✅ **(2) 更新 `tailwind.config.js`**
```sh
npx tailwindcss init -p
```
然后手动调整：
```diff
// tailwind.config.js
module.exports = {
- purge: ['./src/**/*.{js,jsx,ts,tsx}'],
+ content: ['./src/**/*.{js,jsx,ts,tsx}'],
+ darkMode: 'class', // 推荐使用 class 模式
}
```

### ✅ **(3) 替换旧的 `variants` 选项**
```diff
// tailwind.config.js
- variants: {
-   extend: {
-     opacity: ['disabled'],
-   },
- },
```
**👉 直接删除**，因为 3.0 默认支持所有变体。

### ✅ **(4) 测试动态类名**
```html
<!-- 旧代码 -->
<div class="w-40"></div>

<!-- 新代码（支持动态单位） -->
<div class="w-[40px]"></div>
```

---

## **📌 4. 结论**
✔ **可以直接从 2.0 升级到 3.0**，但需要修改 `tailwind.config.js`。  
✔ **3.0 默认启用 JIT，构建速度更快，体积更小**。  
✔ **动态类名、Arbitrary Properties 让开发更自由**。  
✔ **深色模式 `darkMode: 'class'` 推荐使用 `class` 方式**。  

**如果你的项目有大量 2.x 代码，可以逐步迁移，不需要一次性全部更改。** 🚀





# 计划
（1）改造这个作为h5的一个vant+vue3+tailwindcss 项目
- 引入组件库内容都有的内容：
[配置脚手架案例说明增加检验](https://hrll1lipzw.feishu.cn/docx/X8rSd68PkoOgPEx4o6AcNF8knOf#MTmDdny8coyCGAxpAHrcMdKtnFh)


<code>![visitors](https://visitor-badge.glitch.me/badge?page_id=xieyezi.vue3-shopping-airi)</code>
<code>![visitors](https://visitor-badge.glitch.me/badge?page_id=xieyezi.vue3-shopping-airi)</code>
<code>![vue version](https://img.shields.io/badge/vue-3.x-%238B5CF6)</code>
<code>![vite-version](https://img.shields.io/badge/vite-2.x-%238B5CF6)</code>
<code>![typescript-version](https://img.shields.io/badge/typescript-4.x-%238B5CF6)</code>
<code>![tailwindcss-version](https://img.shields.io/badge/tailwindcss-%202.x-%238B5CF6)</code>
<code>![genji-version](https://img.shields.io/badge/genji-%201.x-%238B5CF6)</code>

一款基于 `vue3` + `typescript` + `vite` + `genji` + `tailwindcss` 开发的购物 `H5 App`，涵盖了购物`App`的常见功能

### 开发中

### 预览

部分页面效果如下：

| ![](./screenshot/Screenshot_1.png)  | ![](./screenshot/Screenshot_2.png)  | ![](./screenshot/Screenshot_3.png)  | ![](./screenshot/Screenshot_4.png)  |
| :---------------------------------: | :---------------------------------: | :---------------------------------: | :---------------------------------: |
| ![](./screenshot/Screenshot_5.png)  | ![](./screenshot/Screenshot_6.png)  | ![](./screenshot/Screenshot_7.png)  | ![](./screenshot/Screenshot_8.png)  |
| ![](./screenshot/Screenshot_9.png)  | ![](./screenshot/Screenshot_10.png) | ![](./screenshot/Screenshot_11.png) | ![](./screenshot/Screenshot_12.png) |
| ![](./screenshot/Screenshot_13.png) | ![](./screenshot/Screenshot_14.png) | ![](./screenshot/Screenshot_17.png) | ![](./screenshot/Screenshot_18.png) |
| ![](./screenshot/Screenshot_15.png) | ![](./screenshot/Screenshot_19.png) | ![](./screenshot/Screenshot_20.png) | ![](./screenshot/Screenshot_21.png) |
| ![](./screenshot/Screenshot_22.jpg) | ![](./screenshot/Screenshot_23.jpg) | ![](./screenshot/Screenshot_24.jpg) | ![](./screenshot/Screenshot_25.jpg) |
| ![](./screenshot/Screenshot_26.jpg) | ![](./screenshot/Screenshot_27.jpg) |                                     |                                     |
