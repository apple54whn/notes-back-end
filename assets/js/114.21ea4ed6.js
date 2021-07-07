(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{749:function(s,a,e){"use strict";e.r(a);var t=e(11),v=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"geo-地理坐标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#geo-地理坐标"}},[s._v("#")]),s._v(" GEO—地理坐标")]),s._v(" "),e("p",[s._v("Redis GEO是Redis在3.2版本中新添加的特性，通过这一特性，用户可以将"),e("strong",[s._v("经纬度格式")]),s._v("的地理坐标存储到Redis中，并对这些坐标执行距离计算、范围查找等操作")]),s._v(" "),e("h2",{attrs:{id:"🔥geoadd-存储、更新坐标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥geoadd-存储、更新坐标"}},[s._v("#")]),s._v(" 🔥GEOADD 存储、更新坐标")]),s._v(" "),e("p",[s._v("使用GEOADD命令，用户可以将给定的一个或多个经纬度坐标存储到位置集合中，并为这些"),e("strong",[s._v("坐标设置相应的名字")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("geoadd location_set longitude latitude name [longitude latitude name ...]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("GEOADD命令会返回"),e("strong",[s._v("新添加至位置集合的坐标数量")]),s._v("作为返回值")]),s._v(" "),e("p",[s._v("位置相同，则更新")]),s._v(" "),e("h2",{attrs:{id:"🔥geopos-获取指定位置的坐标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥geopos-获取指定位置的坐标"}},[s._v("#")]),s._v(" 🔥GEOPOS 获取指定位置的坐标")]),s._v(" "),e("p",[s._v("使用GEOADD命令将位置及其坐标存储到位置集合之后，用户可以使用GEOPOS命令去获取给定位置的坐标")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("geopos location_set name [name ...]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("GEOPOS命令会返回一个数组作为执行结果，数组中的每个项都与用户给定的位置相对应。数组中的每个项都包含两个元素，第一个元素是位置的"),e("strong",[s._v("经度")]),s._v("，而第二个元素则是位置的"),e("strong",[s._v("纬度")])]),s._v(" "),e("p",[s._v("如果用户给定的位置并不存在于位置集合当中，那么GEOPOS命令将返回一个空值")]),s._v(" "),e("h2",{attrs:{id:"🔥geodist-计算两个位置之间的直线距离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥geodist-计算两个位置之间的直线距离"}},[s._v("#")]),s._v(" 🔥GEODIST 计算两个位置之间的直线距离")]),s._v(" "),e("p",[s._v("使用GEODIST命令计算两个给定位置之间的直线距离")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("geodist location_set name1 name2 [unit]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在"),e("strong",[s._v("默认")]),s._v("情况下，GEODIST命令将"),e("strong",[s._v("以米为单位")]),s._v("，返回两个给定位置之间的直线距离")]),s._v(" "),e("p",[s._v("unit参数的值可以是以下单位中的任意一个：")]),s._v(" "),e("ul",[e("li",[s._v("m——以米为单位，为默认单位。")]),s._v(" "),e("li",[s._v("km——以千米为单位。")]),s._v(" "),e("li",[s._v("mi——以英里为单位。")]),s._v(" "),e("li",[s._v("ft——以英尺为单位。")])]),s._v(" "),e("p",[s._v("在调用GEODIST命令时，如果用户给定的某个位置并不存在于位置集合中，那么命令将返回空值，表示计算失败")]),s._v(" "),e("h2",{attrs:{id:"🔥georadius-查找指定坐标半径范围内的其他位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥georadius-查找指定坐标半径范围内的其他位置"}},[s._v("#")]),s._v(" 🔥GEORADIUS 查找指定坐标半径范围内的其他位置")]),s._v(" "),e("p",[s._v("通过使用GEORADIUS命令，用户可以指定一个经纬度作为中心点，并从位置集合中找出位于中心点指定半径范围内的"),e("strong",[s._v("其他位置")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("georadis location_set longitude latitude radis unit [withdist] [withcoord] [asc|desc] [count n]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("各个命令参数的意义分别如下：")]),s._v(" "),e("ul",[e("li",[s._v("location_set参数用于指定执行查找操作的位置集合。")]),s._v(" "),e("li",[s._v("longitude参数和latitude参数分别用于指定中心点的经度和纬度。")]),s._v(" "),e("li",[s._v("radius参数用于指定查找半径。")]),s._v(" "),e("li",[s._v("unit参数用于指定查找半径的单位，与GEODIST命令中的unit参数一样，这个参数的值可以是m（米）、km（千米）、mi（英里）或者ft（英尺）中的任意一个。")])]),s._v(" "),e("p",[s._v("其他参数")]),s._v(" "),e("ul",[e("li",[s._v("withdist 返回这些位置与中心点之间的"),e("strong",[s._v("距离")])]),s._v(" "),e("li",[s._v("withcoord 返回被匹配位置的坐标")]),s._v(" "),e("li",[s._v("asc|desc 排序查找结果")]),s._v(" "),e("li",[s._v("count n 限制命令获取的位置数量")])]),s._v(" "),e("h2",{attrs:{id:"🔥georadiusbymember-查找指定位置半径范围内的其他位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🔥georadiusbymember-查找指定位置半径范围内的其他位置"}},[s._v("#")]),s._v(" 🔥GEORADIUSBYMEMBER 查找指定位置半径范围内的其他位置")]),s._v(" "),e("p",[s._v("GEORADIUSBYMEMBER命令的作用和GEORADIUS命令的作用一样，都是找出中心点指定半径范围内的其他位置，这两个命令的主要区别在于"),e("strong",[s._v("GEORADIUS命令通过给定经纬度")]),s._v("来指定中心点，而"),e("strong",[s._v("GEORADIUSBYMEMBER命令则通过选择位置集合中的一个位置")]),s._v("作为中心点")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("georadiusbymember location_set name radius unit [withdist] [withcoord] [asc|desc] [count n]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("除了指定中心点时使用的参数不一样之外，其余一样")]),s._v(" "),e("h2",{attrs:{id:"geohash-获取指定位置的geohash值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#geohash-获取指定位置的geohash值"}},[s._v("#")]),s._v(" GEOHASH 获取指定位置的Geohash值")]),s._v(" "),e("p",[s._v("用户可以通过向GEOHASH命令传入一个或多个位置来获得这些位置对应的经纬度坐标的Geohash表示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("geohash location_set name [name ...]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在进行范围查找时获取Geohash值，传入"),e("code",[s._v("withhash")]),s._v("参数即可")]),s._v(" "),e("p",[s._v('注意：需要注意的是，与GEOHASH命令不一样，GEORADIUS命令和GEORADIUSBYMEMBER命令返回的是被解释为数字的Geohash值。而GEOHASH命令返回的则是被解释为字符串的Geohash值。比如GEOHASH命令在获取清远市的Geohash值时返回的是字符串"ws0w0phgp70"，而GEORADIUS命令获取的Geohash值却是数字4046597933543051，不过这两个值底层的二进制位是完全相同的。')])])}),[],!1,null,null,null);a.default=v.exports}}]);