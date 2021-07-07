(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{495:function(t,s,a){t.exports=a.p+"assets/img/image-20210206215726196.03d7286f.png"},496:function(t,s,a){t.exports=a.p+"assets/img/image-20210208002102861.d70e5613.png"},497:function(t,s,a){t.exports=a.p+"assets/img/image-20210207224614131.02b31e09.png"},498:function(t,s,a){t.exports=a.p+"assets/img/image-20210207231426774.896abab4.png"},499:function(t,s,a){t.exports=a.p+"assets/img/image-20210207232912767.2e005075.png"},500:function(t,s,a){t.exports=a.p+"assets/img/image-20210207235724348.ba6ca719.png"},501:function(t,s,a){t.exports=a.p+"assets/img/image-20210207235751625.86e3c3ec.png"},715:function(t,s,a){"use strict";a.r(s);var v=a(11),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"多线程-基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程-基本概念"}},[t._v("#")]),t._v(" 多线程—基本概念")]),t._v(" "),v("h2",{attrs:{id:"思维导图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思维导图"}},[t._v("#")]),t._v(" 思维导图")]),t._v(" "),v("iframe",{staticStyle:{display:"block",width:"725px",height:"545px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/602b7b0d7d9c081db9a36542"}}),t._v(" "),v("h2",{attrs:{id:"操作系统、程序、进程、线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作系统、程序、进程、线程"}},[t._v("#")]),t._v(" 操作系统、程序、进程、线程")]),t._v(" "),v("h3",{attrs:{id:"操作系统（os）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作系统（os）"}},[t._v("#")]),t._v(" 操作系统（OS）")]),t._v(" "),v("p",[t._v("操作系统（OS）是包含多个进程的容器，而每个进程又都是容纳多个线程的容器")]),t._v(" "),v("h3",{attrs:{id:"程序（program）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序（program）"}},[t._v("#")]),t._v(" 程序（Program）")]),t._v(" "),v("p",[t._v("程序是为完成特定任务、用某种程序设计语言编写的一组"),v("strong",[t._v("指令的集合")]),t._v("。即指"),v("strong",[t._v("一段静态的代码")]),t._v("，"),v("strong",[t._v("静态对象")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"进程（process）🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程（process）🔥"}},[t._v("#")]),t._v(" 进程（Process）🔥")]),t._v(" "),v("p",[t._v("程序要运行，就必须将其加载到 CPU（如缓存器中），然后操作内存中的数据、磁盘中的数据、网络设置等。")]),t._v(" "),v("p",[v("strong",[t._v("进程是正在运行的程序。是程序的一次执行过程")]),t._v("，是"),v("strong",[t._v("系统进行资源分配的基本单位")]),t._v("。是"),v("strong",[t._v("动态对象")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("每个进程都有一个"),v("strong",[t._v("独立的内存空间")]),t._v("，一个应用程序多次运行对应多个进程。")]),t._v(" "),v("li",[t._v("它是一个"),v("strong",[t._v("动态的过程")]),t._v("，系统运行一个程序即是一个进程从创建、运行到消亡的过程，即生命周期。")])]),t._v(" "),v("p",[t._v("Oracle 文档中定义进程是：使用 fork（2）系统调用创建的 UNIX 环境（例如文件描述符，用户 ID 等），它被设置为运行程序")]),t._v(" "),v("p",[t._v("可以使用活动监视器查看，有进程、线程数量等")]),t._v(" "),v("p",[v("img",{attrs:{src:a(495),alt:"image-20210206215726196"}})]),t._v(" "),v("p",[t._v("大部分程序可以同时运行多个实例进程（如浏览器），也有的程序只能同时运行一个实例进程（如网易云音乐）")]),t._v(" "),v("h3",{attrs:{id:"线程（thread）🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程（thread）🔥"}},[t._v("#")]),t._v(" 线程（Thread）🔥")]),t._v(" "),v("p",[v("strong",[t._v("线程是进程中的一个执行单元/路径")]),t._v("，负责当前进程中程序的执行，是"),v("strong",[t._v("处理机调度的基本单位")])]),t._v(" "),v("p",[t._v("Oracle 文档中定义线程是：在进程上下文中执行的一系列指令")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("每个线程拥有独立的运行栈和程序计数器")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("一个进程中的多个线程共享相同的内存单元/内存地址空间")]),t._v("：它们从同一堆中分配对象，可以访问相同的变量和对象。这就使得线程间通信更简便、高效。但多个线程操作共享的系统资源可能会带来"),v("strong",[t._v("安全隐患")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("线程切换的开销小")])])]),t._v(" "),v("li",[v("p",[t._v("线程"),v("strong",[t._v("一对一映射")]),t._v("到 OS 的内核线程，使用 JNI 实现的。若是支持协程的语言，可能几十个协程对应一个 OS 线程")]),t._v(" "),v("p",[v("img",{attrs:{src:a(496),alt:"image-20210208002102861"}})])])]),t._v(" "),v("h3",{attrs:{id:"【面试】进程和线程的关系和区别？🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#【面试】进程和线程的关系和区别？🔥"}},[t._v("#")]),t._v(" 【面试】进程和线程的关系和区别？🔥")]),t._v(" "),v("iframe",{staticStyle:{display:"block",width:"100%",height:"645px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/601eac54e0b34d41a74224b6"}}),t._v(" "),v("h3",{attrs:{id:"【实例】一个-java-应用程序至少有三个线程-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#【实例】一个-java-应用程序至少有三个线程-🔥"}},[t._v("#")]),t._v(" 【实例】一个 Java 应用程序至少有三个线程 🔥")]),t._v(" "),v("p",[t._v("一个 Java 应用程序，至少有三个线程？："),v("strong",[t._v("main()主线程")]),t._v("，"),v("strong",[t._v("gc()垃圾回收线程")]),t._v("，"),v("strong",[t._v("异常处理线程")]),t._v("。当然如果发生异常，会影响主线程。查看 debugger 模式时可以看到如下代码的线程")]),t._v(" "),v("div",{staticClass:"language-java line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("p",[v("img",{attrs:{src:a(497),alt:"image-20210207224614131"}})]),t._v(" "),v("ul",[v("li",[t._v("main：主线程，程序的入口")]),t._v(" "),v("li",[t._v("Finalizer：负责对象的 finalize() 方法，垃圾回收，不推荐主动使用")]),t._v(" "),v("li",[t._v("Reference Handler：和 GC、引用相关的线程")]),t._v(" "),v("li",[t._v("Signal Dispatcher：信号调度，把操作系统发来的信号分发给适当的处理程序")])]),t._v(" "),v("h3",{attrs:{id:"【实例】房子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#【实例】房子"}},[t._v("#")]),t._v(" 【实例】房子")]),t._v(" "),v("ul",[v("li",[t._v("客厅：每个线程随时进出")]),t._v(" "),v("li",[t._v("厨房：线程并发，线程间通信")]),t._v(" "),v("li",[t._v("卫生间：需有锁")]),t._v(" "),v("li",[t._v("卧室：线程独立资源，如堆栈")])]),t._v(" "),v("h2",{attrs:{id:"多线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[t._v("#")]),t._v(" 多线程")]),t._v(" "),v("h3",{attrs:{id:"概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),v("p",[t._v("若"),v("strong",[t._v("一个进程同一时间并行执行多个线程")]),t._v("，就是支持多线程的。一个进程中"),v("strong",[t._v("至少有一个线程")])]),t._v(" "),v("h3",{attrs:{id:"为什么需要多线程、优点-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要多线程、优点-🔥"}},[t._v("#")]),t._v(" 为什么需要多线程、优点 🔥")]),t._v(" "),v("p",[t._v("若是单核 CPU，只使用单个线程先后完成多个任务(调用多个方法)，肯定比用多个线程来完成用的时间更短（线程切换时间长），但是目前大部分都是多核 CPU，那多线程究竟有什么好处呢？为什么要使用多线程？")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("最主要的目的就是"),v("strong",[t._v("提高 CPU 利用率")])]),t._v(" "),v("ul",[v("li",[t._v("提高"),v("strong",[t._v("处理速度")])]),t._v(" "),v("li",[t._v("避免"),v("strong",[t._v("无效等待")]),t._v("（IO 时可以做其他事）")]),t._v(" "),v("li",[v("strong",[t._v("提高用户体验")]),t._v("，应用程序响应快，避免卡顿，缩短等待时间\n"),v("ul",[v("li",[t._v("并行处理，提高性能，通常是服务器领域（例如 Tomcat），用多个线程去接收进来的 HTTP 请求，而不是排队等待单一的线程处理")]),t._v(" "),v("li",[t._v("在 Android 开发中，主线程的重要任务之一是绘制屏幕界面，即 UI 线程，该线程中不允许进行 IO 操作或网络请求，目的就是避免卡顿，影响用户的交互")])])])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("便于编程建模，改善程序结构")])]),t._v(" "),v("p",[t._v("把这个大的任务 A 分解成几个小任务，任务 B、任务 C、任务 D，分别建立程序模型，并通过多线程分别运行这几个任务，便于理解和修改")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("计算机性能定律：摩尔定律失效，阿姆达尔定律登上舞台")])]),t._v(" "),v("ul",[v("li",[t._v("摩尔定律：当价格不变时，集成电路上可容纳的"),v("strong",[t._v("元器件的数目")]),t._v("，约每隔 18-24 个月便会"),v("strong",[t._v("增加一倍")]),t._v("，"),v("strong",[t._v("性能也将提升一倍")]),t._v("。")]),t._v(" "),v("li",[t._v("阿姆达尔定律：\n"),v("ul",[v("li",[t._v("结论：一般情况下，处理器越多，程序执行的速度就会越快，但是会有一个上限，上限取决于程序中串行部分的比例，"),v("strong",[t._v("并行的比例越高，多处理器的效果越明显")]),t._v("。但是大部分程序都是串行占比多！")])])])])])]),t._v(" "),v("p",[v("img",{attrs:{src:a(498),alt:"image-20210207231426774"}})]),t._v(" "),v("h3",{attrs:{id:"多线程的使用场景-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程的使用场景-🔥"}},[t._v("#")]),t._v(" 多线程的使用场景 🔥")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("为了"),v("strong",[t._v("同时做多件不同的事")]),t._v("：开网页同时听歌；后台定时任务")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("为了提高工作效率、处理能力")]),t._v("：Tomcat；并行下载；NIO")]),t._v(" "),v("p",[t._v("程序需要实现一些需要"),v("strong",[t._v("等待的任务")]),t._v("时，如用户输入、文件读写操作、网络操作、搜索等")])]),t._v(" "),v("li",[v("p",[t._v("需要同时有很大并发量的时候：压测")])])]),t._v(" "),v("h3",{attrs:{id:"多线程局限-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程局限-🔥"}},[t._v("#")]),t._v(" 多线程局限 🔥")]),t._v(" "),v("ul",[v("li",[t._v("性能问题："),v("strong",[t._v("上下文切换的消耗")])]),t._v(" "),v("li",[t._v("带来"),v("strong",[t._v("线程安全问题")]),t._v("：\n"),v("ul",[v("li",[v("strong",[t._v("数据安全")]),t._v("问题：i++总数不一致")]),t._v(" "),v("li",[v("strong",[t._v("线程活跃性")]),t._v("问题：线程饥饿、死锁、活锁")])])]),t._v(" "),v("li",[t._v("异构化任务（任务结构不一样）很难高效并行。即对于串行任务无法改造为多线程")])]),t._v(" "),v("h2",{attrs:{id:"串行、并发、并行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#串行、并发、并行"}},[t._v("#")]),t._v(" 串行、并发、并行")]),t._v(" "),v("h3",{attrs:{id:"异同-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异同-🔥"}},[t._v("#")]),t._v(" 异同 🔥")]),t._v(" "),v("ul",[v("li",[t._v("串行：按顺序执行")]),t._v(" "),v("li",[v("strong",[t._v("并发")]),t._v("：指两个或多个线程在"),v("strong",[t._v("同一个时间段内")]),t._v("发生，"),v("strong",[t._v("逻辑上")]),t._v("同时发生，单核即可实现。左图")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("并行")]),t._v("：指两个或多个线程在"),v("strong",[t._v("同一时刻")]),t._v("发生（同时发生），"),v("strong",[t._v("物理上")]),t._v("同时发生，多核可以实现。"),v("strong",[t._v("并行一定是并发，反之不是")]),t._v("。右图")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(499),alt:"image-20210207232912767"}})]),t._v(" "),v("h3",{attrs:{id:"单核、多核-cpu"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单核、多核-cpu"}},[t._v("#")]),t._v(" 单核、多核 CPU")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("单核 CPU")]),t._v("，其实是一种假的多线程，操作系统中的"),v("strong",[t._v("任务调度器")]),t._v("，将 CPU 的"),v("strong",[t._v("时间片（Win 下最小时间片为 15ms）"),v("strong",[t._v("分给不同的线程使用，"),v("strong",[t._v("一个时间片内只能执行一个线程的任务")]),t._v("，即线程还是")]),t._v("串行执行")]),t._v("的，但是因为时间片特别短，因此感觉不出来。总结一句话就是："),v("strong",[t._v("微观串行，宏观并发")]),t._v("。")]),t._v(" "),v("p",[t._v("任务调度器具体如何分配时间片，有"),v("strong",[t._v("分时调度模型")]),t._v("（时间片轮转，平分时间片）、"),v("strong",[t._v("抢占式调度模型")]),t._v("（优先级高则时间片多）")]),t._v(" "),v("p",[t._v("例如：虽然有多车道，但是收费站只有一个工作人员在收费，只有收了费才能通过，那么 CPU 就好比收费人员。如果有某个人不想交钱，那么收费人员可以 把他“挂起”（晾着他，等他想通了，准备好了钱，再去收费）。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("多核 CPU")]),t._v("，在单核基础上可以"),v("strong",[t._v("并行")]),t._v("执行多个线程，能更好的发挥多线程的效率。现在的服务器都是多核的。")])])]),t._v(" "),v("h3",{attrs:{id:"是什么让并发和并行称为可能？🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#是什么让并发和并行称为可能？🔥"}},[t._v("#")]),t._v(" 是什么让并发和并行称为可能？🔥")]),t._v(" "),v("ul",[v("li",[t._v("操作系统升级，抢占式任务处理，时间片轮转；")]),t._v(" "),v("li",[t._v("单核 CPU 升级，频率越来越高，速度越来越开，让并发称为可能")]),t._v(" "),v("li",[t._v("多核 CPU 升级，让并行称为可能；")]),t._v(" "),v("li",[t._v("编程语言升级，支持并发")])]),t._v(" "),v("h2",{attrs:{id:"高并发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高并发"}},[t._v("#")]),t._v(" 高并发")]),t._v(" "),v("h3",{attrs:{id:"什么是高并发？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是高并发？"}},[t._v("#")]),t._v(" 什么是高并发？")]),t._v(" "),v("p",[t._v("服务器短时间可以处理非常多个请求，如双十一、过年微信摇一摇红包")]),t._v(" "),v("h3",{attrs:{id:"高并发和多线程的联系和不同？🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高并发和多线程的联系和不同？🔥"}},[t._v("#")]),t._v(" 高并发和多线程的联系和不同？🔥")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("多线程")]),t._v("是高并发其中一种重要的"),v("strong",[t._v("解决方案")]),t._v("，"),v("strong",[t._v("高并发")]),t._v("是一种服务器"),v("strong",[t._v("状态")])]),t._v(" "),v("li",[t._v("高并发并不意味着是多线程，如 Redis")])]),t._v(" "),v("h3",{attrs:{id:"高并发的指标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高并发的指标"}},[t._v("#")]),t._v(" 高并发的指标")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("QPS（Queries Per Second）：每秒查询数")])]),t._v(" "),v("li",[v("p",[t._v("TPS：每秒处理事务数")])]),t._v(" "),v("li",[v("p",[t._v("带宽")])]),t._v(" "),v("li",[v("p",[t._v("PV（Page View）：一天访问量。。。")])]),t._v(" "),v("li",[v("p",[t._v("UV（Unique Visitor）：一天访问量去重")])]),t._v(" "),v("li",[v("p",[t._v("IP：不同 IP 访问量")])]),t._v(" "),v("li",[v("p",[t._v("并发连接数（The number of concurrent connections）")])]),t._v(" "),v("li",[v("p",[t._v("服务器平均请求等待时间 TPR（Time per request）：across all concurrent request")])])]),t._v(" "),v("h2",{attrs:{id:"同步异步、阻塞非阻塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步异步、阻塞非阻塞"}},[t._v("#")]),t._v(" 同步异步、阻塞非阻塞")]),t._v(" "),v("p",[t._v("参考"),v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22707398",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"同步、异步-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同步、异步-🔥"}},[t._v("#")]),t._v(" 同步、异步 🔥")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("被调用者")]),t._v("是否"),v("strong",[t._v("主动告诉")]),t._v("调用者结果，不主动则应用层还是在向系统内核轮训")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("以调用方角度来讲")]),t._v("，如果")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("需要")]),t._v("等待结果返回，才能继续运行就是同步")]),t._v(" "),v("li",[v("strong",[t._v("不需要")]),t._v("等待结果返回，就能继续运行就是异步")])]),t._v(" "),v("p",[t._v("即前序结果对后续"),v("strong",[t._v("有影响时使用同步")]),t._v("；没有"),v("strong",[t._v("影响时使用异步即可（如 IO、网络请求等）")])])])]),t._v(" "),v("p",[t._v("鸣笛烧水壶就是异步的示例")]),t._v(" "),v("p",[v("img",{attrs:{src:a(500),alt:"image-20210207235724348"}})]),t._v(" "),v("p",[v("img",{attrs:{src:a(501),alt:"image-20210207235751625"}})]),t._v(" "),v("h3",{attrs:{id:"阻塞、非阻塞-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#阻塞、非阻塞-🔥"}},[t._v("#")]),t._v(" 阻塞、非阻塞 🔥")]),t._v(" "),v("p",[v("strong",[t._v("调用者")]),t._v("（线程发出请求，如 HTTP）是否阻塞等待")]),t._v(" "),v("h3",{attrs:{id:"组合示例-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组合示例-🔥"}},[t._v("#")]),t._v(" 组合示例 🔥")]),t._v(" "),v("ul",[v("li",[t._v("同步阻塞：开始烧水后，我们一直盯着水壶")]),t._v(" "),v("li",[t._v("同步非阻塞：开始烧水后，我们每隔三五分钟过来看一下水壶")]),t._v(" "),v("li",[t._v("异步阻塞：带有鸣笛的水壶开始烧水后，我们一直盯着水壶。常用于结果影响后续进程")]),t._v(" "),v("li",[t._v("异步非阻塞：带有鸣笛的水壶开始烧水后，我们干其他事去了，鸣笛后再过来")])])])}),[],!1,null,null,null);s.default=_.exports}}]);