---
title: Clash Verge Rev 依赖安装与无界面使用
description: 解决 Clash Verge Rev 在 Linux 系统上的常见问题，包括 Ubuntu 20.04/24.04 依赖安装指南、无图形界面环境下的替代方案，以及 Debian 系统的兼容性问题解决方法。
head:
  - - meta
    - name: keywords
      content: Clash Verge Rev Linux问题, Ubuntu 依赖安装, libwebkit2gtk, libjavascriptcoregtk, 无UI使用, Mihomo命令行, Linux代理设置, Debian系统兼容性
  - - link
    - rel: canonical
      href: https://clashverger.uk/faq/linux.html
---
# ClashVergeRev-Linux依赖安装与无界面使用

## Ubuntu 20.04 版本无法正常安装

Ubuntu `20.04` 需要额外安装 `libwebkit2gtk` 和 `libjavascriptcoregtk` 依赖，但安装过程繁琐，依赖关系复杂，建议升级最新的`24.04`。其他 Debian 系操作系统类似。

## 无 UI 图形化界面能用吗

不能。Clash Verge Rev 是基于 `Webview` 的 GUI 程序，需要图形化界面支持。无图形化界面请下载 [MetaCubeX/Mihomo](https://github.com/MetaCubeX/mihomo/releases/latest) 内核二进制程序，通过命令行的方式使用（参数 `--help` 查看帮助）。

::: tip 🎉 节点推荐

- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://www.优信云.com/#/register?code=JRtE5uIV)<br>
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://erwan6.net/auth/register?code=BoObCd)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://haibing822.tntvipaff.cc/#/register?code=GtjJVgml)<br>
- [小旋风：IPLC专线高速稳定！8元/月起](https://cinb01.xxfaff.cc/#/register?inviteCode=80C209ADC772)<br>
- [大哥云：年付低至7元/月，4年稳定老牌机场](https://ca01.dgy01.cc/#/register?code=JSSN0WQ9)<br>
- [肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）](https://fchb1188.fcvipaff.cc/register?aff=X1vZd2wf)<br>
- [疾风云：包年 6.9折 优惠码: jf2025](https://homes.tr25.cn?code=ReCm)
:::