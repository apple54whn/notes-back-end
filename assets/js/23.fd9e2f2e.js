(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{348:function(s,a,t){s.exports=t.p+"assets/img/image-20210224235606470.17dd20f5.png"},349:function(s,a,t){s.exports=t.p+"assets/img/image-20210224235537410.0f0a063c.png"},541:function(s,a,t){s.exports=t.p+"assets/img/image-20210224235138080.c167c99c.png"},542:function(s,a,t){s.exports=t.p+"assets/img/image-20210224232436229.163db171.png"},742:function(s,a,t){"use strict";t.r(a);var e=t(11),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[s._v("#")]),s._v(" string")]),s._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("字符串（string）键是Redis最基本的键值对类型，这种类型的键值对会在数据库中把"),e("strong",[s._v("单独的一个键")]),s._v("和"),e("strong",[s._v("单独的一个值")]),s._v("关联起来")])]),s._v(" "),e("li",[e("p",[s._v("被关联的键和值既可以是"),e("strong",[s._v("普通的文字数据")]),s._v("，也可以是图片、视频、音频、压缩文件等更为"),e("strong",[s._v("复杂的二进制数据")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("如果字符串以整数的形式展示，可以作为数字操作使用")]),s._v("，但本质还是字符串！")])]),s._v(" "),e("li",[e("p",[s._v("数据最大存储量")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("512MB")]),s._v("，也不可能存储这么大的值！")])])]),s._v(" "),e("li",[e("p",[s._v("数值计算最大范围(java中的long的最大值)")]),s._v(" "),e("ul",[e("li",[s._v("9223372036854775807")])])]),s._v(" "),e("li",[e("p",[s._v("数据操作不成功的反馈与数据正常操作之间的差异")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("表示运行结果是否成功")]),s._v(" "),e("ul",[e("li",[s._v("(integer) 0 → false 失败")]),s._v(" "),e("li",[s._v("(integer) 1 → true 成功")])])]),s._v(" "),e("li",[e("p",[s._v("表示运行结果值")]),s._v(" "),e("ul",[e("li",[s._v("(integer) 3 → 3 3个")]),s._v(" "),e("li",[s._v("(integer) 1 → 1 1个")])])])])]),s._v(" "),e("li",[e("p",[s._v("数据未获取到")]),s._v(" "),e("ul",[e("li",[s._v("(nil)等同于null")])])])]),s._v(" "),e("h2",{attrs:{id:"🔥key-的命名约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥key-的命名约定"}},[s._v("#")]),s._v(" 🔥KEY 的命名约定")]),s._v(" "),e("p",[s._v("数据库中的热点数据key命名惯例")]),s._v(" "),e("p",[e("img",{attrs:{src:t(541),alt:"image-20210224235138080"}})]),s._v(" "),e("h2",{attrs:{id:"🔥set为字符串键设置值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥set为字符串键设置值"}},[s._v("#")]),s._v(" 🔥SET为字符串键设置值")]),s._v(" "),e("p",[s._v("设置即为"),e("strong",[s._v("添加、修改")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" key value\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("实例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("127.0.0.1:6379> set name conan\nOK\n\n127.0.0.1:6379> set name conanan\nOK\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"可选参数-ex-px-nx-xx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可选参数-ex-px-nx-xx"}},[s._v("#")]),s._v(" 可选参数 EX PX NX XX")]),s._v(" "),e("p",[s._v("从 Redis 2.6.12 版本开始， "),e("code",[s._v("SET")]),s._v(" 命令的行为可以通过一系列参数来修改：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("EX seconds")]),s._v(" ： 将键的过期时间设置为 "),e("code",[s._v("seconds")]),s._v(" "),e("strong",[s._v("秒")]),s._v("。 执行 "),e("code",[s._v("SET key value EX seconds")]),s._v(" 的效果等同于执行 "),e("code",[s._v("SETEX key seconds value")]),s._v(" 。")]),s._v(" "),e("li",[e("code",[s._v("PX milliseconds")]),s._v(" ： 将键的过期时间设置为 "),e("code",[s._v("milliseconds")]),s._v(" "),e("strong",[s._v("毫秒")]),s._v("。 执行 "),e("code",[s._v("SET key value PX milliseconds")]),s._v(" 的效果等同于执行 "),e("code",[s._v("PSETEX key milliseconds value")]),s._v(" 。")]),s._v(" "),e("li",[e("code",[s._v("NX")]),s._v(" ： 只在键不存在时， 才对键进行设置操作。 执行 "),e("code",[s._v("SET key value NX")]),s._v(" 的效果等同于执行 "),e("code",[s._v("SETNX key value")]),s._v(" 。")]),s._v(" "),e("li",[e("code",[s._v("XX")]),s._v(" ： 只在键已经存在时， 才对键进行设置操作。")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("因为 "),e("code",[s._v("SET")]),s._v(" 命令可以通过参数来实现 "),e("code",[s._v("SETNX")]),s._v(" 、"),e("code",[s._v("SETXX")]),s._v("、 "),e("code",[s._v("SETEX")]),s._v(" 以及 "),e("code",[s._v("PSETEX")]),s._v(" 命令的效果， 所以 Redis 将来的版本可能会移除并废弃这几个命令。")])]),s._v(" "),e("h2",{attrs:{id:"setnx-setxx❗️改变覆盖规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setnx-setxx❗️改变覆盖规则"}},[s._v("#")]),s._v(" SETNX/SETXX❗️改变覆盖规则")]),s._v(" "),e("ul",[e("li",[s._v("NX：只会在"),e("strong",[s._v("键没有值")]),s._v("的情况下执行"),e("strong",[s._v("设置")]),s._v("操作，并返回OK表示设置成功；如果键已经存在，那么SET命令将放弃执行设置操作，并返回空值nil表示设置失败")]),s._v(" "),e("li",[s._v("XX：只会在"),e("strong",[s._v("键已经有值")]),s._v("的情况下执行"),e("strong",[s._v("设置")]),s._v("操作，并返回OK表示设置成功；如果给定的键并没有值，那么SET命令将放弃执行设置操作，并返回空值nil表示设置失败")])]),s._v(" "),e("h2",{attrs:{id:"setex-psetex❗️设置过期时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setex-psetex❗️设置过期时间"}},[s._v("#")]),s._v(" SETEX / PSETEX❗️设置过期时间")]),s._v(" "),e("p",[s._v("设置数据具有指定的生命周期")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("setex key seconds value  -- 秒\npsetex key milliseconds value -- 毫秒\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("实例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" setex tel "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get tel\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"110"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get tel\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("但是记住，"),e("strong",[s._v("再次执行会重置时间")]),s._v("，如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" setex tel "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" setex tel "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v(" -- 重置为60秒\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" setex tel "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v(" -- 重置永久\nOK\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"🔥get获取字符串键的值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥get获取字符串键的值"}},[s._v("#")]),s._v(" 🔥GET获取字符串键的值")]),s._v(" "),e("p",[s._v("如果键 "),e("code",[s._v("key")]),s._v(" 不存在， 那么返回特殊值 "),e("code",[s._v("nil")]),s._v(" ； 否则， 返回键 "),e("code",[s._v("key")]),s._v(" 的值。")]),s._v(" "),e("p",[s._v("如果键 "),e("code",[s._v("key")]),s._v(" 的值"),e("strong",[s._v("并非string类型")]),s._v("， 那么返回一个"),e("strong",[s._v("错误")]),s._v("， 因为 "),e("code",[s._v("GET")]),s._v(" 命令只能用于字符串值。")]),s._v(" "),e("p",[s._v("查询命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("get key\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查询一个存在的key：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get name\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"conanan"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("查询一个不存在的key：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get age\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Redis的数据库要求"),e("strong",[s._v("所有键必须拥有与之相关联的值")]),s._v("，所以如果一个键有值，那么我们就说这个键存在于数据库；相反，如果一个键没有值，那么我们就说这个键不存在于数据库")]),s._v(" "),e("h2",{attrs:{id:"getset-获取旧值并设置新值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getset-获取旧值并设置新值"}},[s._v("#")]),s._v(" GETSET 获取旧值并设置新值")]),s._v(" "),e("p",[s._v("就像GET命令和SET命令的组合版本，GETSET首先获取字符串键目前已有的值，接着为键设置新值，最后把之前获取到的旧值返回给用户")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("GETSET key newValue\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"🔥mset一次为多个字符串键设置值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥mset一次为多个字符串键设置值"}},[s._v("#")]),s._v(" 🔥MSET一次为多个字符串键设置值")]),s._v(" "),e("p",[s._v("添加、修改多个数据：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mset key1 value1 key2 value2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中"),e("code",[s._v("m")]),s._v("为 mutiple 多个意思")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" mset a "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" b "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" c "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nOK\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"msetnx-键不存在的情况下批量设置值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msetnx-键不存在的情况下批量设置值"}},[s._v("#")]),s._v(" MSETNX 键不存在的情况下批量设置值")]),s._v(" "),e("p",[s._v("略")]),s._v(" "),e("h2",{attrs:{id:"🔥mget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥mget"}},[s._v("#")]),s._v(" 🔥MGET")]),s._v(" "),e("p",[s._v("获取多个数据：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mget key1 key2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("实例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" mget a b c d\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" --注意这里\n-- 注意整个返回的格式\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"set-和-mset-对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-和-mset-对比"}},[s._v("#")]),s._v(" SET 和 MSET 对比")]),s._v(" "),e("p",[s._v("单数据操作与多数据操作的选择之惑")]),s._v(" "),e("p",[e("img",{attrs:{src:t(542),alt:"image-20210224232436229"}})]),s._v(" "),e("p",[s._v("基本上选择"),e("code",[s._v("mset")]),s._v("不会有问题，但是要注意实际数据大小！太少这俩没太大区别；太多太多也不能使用他俩，一条一条处理不行，单线程处理太多数据也不行，应该拆分数据后使用"),e("code",[s._v("mset")])]),s._v(" "),e("h2",{attrs:{id:"strlen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strlen"}},[s._v("#")]),s._v(" STRLEN")]),s._v(" "),e("p",[s._v("获取数据字符个数（字符串长度）：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("strlen key\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("实例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get name\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"conanan"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" strlen name\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("注意中文：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" c_name 哈哈\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get c_name\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\xe5"}},[s._v("\\xe5")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\x93"}},[s._v("\\x93")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\x88"}},[s._v("\\x88")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\xe5"}},[s._v("\\xe5")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\x93"}},[s._v("\\x93")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\x88"}},[s._v("\\x88")]),s._v('"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" strlen c_name\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"getrange-获取字符串值指定索引范围上的内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getrange-获取字符串值指定索引范围上的内容"}},[s._v("#")]),s._v(" GETRANGE 获取字符串值指定索引范围上的内容")]),s._v(" "),e("p",[s._v("通过使用GETRANGE命令，用户可以获取字符串值从start索引开始，直到end索引为止的所有内容")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("GETRANGE key start end\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("GETRANGE命令接受的是"),e("strong",[s._v("闭区间")]),s._v("索引范围")]),s._v(" "),e("h2",{attrs:{id:"setrange-对字符串值的指定索引范围进行设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setrange-对字符串值的指定索引范围进行设置"}},[s._v("#")]),s._v(" SETRANGE 对字符串值的指定索引范围进行设置")]),s._v(" "),e("p",[s._v("通过使用SETRANGE命令，用户可以将字符串键的值从索引index开始的部分替换为指定的新内容，被替换内容的长度"),e("strong",[s._v("取决于新内容的长度")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("SETRANGE key index substitute\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"append-追加新内容到值的末尾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#append-追加新内容到值的末尾"}},[s._v("#")]),s._v(" APPEND 追加新内容到值的末尾")]),s._v(" "),e("p",[e("strong",[s._v("追加")]),s._v("信息到原始信息后部（如果"),e("strong",[s._v("原始信息存在就追加，否则新建")]),s._v("）：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("append key value\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意："),e("strong",[s._v("返回的是追加完毕后的长度")]),s._v("！")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name conanan\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" append name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("' and lan'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get name\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"conanan and lan"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"🔥del所有类型都可删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥del所有类型都可删除"}},[s._v("#")]),s._v(" 🔥DEL所有类型都可删除")]),s._v(" "),e("p",[s._v("删除命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("del key "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("删除一个存在的key，返回影响的数量1：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("127.0.0.1:6379> del name\n(integer) 1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("删除一个不存在的key，返回影响的数量0：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("127.0.0.1:6379> del name\n(integer) 0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("删除多个")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("127.0.0.1:6379> set name a\nOK\n127.0.0.1:6379> set age 1\nOK\n127.0.0.1:6379> del name age\n(integer) 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"🔥incr-incrby-incrbyfloat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥incr-incrby-incrbyfloat"}},[s._v("#")]),s._v(" 🔥INCR / INCRBY / INCRBYFLOAT")]),s._v(" "),e("p",[s._v("设置数值数据增加指定范围的值（但是值为负数时即是减法操作）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("incr key\nincrby key increment \nincrbyfloat key increment\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"decr-decrby"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decr-decrby"}},[s._v("#")]),s._v(" DECR / DECRBY")]),s._v(" "),e("p",[s._v("设置数值数据减少指定范围的值（但是值为负数时即是加法操作）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("decr key\ndecrby key increment\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" ====================")]),s._v(" "),e("h2",{attrs:{id:"🔥【场景】分布式数据库主键-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥【场景】分布式数据库主键-id"}},[s._v("#")]),s._v(" 🔥【场景】分布式数据库主键 ID")]),s._v(" "),e("p",[s._v("大型企业级应用中，分表操作是基本操作，使用多张表存储同类型数据，但是对应的主键 id 必须保证统一性 ，不能重复。Oracle 数据库具有 sequence 设定，可以解决该问题，但是 MySQL数据库并不具有类似的机制，那么如何解决?")]),s._v(" "),e("p",[s._v("可以"),e("strong",[s._v("利用 string 存储数字类型，并利用 incr 命令来生成主键id")])]),s._v(" "),e("p",[s._v("string 作为数值操作注意：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("string在redis内部存储默认就是一个字符串，当"),e("strong",[s._v("遇到增减类操作incr，decr时会转成数值型进行计算")]),s._v("。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("redis所有的操作都是原子性的")]),s._v("，采用"),e("strong",[s._v("单线程")]),s._v("处理所有业务，命令是一个一个执行的，因此"),e("strong",[s._v("无需考虑并发")])]),s._v(" "),e("p",[e("strong",[s._v("带来的数据影响")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("注意：按数值进行操作的数据，如果"),e("strong",[s._v("原始数据不能转成数值")]),s._v("，或"),e("strong",[s._v("超越了redis 数值上限范围")]),s._v("，将"),e("strong",[s._v("报错")]),s._v("。 9223372036854775807（java中long型数据最大值，Long.MAX_VALUE）")])])]),s._v(" "),e("p",[s._v("结论：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("redis用于控制数据库表主键id，为数据库表主键提供生成策略，保障数据库表的主键唯一性")])]),s._v(" "),e("li",[s._v("此方案"),e("strong",[s._v("适用于所有数据库，且支持数据库集群")])])]),s._v(" "),e("h2",{attrs:{id:"🔥【场景】限速器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥【场景】限速器"}},[s._v("#")]),s._v(" 🔥【场景】限速器")]),s._v(" "),e("ul",[e("li",[s._v("为了防止网站内容被网络爬虫抓取，网站管理者通常会限制每个IP地址在固定时间段内能够访问的页面数量，比如1min之内最多只能访问30个页面，超过这一限制的用户将被要求进行身份验证，确认本人并非网络爬虫，或者等到限制解除之后再进行访问。")]),s._v(" "),e("li",[s._v("为了防止用户的账号遭到暴力破解，网上银行通常会对访客的密码试错次数进行限制，如果一个访客在尝试登录某个账号的过程中，连续好几次输入了错误的密码，那么这个账号将被冻结，只能等到第二天再尝试登录，有的银行还会向账号持有者的手机发送通知来汇报这一情况。")])]),s._v(" "),e("p",[s._v("实现这些限制机制的其中一种方法是使用限速器，它可以限制用户在"),e("strong",[s._v("指定时间段之内能够执行某项操作的次数")]),s._v("。")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("输入成功后需要重置！")])]),s._v(" "),e("li",[e("strong",[s._v("错误后减1即可")])])]),s._v(" "),e("h2",{attrs:{id:"🔥【场景】密码错误限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥【场景】密码错误限制"}},[s._v("#")]),s._v(" 🔥【场景】密码错误限制")]),s._v(" "),e("p",[s._v("密码输入错误3次后，3小时后解封")]),s._v(" "),e("p",[s._v("解决方案")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("设计计数器，记录调用次数，用于控制业务执行次数。以用户id作为key，使用次数作为value")])]),s._v(" "),e("li",[e("p",[s._v("在调用前获取次数，判断是否超过限定次数")]),s._v(" "),e("ul",[e("li",[s._v("不超过次数的情况下，每次调用计数+1")]),s._v(" "),e("li",[s._v("业务调用失败，计数-1")])])]),s._v(" "),e("li",[e("p",[s._v("为计数器设置生命周期为指定周期，例如1秒/分钟，自动清空周期内使用次数")])])]),s._v(" "),e("p",[s._v("错误时调用")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get u:01\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" u:01 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ex "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -- 设置超时时间\nOK\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get u:01\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" -- 若是大于等于限制次数，则之间返回，否则执行 incr\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" incr u:01\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("改进：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("取消最大值的判定，利用incr操作超过最大值抛出异常的形式替代每次判断是否大于最大值（但是存储占用会变大）")])]),s._v(" "),e("li",[e("p",[s._v("判断是否为nil")]),s._v(" "),e("ul",[e("li",[s._v("如果是，设置为Max-次数-1")]),s._v(" "),e("li",[s._v("如果不是，计数+1")]),s._v(" "),e("li",[s._v("业务调用失败，计数-1")])])]),s._v(" "),e("li",[e("p",[s._v("遇到异常即+操作超过上限，视为使用达到上限")])])]),s._v(" "),e("h2",{attrs:{id:"🔥【场景】数据时效性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥【场景】数据时效性"}},[s._v("#")]),s._v(" 🔥【场景】数据时效性")]),s._v(" "),e("p",[s._v("业务场景：")]),s._v(" "),e("ul",[e("li",[s._v("“最强女生”启动海选投票，只能通过微信投票，每个微信号每 4 小时只能投1票。")]),s._v(" "),e("li",[s._v("电商商家开启热门商品推荐，热门商品不能一直处于热门期，每种商品热门期维持3天，3天后自动取消热门。")]),s._v(" "),e("li",[s._v("新闻网站会出现热点新闻，热点新闻最大的特征是时效性，如何自动控制热点新闻的时效性。")])]),s._v(" "),e("p",[s._v("通过"),e("code",[s._v("SET")]),s._v("的 "),e("code",[s._v("ex")]),s._v(" 或"),e("code",[s._v("px")]),s._v(" 参数控制数据的生命周期，通过数据是否失效控制业务行为，适用于所有具有时效性限定控制的操作")]),s._v(" "),e("h2",{attrs:{id:"主页高频访问信息显示控制思考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主页高频访问信息显示控制思考"}},[s._v("#")]),s._v(" 主页高频访问信息显示控制思考")]),s._v(" "),e("p",[s._v("例如新浪微博大V主页显示粉丝数与微博数量。解决如下（但是不推荐下面的存储格式）：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("在redis中为大V用户设定用户信息，"),e("strong",[s._v("以用户主键和属性值作为key")]),s._v("，后台设定定时刷新策略即可")]),s._v(" "),e("p",[e("img",{attrs:{src:t(348),alt:"image-20210224235606470"}})])]),s._v(" "),e("li",[e("p",[s._v("在redis中"),e("strong",[s._v("以json格式")]),s._v("存储大V用户信息（不推荐），定时刷新（也可以"),e("strong",[s._v("使用hash类型")]),s._v("，推荐）")]),s._v(" "),e("p",[e("img",{attrs:{src:t(349),alt:"image-20210224235537410"}})])])])])}),[],!1,null,null,null);a.default=n.exports}}]);