---
title: Clash Verge Rev 日志查看与导出指南
description: 学习如何在 Clash Verge Rev 中查看、修改日志级别、复现错误并导出日志文件，帮助您快速解决使用过程中遇到的问题。包含详细步骤说明和视频教程。
head:
  - - meta
    - name: keywords
      content: Clash Verge Rev, 日志查看, 日志导出, 故障排查, 错误复现, 日志级别, GUI日志, 内核日志, 代理软件故障解决
  - - link
    - rel: canonical
      href: https://clashverger.uk/guide/log.html
---
# Clash Verge Rev 日志查看与导出指南
学习如何在 Clash Verge Rev 中查看、修改日志级别、复现错误并导出日志文件，帮助您快速解决使用过程中遇到的问题。
## 查看日志
在软件主界面，点击 `设置` 按钮，在 `日志` 选项卡中，你可以查看 `GUI` 日志和 `内核` 日志。
<!-- prettier-ignore -->
> [!warning]
    - 修改日志级别设置后，**请退出软件重新启动**，使日志从程序启动时开始记录。
    - 重复一次错误发生流程（**<font color="red">演示省略了该步骤</font>**），**使错误得到复现**，以此确保错误日志可以正确地被记录下来。
    - 找到**文件名称与当前日期相等**的日志文件（多个日期相同的文件，选择序号最大的），并将其复制出来。
    - 当前版本logs目录默认存放 `GUI` 的日志，会存在一个 `service` 目录存放内核日志，根据问题类型查看不同的日志。

<!-- prettier-ignore -->
> [!TIP]
    导出日志文件后，如果担心日志文件太大占用过多磁盘空间，可以将日志级别修改回 `INFO` 级别。

<video controls>
  <source src="/assets/guide/log/log.webm">
</video>

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