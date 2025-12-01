---
title: Clash Verge Rev 自定义路由规则教程
description: 学习如何在 Clash Verge Rev 中使用 JavaScript 自定义路由规则，包括全局扩展脚本和针对不同配置文件的规则设置。本教程提供详细代码示例，帮助您灵活管理网络流量分流。
head:
  - - meta
    - name: keywords
      content: Clash Verge Rev, 自定义路由规则, JavaScript 脚本, 分流配置, config 对象, profileName, 全局扩展脚本, 网络代理规则, Clash Mihomo, 流量分流, 代理配置
  - - link
    - rel: canonical
      href: https://clashverger.uk/guide/rules.html
---

<!-- prettier-ignore -->

#  Clash Verge Rev 自定义路由规则教程
> [!warning]
> 如果你是第一次使用 Clash Verge Rev，请先阅读[快速入门](/guide/quickstart)。

不知道规则类型? -> [Clash Mihomo路由规则文档](https://wiki.metacubex.one/config/rules)。

不会写JavaScript? -> [菜鸟教程](https://www.runoob.com/js/js-tutorial.html)。

想要更多资料? -> [Script配置](./script.md)

## 通过全局扩展脚本

**原理**：ClashVegerRev通过暴露出可编程的API，即 `config` 对象与 `profileName`
对象，可通过 `main` 函数传入config参数来编辑配置对象。

```javascript

/**
 * 配置中的规则"config.rules"是一个数组，通过新旧数组合并来添加
 * @param prependRule 添加的数组
 */
const prependRule = [
  // 将百度分流到直连
  "DOMAIN-SUFFIX,baidu.com,DIRECT",
  // 将本网站分流到自动选择(前提是你的代理组当中有"自动选择")
  "DOMAIN-SUFFIX,clashverge.dev,自动选择",
];
function main(config) {
  // 把旧规则合并到新规则后面(也可以用其它合并数组的办法)
  let oldrules = config["rules"];
  config["rules"] = prependRule.concat(oldrules);
  return config;
}

```

还可以参考这个issue中讨论的做法-> [issues/1437#issuecomment-2395050752](https://github.com/clash-verge-rev/clash-verge-rev/issues/1437#issuecomment-2395050752)

## 为不同配置文件启用不同的脚本

```javascript

function main(config, profileName) {
    // 设订阅A
  if(profileName === "A") {
    // 对config修改
    // ......
  }
  // 不是“A”则返回未修改的配置
  return config;
}

```

::: tip 🎉 节点推荐
- 🚀 [Cyberguard: 解锁Netflix/Hbo/Disney+/Dazn等流媒体,18.00元/月](https://c.jichangs.com/cyberguard)
- 🚀 [扬帆云：老牌机场分站，年付低至￥11.00/月](https://c.jichangs.com/yfy)
- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://c.jichangs.com/youxinyun)
- 🚀 [尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月](https://c.jichangs.com/erwan)
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://c.jichangs.com/tnt)
- 🚀 [魔戒：不限时，不限制使用人数，直至套餐流量用完，低至￥14.9/130G流量](https://c.jichangs.com/mojie)
- 🚀 [宝可梦星云：新用户首单：9折优惠码：9999，低至5.9/月 ](https://c.jichangs.com/pokemon)
- 🚀 [NanoCloud: 绑定TG机器人每天领取免费流量，月付最低1元/月](https://c.jichangs.com/nanocloud)
- 🚀 [肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）](https://c.jichangs.com/feimao)
- 🚀 [疾风云：包年 6.9折 优惠码: jf2025](https://c.jichangs.com/jifeng)
- 🚀 [闪狐云：不限速，不限设备。高速专线。20元/月](https://c.jichangs.com/shy)
:::

::: warning  💬 交流群

- 🫂 Telegram:[@jichang360](https://t.me/jichang360)

:::