(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{599:function(s,e,t){s.exports=t.p+"assets/img/image-20210326235723206.6dfa94f5.png"},600:function(s,e,t){s.exports=t.p+"assets/img/image-20210327001035164.d9628b37.png"},601:function(s,e,t){s.exports=t.p+"assets/img/image-20210327001414792.91332627.png"},602:function(s,e,t){s.exports=t.p+"assets/img/image-20210327001656092.5f91c00e.png"},603:function(s,e,t){s.exports=t.p+"assets/img/image-20210327002039853.cd681014.png"},759:function(s,e,t){"use strict";t.r(e);var a=t(11),v=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"哨兵-sentinel-故障自动切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵-sentinel-故障自动切换"}},[s._v("#")]),s._v(" 哨兵 Sentinel—故障自动切换")]),s._v(" "),a("h2",{attrs:{id:"master-宕机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-宕机"}},[s._v("#")]),s._v(" master 宕机")]),s._v(" "),a("h3",{attrs:{id:"补救措施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补救措施"}},[s._v("#")]),s._v(" 补救措施")]),s._v(" "),a("p",[s._v("master 宕机后，我们需要做如下操作：")]),s._v(" "),a("ul",[a("li",[s._v("将宕机的 master 下线")]),s._v(" "),a("li",[s._v("找一个 slave 作为 master")]),s._v(" "),a("li",[s._v("通知所有的 slave 连接新的 master")]),s._v(" "),a("li",[s._v("启动新的 master 和 slave")]),s._v(" "),a("li",[s._v("有可能会全量复制 x N + 部分复制 x N")])]),s._v(" "),a("p",[s._v("那么问题来了：")]),s._v(" "),a("ul",[a("li",[s._v("谁来确认 master 宕机了，标准是什么？")]),s._v(" "),a("li",[s._v("如何从众多 slave 中找一个 master，规则是什么？")]),s._v(" "),a("li",[s._v("修改配置后，原有的 master 恢复了怎么版？")])]),s._v(" "),a("h3",{attrs:{id:"哨兵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵"}},[s._v("#")]),s._v(" 哨兵")]),s._v(" "),a("p",[s._v("哨兵（Sentinel） 是一个分布式系统，用于对"),a("strong",[s._v("主从结构中的每台服务器")]),s._v("进行"),a("strong",[s._v("监控")]),s._v("，当出现故障时通过"),a("strong",[s._v("投票机制")]),s._v("选择新的 master 并将所有 slave 连接到新的 master。")]),s._v(" "),a("p",[s._v("其作用有：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("监控：")]),s._v(" "),a("p",[s._v("不断的检查master和slave是否正常运行。 master存活检测、master与slave运行情况检测。")])]),s._v(" "),a("li",[a("p",[s._v("通知（提醒）")]),s._v(" "),a("p",[s._v("当被监控的服务器出现问题时，向其他（哨兵间，客户端）发送通知。")])]),s._v(" "),a("li",[a("p",[s._v("自动故障转移")]),s._v(" "),a("p",[s._v("断开master与slave连接，选取一个slave作为master，将其他slave连接到新的master，并告知客户端新的服务器地址")])])]),s._v(" "),a("p",[s._v("注意："),a("strong",[s._v("哨兵也是一台redis服务器")]),s._v("，只是"),a("strong",[s._v("不提供数据服务")]),s._v("。通常哨兵配置数量为"),a("strong",[s._v("单数！！！")])]),s._v(" "),a("h2",{attrs:{id:"配置哨兵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置哨兵"}},[s._v("#")]),s._v(" 配置哨兵")]),s._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("配置一拖二的主从结构")])]),s._v(" "),a("li",[a("p",[s._v("配置三个哨兵（配置相同，端口不同）。参看 Redis 中的 "),a("code",[s._v("sentinel.conf")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat sentinel.conf | grep -v '#' | grep -v '^$'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('port 26379\ndaemonize no\npidfile /var/run/redis-sentinel.pid\nlogfile ""\ndir /tmp\n\nsentinel monitor mymaster 127.0.0.1 6379 2\nsentinel down-after-milliseconds mymaster 30000\nacllog-max-len 128\nsentinel parallel-syncs mymaster 1\nsentinel failover-timeout mymaster 180000\nsentinel deny-scripts-reconfig yes\nSENTINEL resolve-hostnames no\nSENTINEL announce-hostnames no\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("提示：复制并修改文件中"),a("strong",[s._v("端口")]),s._v("时可以直接使用 "),a("code",[s._v("sed")]),s._v(" 命令！！！")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed 's/26379/26380/g' sentinel-26379.conf > sentinel-26380.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("启动哨兵")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-sentinel sentinel-端口号.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[s._v("上面5个就不多说了。也无需改变（特别是 daemonize 无需后台运行）。一般只改 port ！！！")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("配置项")]),s._v(" "),a("th",[s._v("范例")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("sentinel monitor <master-name> <ip> <redis-port> <quorum>")]),s._v(" "),a("td",[s._v("sentinel monitor mymaster 127.0.0.1 6379 2")]),s._v(" "),a("td",[s._v("设置哨兵监听的"),a("strong",[s._v("主服务器信息")]),s._v("，最后的参数决定了最终"),a("strong",[s._v("参与选举的服务器数量")]),s._v("（即多半）")])]),s._v(" "),a("tr",[a("td",[s._v("sentinel down-after-milliseconds <master-name> <milliseconds>")]),s._v(" "),a("td",[s._v("sentinel down-after-milliseconds mymaster 30000")]),s._v(" "),a("td",[s._v("指定哨兵在监控Redis服务时，"),a("strong",[s._v("判定master服务器挂掉的时间周期")]),s._v("，默认30秒 (30000)，也是主从切换的启动条件之一")])]),s._v(" "),a("tr",[a("td",[s._v("sentinel parallel-syncs <master-name> <numreplicas>")]),s._v(" "),a("td",[s._v("sentinel parallel-syncs mymaster 1")]),s._v(" "),a("td",[s._v("指定"),a("strong",[s._v("同时进行主从的slave数量")]),s._v("，数值越大，要求网络资源越高，要求约小，同步时间约长")])]),s._v(" "),a("tr",[a("td",[s._v("sentinel failover-timeout <master-name> <milliseconds>")]),s._v(" "),a("td",[s._v("sentinel failover-timeout mymaster 180000")]),s._v(" "),a("td",[s._v("指定出现故障后，"),a("strong",[s._v("故障切换的最大超时时间")]),s._v("，超过该值，认定切换失败， 默认3分钟")])]),s._v(" "),a("tr",[a("td",[s._v("sentinel notification-script <master-name> <script-path>")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("服务器无法正常联通时，设定的执行脚本，通常调试使用")])])])]),s._v(" "),a("h2",{attrs:{id:"哨兵工作原理-🔥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵工作原理-🔥"}},[s._v("#")]),s._v(" 哨兵工作原理 🔥")]),s._v(" "),a("h3",{attrs:{id:"监控阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控阶段"}},[s._v("#")]),s._v(" 监控阶段")]),s._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:t(599),alt:"image-20210326235723206"}}),s._v(" "),a("p",[s._v("用于同步各个节点")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("获取各个sentinel的状态(是否在线)")])]),s._v(" "),a("li",[a("p",[s._v("获取master的状态")]),s._v(" "),a("ul",[a("li",[s._v("master属性：runid、role:master 等")]),s._v(" "),a("li",[s._v("各个slave的详细信息")])])]),s._v(" "),a("li",[a("p",[s._v("获取所有slave的状态(根据master中的slave信息获取)")]),s._v(" "),a("ul",[a("li",[s._v("slave属性：runid、role:slave、master_host、master_port、offset")])])])]),s._v(" "),a("h3",{attrs:{id:"通知阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通知阶段"}},[s._v("#")]),s._v(" 通知阶段")]),s._v(" "),a("p",[a("img",{attrs:{src:t(600),alt:"image-20210327001035164"}})]),s._v(" "),a("h3",{attrs:{id:"故障转移阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障转移阶段"}},[s._v("#")]),s._v(" 故障转移阶段")]),s._v(" "),a("p",[s._v("众 sentinel 观察并确认 master 是否下线")]),s._v(" "),a("p",[a("img",{attrs:{src:t(601),alt:"image-20210327001414792"}})]),s._v(" "),a("p",[s._v("推选一个主 sentinel")]),s._v(" "),a("p",[a("img",{attrs:{src:t(602),alt:"image-20210327001656092"}})]),s._v(" "),a("p",[s._v("主 sentinel 来从 slave 中选 master")]),s._v(" "),a("p",[a("img",{attrs:{src:t(603),alt:"image-20210327002039853"}})]),s._v(" "),a("p",[s._v("服务器列表中挑选备选master规则：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("必须是在线的")])]),s._v(" "),a("li",[a("p",[s._v("pass 响应慢的")])]),s._v(" "),a("li",[a("p",[s._v("pass 与原master断开时间久的")])]),s._v(" "),a("li",[a("p",[s._v("优先原则")]),s._v(" "),a("ul",[a("li",[s._v("优先级")]),s._v(" "),a("li",[s._v("offset，小的就会被认为数据不够")]),s._v(" "),a("li",[s._v("runid，小的优先（老员工）")])])])]),s._v(" "),a("p",[s._v("发送指令(sentinel)：")]),s._v(" "),a("ul",[a("li",[s._v("向新的master发送slaveof no one")]),s._v(" "),a("li",[s._v("向其他slave发送slaveof 新masterIP端口")])]),s._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("监控")]),s._v(" "),a("ul",[a("li",[s._v("同步信息")])])]),s._v(" "),a("li",[a("p",[s._v("通知")]),s._v(" "),a("ul",[a("li",[s._v("保持联通")])])]),s._v(" "),a("li",[a("p",[s._v("故障转移")]),s._v(" "),a("ul",[a("li",[s._v("发现问题")]),s._v(" "),a("li",[s._v("竞选负责人")]),s._v(" "),a("li",[s._v("优选新master")]),s._v(" "),a("li",[s._v("新master上任，其他slave切换master，原master作为slave故障回复后连接")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);