---
title: Clash Verge Rev TUN模式、系统代理、闪退等问题修复
description: 全面解决 Clash Verge Rev 在 macOS 系统上的常见问题，包括 TUN 模式 DNS 修改、系统代理设置失效、软件包损坏、闪退、菜单栏图标重叠、窗口消失以及 Telegram 代理设置等疑难问题的详细解决方案。
head:
  - - meta
    - name: keywords
      content: Clash Verge Rev macOS问题, TUN模式DNS, 系统代理失效， Telegram代理设置
  - - link
    - rel: canonical
      href: https://clashverger.uk/guide/css_injection.htmltml
---
# ClashVergeRevMacosTUN模式、系统代理、闪退等问题修复

## 开启Tun模式系统DNS被修改

- 问题原因：`Tun`无法劫持MacOS发往`LAN`(局域网)的DNS请求，[参考文档MihomoDocs](https://wiki.metacubex.one/config/inbound/tun/#dns-hijack)。

> `Verge`会在启动Tun时修改系统DNS为`223.6.6.6`，以保证Tun正常工作。关闭Tun即恢复原来的系统DNS。Tun下DNS由Mihomo核心代理，因此这个DNS并没有其它意义。

## 软件包损坏

- 问题原因：现有`Verge`正在运行时，尝试安装新版本`Verge`导致两个都损坏。

> 用`lemon`卸载和删除相关文件，再重新安装。

## 无法正常启动，闪退等

- 问题原因: 公司电脑安装有如下类似的安全软件，禁止软件安装服务

![Mac安全软件禁止安装verge服务](/assets/faq/macos/mac_safety_app.png)

- 解决方案: 关闭安全软件或找管理员把 verge 加入白名单

## 每次重启登陆打开提示 “‘osascript’想要进行更改”

![‘osascript’想要进行更改](/assets/faq/macos/mac_osascript.png)

- 问题原因: Login Items 中的`won fen`启动项被禁用
- 解决方案: 系统设置中找到登录选项，打开`won fen`名称的服务启动项

![打开Login Items中的`won fen`名称的服务启动项](/assets/faq/macos/mac_login_item.png)

## macOS 系统代理设置修改失败/开关无效

> 点击系统代理开关启用/禁用系统代理，系统代理设置中实际上未能被修改。

- 问题原因: 更改锁定的系统偏好设置需要管理员密码，当前可能处于普通权限。
- 解决方案: `系统偏好设置` -> `安全性与隐私` -> `高级`，关闭 `访问系统范围偏好设置需要输入管理员密码` （不同系统版本的名称略有差异），点击 `完成` 。

![访问系统范围偏好设置需要输入管理员密码](/assets/faq/macos/mac_ignore_password.png)

## macOS 菜单栏左上角图标重叠

![菜单栏左上角图标重叠](/assets/faq/macos/mac_icon_duplicated.png)

- 问题原因: macOS Sonoma 的系统 BUG。
- 解决方案: `系统偏好设置` -> `显示器`，调整一下显示器分辨率，然后再调回去。

## 窗口消失无法通过任务栏 tray 点开

- 问题原因: 当接入其他显示器时，修改了 verge 的窗口位置，导致 verge 记忆了当前错误的恢复显示器位置。
- 解决方案: `系统偏好设置` -> `显示器`，调整一下显示器布局，或者暂时拔掉其他显示器，当 verge 窗口出现后，拖动到正确的显示器上。

## macOS 键入 option(alt) + 字母变成特殊字符，导致录入的快捷方式错误不能正常触发

- 问题原因: macOS 键盘的`option key printing special characters`特性导致，不同的键盘布局有不同的转换关系。
- 解决方案: `系统偏好设置` -> `键盘` -> `输入法` ，添加一种没有配置特殊字符的键盘布局。如何判断键盘布局有没有转换特殊字符？选中某个键盘布局，按下 option(alt)键并观察右侧下半区域**键盘图示上的字母是否发生变化**。挑选一种按下 option（alt）键后字母**变为键盘字母或空白**的键盘布局，如简体中文的`简体笔画`、`五笔型`。

## App Store商店的Telegram无法代理

问题原因：商店版同Telegram For MacOS(Swift版本)默认不遵守系统代理。

1.如图所示，在应用内设置代理，默认代理端口`7897`。
  
![Telegram无法代理](/assets/faq/macos/mac_tg.png)

2.下载正常QT版本的Telegram，见[Telegram官方网站：telegram.org](https://telegram.org/moderation)

::: tip 🎉 节点推荐
- 🚀 [Cyberguard: 解锁Netflix/Hbo/Disney+/Dazn等流媒体,18.00元/月](https://www.cyberguard.best/#/register?code=XsreC0T5)<br>
- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://www.优信云.com/#/register?code=JRtE5uIV)<br>
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://erwan6.net/auth/register?code=BoObCd)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://haibing822.tntvipaff.cc/#/register?code=GtjJVgml)<br>
- 🚀 [魔戒：不限时，不限制使用人数，直至套餐流量用完，低至￥14.9/130G流量](https://mojie.app/#/register?code=sSdtPtLo)<br>
- 🚀 [宝可梦星云：新用户首单：9折优惠码：9999，低至5.9/月 ](https://love.521pokemon.com/register?code=56ERkkxp)<br>
- 🚀 [NanoCloud: 绑定TG机器人每天领取免费流量，月付最低1元/月](https://edu.uodoo.bid/auth/register?code=JMiOQDHf)<br>
- 🚀 [肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）](https://fchb1188.fcvipaff.cc/register?aff=X1vZd2wf)<br>
- 🚀 [疾风云：包年 6.9折 优惠码: jf2025](https://homes.tr25.cn?code=ReCm)<br>
- 🚀 [闪狐云：不限速，不限设备。高速专线。20元/月](https://inv02.ffaff.cc/register?aff=WQApz2pv)
:::

::: warning  💬 交流群

- 🫂 Telegram:[@jichang360](https://t.me/jichang360)

:::