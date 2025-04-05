---
title: Clash Verge Rev 远程订阅与本地配置详解
description: 全面了解 Clash Verge Rev 的配置文件管理功能，包括远程订阅链接导入、订阅链接配置、URL Schemes 以及本地配置文件导入的详细教程和视频演示。轻松管理您的代理配置文件。
head:
  - - meta
    - name: keywords
      content: Clash Verge Rev, 远程订阅, 本地配置, 订阅链接导入, URL Schemes, 代理配置, 节点导入, 拖拽导入
---
# Clash Verge Rev 远程订阅与本地配置详解
> 全面了解 Clash Verge Rev 的配置文件管理功能，包括远程订阅链接导入、订阅链接配置、URL Schemes 以及本地配置文件导入的详细教程和视频演示。轻松管理您的代理配置文件。
## 远程订阅

> 远程订阅支持三种方式导入: 订阅链接导入、订阅链接配置、URL Schemes。

### 订阅链接导入

<!-- prettier-ignore -->
> [!warning]
    如果通过`订阅链接导入`的方式提示 `client error(Connect)`，请尝试其他导入方式。

<video controls>
  <source src="../public/assets/guide/profile/remote_url.webm">
</video>

### 订阅链接配置

<!-- prettier-ignore -->
> [!warning]
    如果通过`订阅链接配置`的方式仍然提示 `client error(Connect)`，请尝试勾选 `允许无效证书（危险）`，并保存重试。

<video controls>
  <source src="../public/assets/guide/profile/remote_config.webm">
</video>

### URL Schemes

<!-- prettier-ignore -->
> [!warning]
    - Verge 2.0版以后，`macOS` 已支持通过 `URL Schemes` 的方式导入。
    - `Windows` 如果不能通过 `URL Schemes` 的方式导入，请查看[URL Schemes 功能失效解决办法](./url_schemes.md#_3)。

<video controls>
  <source src="../public/assets/guide/profile/remote_url_schemes.webm">
</video>

## 本地配置

> 本地配置支持两种方式导入: 新建配置文件导入、拖拽配置文件导入。

### 新建配置文件导入

<!-- prettier-ignore -->
> [!info]
    - 选择文件不是必须的，直接保存会生成一份空配置文件。
    - 选择使用的文件会被复制一份到 `profiles` 目录，原文件被移动或删除不会有影响。

<video controls>
  <source src="../public/assets/guide/profile/local_config.webm">
</video>

### 拖拽配置文件导入

<!-- prettier-ignore -->
> [!warning]
    要求 Clash Verge Rev 版本至少为 `v1.6.2`。

<video controls>
  <source src="../public/assets/guide/profile/local_drag.webm">
</video>

::: tip 🎉 节点推荐

🚀 [优信云](https://www.优信云.com/#/register?code=JRtE5uIV)：IEPL/IPLC 高速专线，￥15.00/月
:::