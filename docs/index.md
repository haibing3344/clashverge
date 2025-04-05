---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Clash Verge Rev 官网- 开源免费跨平台 Clash 图形客户端 (Win/Mac/Linux)
titleTemplate: Clash Verge Rev
description: 访问 Clash Verge Rev 官方网站，下载最新版本的开源免费 Clash 图形代理客户端。基于 Tauri 和 Clash Meta 内核，界面现代化，功能强大，支持 Windows、macOS 和 Linux。轻松管理您的网络代理配置。
head:
  - - meta
    - name: keywords
      content: Clash Verge Rev, 下载, Clash Verge Rev 下载, Clash GUI, Clash 客户端, 开源, 免费, 跨平台, Windows, macOS, Linux, 代理工具, Proxy GUI, Clash Meta, Tauri, 网络代理

hero:
  name: "Clash Verge Rev"
  text: "Clash Verge 的延续"
  tagline: 翻墙必备工具
  image:
    src: /assets/logo.png
    alt: Clash Verge Rev
    width: 192
    height: 192
  actions:
    - theme: brand
      text: 介绍
      link: /about
    - theme: alt
      text: 下载
      link: /install/install
    - theme: alt
      text: 🎉机场推荐
      link: https://20220607.xyz

features:
  - title: 内核
    details: 内置Clash.Meta(mihomo)内核，并支持切换 Alpha 版本内核。
  - title: 界面
    details: 简洁美观的用户界面，支持自定义主题颜色、代理组/托盘图标以及 CSS Injection。
  - title: 配置
    details: 配置文件管理和增强（Merge 和 Script），配置文件语法提示。
  - title: 代理
    details: 统代理和守卫、TUN(虚拟网卡) 模式。
  - title: 易用
    details: 可视化节点和规则编辑
  - title: 备份
    details: WebDav 配置备份和同步
---

友情链接：<a href="https://www.yiyuanvpn.org">一元机场</a> &nbsp; &nbsp;   <a href="https://suola.link/w">优信云机场</a> &nbsp; &nbsp;   <a href="https://www.clashforwindows.uk">Clash for windows</a> 
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

<Confetti />