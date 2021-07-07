(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{539:function(v,_,t){v.exports=t.p+"assets/img/image-20210224222012508.33daefcd.png"},540:function(v,_,t){v.exports=t.p+"assets/img/image-20210224225852838.06bd81f3.png"},741:function(v,_,t){"use strict";t.r(_);var s=t(11),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),s("h2",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[v._v("#")]),v._v(" 引入")]),v._v(" "),s("h3",{attrs:{id:"现象-问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现象-问题"}},[v._v("#")]),v._v(" 现象&问题")]),v._v(" "),s("p",[v._v("奥运会门票预售系统开放第一天，上午9点正式开始售票到中午12点，3个小时内，票务网站被浏览次数达到2000万次。12306、淘宝、京东在当时都会发生崩溃的现象。总结来说就是：")]),v._v(" "),s("ul",[s("li",[v._v("海量用户")]),v._v(" "),s("li",[v._v("高并发")])]),v._v(" "),s("h3",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[v._v("#")]),v._v(" 原因")]),v._v(" "),s("p",[v._v("罪魁祸首就是"),s("strong",[v._v("关系型数据库")])]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("性能")]),v._v("瓶颈："),s("strong",[v._v("磁盘IO性能低下")])]),v._v(" "),s("li",[s("strong",[v._v("扩展")]),v._v("瓶颈："),s("strong",[v._v("数据关系复杂")]),v._v("，"),s("strong",[v._v("扩展性差")]),v._v("，不便于大规模集群")])]),v._v(" "),s("h3",{attrs:{id:"解决思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[v._v("#")]),v._v(" 解决思路")]),v._v(" "),s("ul",[s("li",[v._v("降低磁盘IO次数，越低越好：使用内存存储")]),v._v(" "),s("li",[v._v("去除数据间关系，越简单越好：不存储关系，仅存储数据")])]),v._v(" "),s("p",[v._v("总结就是引入 NoSQL")]),v._v(" "),s("h3",{attrs:{id:"nosql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nosql"}},[v._v("#")]),v._v(" NoSQL")]),v._v(" "),s("p",[v._v("NoSQL：即 "),s("strong",[v._v("Not-Only SQL")]),v._v("（"),s("strong",[v._v("泛指")]),v._v("非关系型的数据库），作为关系型数据库的"),s("strong",[v._v("补充")]),v._v("。")]),v._v(" "),s("p",[v._v("作用：应对基于海量用户和海量数据前提下的数据处理问题")]),v._v(" "),s("p",[v._v("特征：")]),v._v(" "),s("ul",[s("li",[v._v("可扩容，可伸缩")]),v._v(" "),s("li",[v._v("大数据量下高性能")]),v._v(" "),s("li",[v._v("灵活的数据模型")]),v._v(" "),s("li",[v._v("高可用")])]),v._v(" "),s("p",[v._v("常见 Nosql 数据库:")]),v._v(" "),s("ul",[s("li",[v._v("Redis")]),v._v(" "),s("li",[v._v("memcache")]),v._v(" "),s("li",[v._v("HBase")]),v._v(" "),s("li",[v._v("MongoDB")])]),v._v(" "),s("h3",{attrs:{id:"redis-所处电商系统位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-所处电商系统位置"}},[v._v("#")]),v._v(" Redis 所处电商系统位置")]),v._v(" "),s("p",[s("img",{attrs:{src:t(539),alt:"image-20210224222012508"}})]),v._v(" "),s("h2",{attrs:{id:"简介-6379"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-6379"}},[v._v("#")]),v._v(" 简介—6379")]),v._v(" "),s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),s("p",[v._v("Redis（Remote Dictionary Server）是用 C 语言开发的一个开源的"),s("strong",[v._v("高性能键值对")]),v._v("（key-value）数据库")]),v._v(" "),s("h3",{attrs:{id:"特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特征"}},[v._v("#")]),v._v(" 特征")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("数据间没有必然的关联关系")])]),v._v(" "),s("li",[s("p",[v._v("内部采用单线程机制进行工作（6.0后支持多线程）")])]),v._v(" "),s("li",[s("p",[v._v("高性能。官方提供测试数据，50个并发执行100000 个请求,读的速度是110000 次/s,写的速度是81000次/s")])]),v._v(" "),s("li",[s("p",[v._v("多数据类型支持")]),v._v(" "),s("ul",[s("li",[v._v("字符串类型 string")]),v._v(" "),s("li",[v._v("列表类型 list")]),v._v(" "),s("li",[v._v("散列类型 hash")]),v._v(" "),s("li",[v._v("集合类型 set")]),v._v(" "),s("li",[v._v("有序集合类型 sorted_set")])])]),v._v(" "),s("li",[s("p",[v._v("持久化支持。可以进行数据灾难恢复")])])]),v._v(" "),s("h3",{attrs:{id:"应用场景-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-🔥"}},[v._v("#")]),v._v(" 应用场景 🔥")]),v._v(" "),s("ul",[s("li",[v._v("缓存，为"),s("strong",[v._v("热点数据加速查询")]),v._v("（主要场景），如热点商品、热点新闻、热点资讯、推广类、短链接等高访问量信息等")]),v._v(" "),s("li",[s("strong",[v._v("即时信息查询")]),v._v("，如各位"),s("strong",[v._v("排行榜")]),v._v("、各类网站访问"),s("strong",[v._v("统计")]),v._v("、公交到站信息、在线人数信息（聊天室、网站）、设备信号等")]),v._v(" "),s("li",[s("strong",[v._v("时效性信息控制")]),v._v("，如"),s("strong",[v._v("验证码")]),v._v("控制、"),s("strong",[v._v("投票控制")]),v._v("等")]),v._v(" "),s("li",[s("strong",[v._v("分布式数据共享")]),v._v("，如"),s("strong",[v._v("分布式集群架构中的 session 分离")])]),v._v(" "),s("li",[v._v("数据过期处理（可以精确到毫秒）")]),v._v(" "),s("li",[s("strong",[v._v("任务队列")]),v._v("，如秒杀、抢购、12306购票排队等")]),v._v(" "),s("li",[s("strong",[v._v("消息队列")])]),v._v(" "),s("li",[v._v("分布式锁（不推荐，推荐使用 zookepper）")])]),v._v(" "),s("h2",{attrs:{id:"数据存储类型-数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据存储类型-数据结构"}},[v._v("#")]),v._v(" 数据存储类型—数据结构")]),v._v(" "),s("p",[s("strong",[v._v("分析业务数据的特殊性")]),v._v("，是什么数据会存储在 Redis 中呢？据此来设计")]),v._v(" "),s("h3",{attrs:{id:"作为缓存使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作为缓存使用"}},[v._v("#")]),v._v(" 作为缓存使用")]),v._v(" "),s("p",[v._v("原始业务功能设计")]),v._v(" "),s("ul",[s("li",[v._v("秒杀")]),v._v(" "),s("li",[v._v("618活动")]),v._v(" "),s("li",[v._v("双11活动")]),v._v(" "),s("li",[v._v("排队购票")])]),v._v(" "),s("p",[v._v("运营平台监控到的突发高频访问数据")]),v._v(" "),s("ul",[s("li",[v._v("突发时政要闻，被强势关注围观")])]),v._v(" "),s("p",[v._v("高频、复杂的统计数据")]),v._v(" "),s("ul",[s("li",[v._v("在线人数")]),v._v(" "),s("li",[v._v("投票排行榜")])]),v._v(" "),s("h3",{attrs:{id:"附加功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附加功能"}},[v._v("#")]),v._v(" 附加功能")]),v._v(" "),s("p",[v._v("系统功能优化或升级")]),v._v(" "),s("ul",[s("li",[v._v("单服务器升级集群")]),v._v(" "),s("li",[v._v("Session 管理")]),v._v(" "),s("li",[v._v("Token 管理")])]),v._v(" "),s("h3",{attrs:{id:"数据结构总览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据结构总览"}},[v._v("#")]),v._v(" 数据结构总览")]),v._v(" "),s("ul",[s("li",[v._v("redis 自身是一个 "),s("strong",[v._v("Map")]),v._v("，其中所有的数据都是"),s("strong",[v._v("采用 key : value 的形式存储")])]),v._v(" "),s("li",[s("strong",[v._v("数据类型指的是存储的数据的类型")]),v._v("，也就是 "),s("strong",[v._v("value")]),v._v(" 部分的类型，"),s("strong",[v._v("key 部分永远都是字符串")])])]),v._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:t(540),alt:"image-20210224225852838"}}),v._v(" "),s("p",[v._v("常见类型如下：")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("字符串")]),v._v("类型 string")]),v._v(" "),s("li",[s("strong",[v._v("哈希")]),v._v("类型 hash ： map 格式")]),v._v(" "),s("li",[s("strong",[v._v("列表")]),v._v("类型 list ： linkedlist 格式。支持重复元素")]),v._v(" "),s("li",[s("strong",[v._v("集合")]),v._v("类型 set ： 不允许重复元素")]),v._v(" "),s("li",[s("strong",[v._v("有序集合")]),v._v("类型 sortedset：不允许重复元素，且元素有顺序")])]),v._v(" "),s("ul",[s("li",[v._v("...")])])])}),[],!1,null,null,null);_.default=a.exports}}]);