---
title: 自定义 Clash Verge Rev 界面样式
description: 学习如何使用 CSS 注入功能自定义 Clash Verge Rev 的界面样式，包括修改字体、颜色和大小等。本教程提供详细步骤和示例代码，帮助您打造个性化的代理客户端界面。
head:
  - - meta
    - name: keywords
      content: CSS 注入, Clash Verge Rev
---
# 自定义 Clash Verge Rev 界面样式
## CSS 注入

> 将自定义的 CSS 代码注入到文档中，实现自定义样式的效果。

- 下列示例演示了修改部分字体、背景颜色、字体大小（如果层叠样式没有生效可以使用 `!important`）。
- `打开开发者工具` 要求 Clash Verge Rev 版本至少为 `v1.5.8`。

<!-- prettier-ignore -->
> [!info]
    本教程要求有一定的 `CSS` 代码基础，可参考[CSS文档](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps)。

<video controls>
  <source src="../public/assets/guide/css_injection/css_injection.webm">
</video>

## CSS 示例代码

```css
span {
  font-family: '幼圆' !important;
}
header p {
  background-color: red !important;
  font-size: 58px !important;
}
```
::: tip 🎉 节点推荐

🚀 [优信云](https://www.优信云.com/#/register?code=JRtE5uIV)：IEPL/IPLC 高速专线，￥15.00/月
:::