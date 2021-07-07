(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{731:function(s,n,t){"use strict";t.r(n);var a=t(11),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"复杂查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复杂查询"}},[s._v("#")]),s._v(" 复杂查询")]),s._v(" "),t("h2",{attrs:{id:"视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[s._v("#")]),s._v(" 视图")]),s._v(" "),t("p",[s._v("表中存储的是实际数据，而"),t("strong",[s._v("视图")]),s._v("中保存的是"),t("strong",[s._v("从表中取出数据所使用的 SELECT 语句")]),s._v("。将经常使用的 SELECT 语句做成视图。")]),s._v(" "),t("p",[s._v("用于封装复杂查询。")]),s._v(" "),t("h3",{attrs:{id:"创建视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建视图"}},[s._v("#")]),s._v(" 创建视图")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" 视图名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("视图列名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("视图列名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 语句 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("视图名称后可以不写列名，采用 SELECT 的列名")])]),s._v(" "),t("li",[s._v("SELECT 语句需要书写在 AS 关键字之后。SELECT 语句中列的排列顺序和视图中列的排列顺序相同")]),s._v(" "),t("li",[s._v("应该"),t("strong",[s._v("避免在视图的基础上创建视图")]),s._v("，因为对多数DBMS来说多重视图会降低 SQL 的性能。")])]),s._v(" "),t("h3",{attrs:{id:"删除视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除视图"}},[s._v("#")]),s._v(" 删除视图")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("DROP VIEW 视图名称(<视图列名1>, <视图列名2>, ......)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("在 PostgreSQL 中，如果删除以视图为基础创建出来的多重视图，由于存在关联的视图，因此会发生错误。使用 CASCADE 选项来删除关联视图。"),t("code",[s._v("DROP VIEW ProductSum CASCADE;")])])]),s._v(" "),t("h3",{attrs:{id:"查看视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看视图"}},[s._v("#")]),s._v(" 查看视图")]),s._v(" "),t("h4",{attrs:{id:"查看创建的视图（同表）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看创建的视图（同表）"}},[s._v("#")]),s._v(" 查看创建的视图（同表）")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看视图的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看视图的定义"}},[s._v("#")]),s._v(" 查看视图的定义")]),s._v(" "),t("p",[s._v("视图是一张"),t("code",[s._v("虚拟表")]),s._v("，用来查看视图结构的语句和用来查看表结构的语句比较类似，是这样的：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" 视图名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("比如我们来查看一下"),t("code",[s._v("student_info_view")]),s._v("视图的结构可以这样写：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SHOW CREATE VIEW student_info_view\\G\n*************************** 1. row ***************************\n                View: student_info_view\n         Create View: CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `student_info_view` AS select `student_info`.`number` AS `no`,`student_info`.`name` AS `n`,`student_info`.`major` AS `m` from `student_info`\ncharacter_set_client: utf8\ncollation_connection: utf8_general_ci\n1 row in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("小贴士： 注意到我们查询出来的视图结构中多了很多信息，比方说ALGORITHM=UNDEFINED、DEFINER="),t("code",[s._v("root")]),s._v("@"),t("code",[s._v("localhost")]),s._v("、SQL SECURITY DEFINER等等等等，这些信息我们目前不关心，大家主动跳过就好了，等各位羽翼丰满了之后可以到MySQL文档中查看这些信息都代表啥意思。")]),s._v(" "),t("ul",[t("li",[s._v("对于简单查询形成的 View，再对 View 进行查询时，如添加 WHERE、ORDER 等条件。MySQL 会把创建 View 的语句 + 查询 VIew 的语句**合并（Merge）**成查物理表的语句。")]),s._v(" "),t("li",[s._v("也可能视图本身比较复杂，很难再和查询视图的语句合并，MySQL 会先执行视图的创建语句，把结果集形成内存中的"),t("strong",[s._v("临时表")]),s._v("，然后再去查临时表，该算法为 "),t("strong",[s._v("Temptable")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALGORITHM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MERGE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" 视图名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("视图列名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("视图列名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 语句 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("h3",{attrs:{id:"可更新的视图（不推荐使用）-☠️"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可更新的视图（不推荐使用）-☠️"}},[s._v("#")]),s._v(" 可更新的视图（不推荐使用） ☠️")]),s._v(" "),t("p",[s._v("我们前边唠叨的都是对视图的查询操作，其实有些视图是可更新的，也就是在视图上执行"),t("code",[s._v("INSERT")]),s._v("、"),t("code",[s._v("DELETE")]),s._v("、"),t("code",[s._v("UPDATE")]),s._v("语句。对视图执行INSERT、DELETE、UPDATE语句的本质上是对该视图对应的底层表中的数据进行增、删、改操作。比方说视图"),t("code",[s._v("student_info_view")]),s._v("的底层表是"),t("code",[s._v("student_info")]),s._v("，所以如果我们对"),t("code",[s._v("student_info_view")]),s._v("执行INSERT、DELETE、UPDATE语句就相当于对"),t("code",[s._v("student_info")]),s._v("表进行INSERT、DELETE、UPDATE语句，比方说我们执行这个语句：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> UPDATE student_info_view SET n = '111' WHERE no = 20180101;\nQuery OK, 1 row affected (0.01 sec)\nRows matched: 1  Changed: 1  Warnings: 0\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("我们再到"),t("code",[s._v("student_info")]),s._v("表中看一下这个学生的名称是否被改了：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT name FROM student_info WHERE number = 20180101;\n+------+\n| name |\n+------+\n| 111  |\n+------+\n1 row in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("名称的确被更改成功了！")]),s._v(" "),t("p",[s._v("不过并不是可以在所有的视图上执行更新语句的，在生成视图的时候使用了下边这些语句的都不能进行更新：")]),s._v(" "),t("ul",[t("li",[s._v("聚集函数（比如SUM(), MIN(), MAX(), COUNT()等等）")]),s._v(" "),t("li",[s._v("DISTINCT")]),s._v(" "),t("li",[s._v("GROUP BY")]),s._v(" "),t("li",[s._v("HAVING")]),s._v(" "),t("li",[s._v("UNION 或者 UNION ALL")]),s._v(" "),t("li",[s._v("某些子查询")]),s._v(" "),t("li",[s._v("某些连接查询")]),s._v(" "),t("li",[s._v("等等等等")])]),s._v(" "),t("p",[s._v("我们这里对这些限制条件并不准备展开来说，因为这会引入更多复杂的东西，对于作为小白的我们来说，一般我们只在查询语句里使用视图，而不在INSERT、DELETE、UPDATE语句里使用视图！这里介绍对可更新的视图只是为了语法的完整性，并不是建议大家在实际使用过程中使用此功能。")]),s._v(" "),t("h3",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("定义视图时不能使用ORDER BY子句（PostgreSQL可以使用）")])]),s._v(" "),t("li",[t("p",[s._v("（视图和表需要同时进行更新，因此通过汇总得到的视图无法进行更新）对视图进行更新需满足？？？啥意思：")])]),s._v(" "),t("li",[t("ul",[t("li",[s._v("SELECT 子句中未使用 DISTINCT")]),s._v(" "),t("li",[s._v("FROM 子句中只有一张表")]),s._v(" "),t("li",[s._v("未使用GROUP BY子句")]),s._v(" "),t("li",[s._v("未使用 HAVING 子句")])])])]),s._v(" "),t("h2",{attrs:{id:"子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子查询"}},[s._v("#")]),s._v(" 子查询")]),s._v(" "),t("p",[s._v("如：有时候会有从多个表中查询数据的需求，比如我们想查一下名叫"),t("code",[s._v("'杜琦燕'")]),s._v("的学生的各科成绩该怎么办呢？我们只能先从"),t("code",[s._v("student_info")]),s._v("表中根据名称找到对应的学生学号，然后再通过学号到"),t("code",[s._v("student_score")]),s._v("表中找着对应的成绩信息，所以这个问题的解决方案就是书写两个查询语句：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT number FROM student_info WHERE name = '杜琦燕';\n+----------+\n| number   |\n+----------+\n| 20180102 |\n+----------+\n1 row in set (0.00 sec)\n\nmysql> SELECT * FROM student_score WHERE number = 20180102;\n+----------+-----------------------------+-------+\n| number   | subject                     | score |\n+----------+-----------------------------+-------+\n| 20180102 | 母猪的产后护理              |   100 |\n| 20180102 | 论萨达姆的战争准备          |    98 |\n+----------+-----------------------------+-------+\n2 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("子查询的"),t("strong",[s._v("目的是将多个查询 SQL 合并到一个 SQL 中")]),s._v("。")]),s._v(" "),t("p",[s._v("有查询的嵌套，内部的查询称为子查询。看SELECT关键字的个数即可确认！")]),s._v(" "),t("p",[s._v("子查询就是将用来定义视图的 SELECT 语句直接用于FROM子句当中，但是不会像视图那样保存在存储介质(硬盘)之中，而是在 SELECT 语句执行之后就消失了。实际上 SELECT 语句包含嵌套的结构，"),t("strong",[s._v("首先会执行 FROM 子句中的 SELECT 语句，然后才会执行外层的 SELECT 语句")]),s._v("。"),t("strong",[s._v("尽量避免使用多层嵌套的子查询")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("子查询必须设定名称")]),s._v("。Oracle 需要省略 AS 关键字才可以使用。")]),s._v(" "),t("h3",{attrs:{id:"标量子查询-scalar-subquery-单行单列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标量子查询-scalar-subquery-单行单列"}},[s._v("#")]),s._v(" 标量子查询 scalar subquery—单行单列")]),s._v(" "),t("p",[s._v("必须而且"),t("strong",[s._v("只能返回 1 行 1 列")]),s._v("的结果，即返回单一值的子查询。任何位置都可以使用。可用在= 或者 <> 等需要单一值的比较运算符中。由于在"),t("strong",[s._v("WHERE中")]),s._v("不能使用聚合函数，所以可以使用标量自查询来代替！"),t("strong",[s._v("SELECT 中")]),s._v("也比较常见！")]),s._v(" "),t("p",[s._v("WHERE 中（运算符为 >、<、>=、<=、=、<>）：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT * FROM student_score WHERE number = (SELECT number FROM student_info WHERE name = '杜琦燕');\n+----------+-----------------------------+-------+\n| number   | subject                     | score |\n+----------+-----------------------------+-------+\n| 20180102 | 母猪的产后护理              |   100 |\n| 20180102 | 论萨达姆的战争准备          |    98 |\n+----------+-----------------------------+-------+\n2 rows in set (0.01 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("SELECT 中：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT (SELECT number FROM student_info WHERE name = '杜琦燕') AS 学号;\n+----------+\n| 学号     |\n+----------+\n| 20180102 |\n+----------+\n1 row in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"列子查询-多行单列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列子查询-多行单列"}},[s._v("#")]),s._v(" 列子查询—多行单列")]),s._v(" "),t("p",[s._v("WHERE后作为条件存在")]),s._v(" "),t("p",[s._v("运算符为 IN、ALL、ANY")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 列"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ANY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 列 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 条件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT * FROM student_score WHERE number IN (SELECT number FROM student_info WHERE major = '计算机科学与工程');\n+----------+-----------------------------+-------+\n| number   | subject                     | score |\n+----------+-----------------------------+-------+\n| 20180101 | 母猪的产后护理              |    78 |\n| 20180101 | 论萨达姆的战争准备          |    88 |\n| 20180102 | 母猪的产后护理              |   100 |\n| 20180102 | 论萨达姆的战争准备          |    98 |\n+----------+-----------------------------+-------+\n4 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"行子查询-单行多列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行子查询-单行多列"}},[s._v("#")]),s._v(" 行子查询—单行多列")]),s._v(" "),t("p",[s._v("只要子查询的结果集中最多只包含一条记录，而且这条记录中有超过一个列的数据（如果该条记录只包含一个列的话，该子查询就成了"),t("code",[s._v("标量子查询")]),s._v("），那么这个子查询就可以被称之为"),t("code",[s._v("行子查询")])]),s._v(" "),t("p",[s._v("比如这样：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT * FROM student_score WHERE (number, subject) = (SELECT number, '母猪的产后护理' FROM student_info LIMIT 1);\n+----------+-----------------------+-------+\n| number   | subject               | score |\n+----------+-----------------------+-------+\n| 20180104 | 母猪的产后护理        |    55 |\n+----------+-----------------------+-------+\n1 row in set (0.01 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("该子查询的查询列表是"),t("code",[s._v("number, '母猪的产后护理'")]),s._v("，其中"),t("code",[s._v("number")]),s._v("是列名，"),t("code",[s._v("'母猪的产后护理'")]),s._v("是一个常数。我们在子查询语句中加了"),t("code",[s._v("LIMIT 1")]),s._v("这个子句，意味着子查询最多只能返回一条记录，所以该子查询就可以被看作一个"),t("code",[s._v("行子查询")]),s._v("。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("小贴士： 在想要得到标量子查询或者行子查询，但又不能保证子查询的结果集只有一条记录时，应该使用LIMIT 1子句来限制记录数量。")])]),s._v(" "),t("p",[s._v("另外，之前的子查询操作数都是单一的一个值，不过由于上述的子查询执行后产生的结果集是一个行（包含2个列），所以用作等值比较的另一个操作数也得是2个值，本例中就是"),t("code",[s._v("(number, subject)")]),s._v("（注意，这两个值必须用小括号"),t("code",[s._v("()")]),s._v("扩住，否则会产生歧义）。它表达的语义就是：先获取到子查询的执行结果，然后再执行外层查询，如果"),t("code",[s._v("student_score")]),s._v("中记录的"),t("code",[s._v("number")]),s._v("等于子查询结果中的"),t("code",[s._v("number")]),s._v("列并且"),t("code",[s._v("subject")]),s._v("列等于子查询结果中的"),t("code",[s._v("'母猪的产后护理'")]),s._v("，那么就将该记录加入到结果集。")]),s._v(" "),t("h3",{attrs:{id:"表子查询-多行多列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表子查询-多行多列"}},[s._v("#")]),s._v(" 表子查询—多行多列")]),s._v(" "),t("p",[s._v("FROM后作为表存在，或用普通内连接添加多个条件来查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 条件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果子查询结果集中包含多行多列，那么这个子查询也可以被称之为"),t("code",[s._v("表子查询")]),s._v("，比如这样：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT * FROM student_score WHERE (number, subject) IN (SELECT number, '母猪的产后护理' FROM student_info WHERE major = '计算机科学与工程');\n+----------+-----------------------+-------+\n| number   | subject               | score |\n+----------+-----------------------+-------+\n| 20180101 | 母猪的产后护理        |    78 |\n| 20180102 | 母猪的产后护理        |   100 |\n+----------+-----------------------+-------+\n2 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("在这个例子中的子查询执行之后的结果集中包含多行多列，所以可以被看作是一个"),t("code",[s._v("表子查询")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"exists和not-exists子查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exists和not-exists子查询"}},[s._v("#")]),s._v(" EXISTS和NOT EXISTS子查询")]),s._v(" "),t("p",[s._v("有时候"),t("strong",[s._v("外层查询并不关心子查询中的结果是什么")]),s._v("，而"),t("strong",[s._v("只关心子查询的结果集是不是为空集")]),s._v("，这时可以用到下边这两个操作符：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("操作符")]),s._v(" "),t("th",[s._v("示例")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("EXISTS")])]),s._v(" "),t("td",[t("code",[s._v("EXISTS (SELECT ...)")])]),s._v(" "),t("td",[s._v("当子查询结果集不是空集时表达式为真")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT EXISTS")])]),s._v(" "),t("td",[t("code",[s._v("NOT EXISTS (SELECT ...)")])]),s._v(" "),t("td",[s._v("当子查询结果集是空集时表达式为真")])])])]),s._v(" "),t("p",[s._v("我们来举个例子：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT * FROM student_score WHERE EXISTS (SELECT * FROM student_info WHERE number = 20180108);\nEmpty set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("其中子查询的意思是在"),t("code",[s._v("student_info")]),s._v("表中查找学号为"),t("code",[s._v("20180108")]),s._v("的学生信息，很显然并没有学号为"),t("code",[s._v("20180108")]),s._v("的学生，所以子查询的结果集是一个空集，于是"),t("code",[s._v("EXISTS")]),s._v("表达式的结果为"),t("code",[s._v("FALSE")]),s._v("，所以外层查询也就不查了，直接返回了一个"),t("code",[s._v("Empty set")]),s._v("，表示没有结果。你可以自己试一下"),t("code",[s._v("NOT EXISTS")]),s._v("的使用。")]),s._v(" "),t("h3",{attrs:{id:"不相关子查询和相关子查询-🔥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不相关子查询和相关子查询-🔥"}},[s._v("#")]),s._v(" 不相关子查询和相关子查询 🔥")]),s._v(" "),t("p",[t("strong",[s._v("前边介绍的子查询和外层查询都没有依赖关系")]),s._v("，也就是说"),t("strong",[s._v("子查询可以独立运行并产生结果之后")]),s._v("，再拿结果作为外层查询的条件去执行外层查询，这种子查询称为"),t("code",[s._v("不相关子查询")]),s._v("，比如下边这个查询：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT * FROM student_score WHERE number = (SELECT number FROM student_info WHERE name = '杜琦燕');\n+----------+-----------------------------+-------+\n| number   | subject                     | score |\n+----------+-----------------------------+-------+\n| 20180102 | 母猪的产后护理              |   100 |\n| 20180102 | 论萨达姆的战争准备          |    98 |\n+----------+-----------------------------+-------+\n2 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("子查询中只用到了"),t("code",[s._v("student_info")]),s._v("表而没有使用到"),t("code",[s._v("student_score")]),s._v("表，它可以单独运行并产生结果，这就是一种典型的"),t("code",[s._v("不相关子查询")]),s._v("。")]),s._v(" "),t("p",[s._v("而有时候我们需要在子查询的语句中引用到外层查询的值，这样的话子查询就不能当作一个独立的语句去执行，这种子查询被称为"),t("code",[s._v("相关子查询")]),s._v("。比方说我们想查看一些学生的基本信息，但是前提是这些学生在"),t("code",[s._v("student_score")]),s._v("表中有成绩记录，那可以这么写：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT number, name, id_number, major FROM student_info WHERE EXISTS (SELECT * FROM student_score WHERE student_score.number = student_info.number);\n+----------+-----------+--------------------+--------------------------+\n| number   | name      | id_number          | major                    |\n+----------+-----------+--------------------+--------------------------+\n| 20180101 | 杜子腾    | 158177199901044792 | 计算机科学与工程         |\n| 20180102 | 杜琦燕    | 151008199801178529 | 计算机科学与工程         |\n| 20180103 | 范统      | 17156319980116959X | 软件工程                 |\n| 20180104 | 史珍香    | 141992199701078600 | 软件工程                 |\n+----------+-----------+--------------------+--------------------------+\n4 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("小贴士： student_info和student_score表里都有number列，所以在子查询的WHERE语句中书写number = number会造成二义性，也就是让服务器懵逼，不知道这个number列到底是哪个表的，所以为了区分，在列名前边加上了表名，并用点.连接起来，这种显式的将列所属的表名书写出来的名称称为该列的全限定名。所以上边子查询的WHERE语句中用了列的全限定名：student_score.number = student_info.number。")])]),s._v(" "),t("p",[s._v("这条查询语句可以分成这么两部分来理解:")]),s._v(" "),t("ul",[t("li",[s._v("我们要查询学生的一些基本信息。")]),s._v(" "),t("li",[s._v("这些学生必须符合这样的条件："),t("code",[s._v("必须有成绩记录保存在student_score表中")]),s._v("。")])]),s._v(" "),t("p",[s._v("所以这个例子中的"),t("code",[s._v("相关子查询")]),s._v("的查询过程是这样的（"),t("strong",[s._v("与不相关子查询执行顺序相反")]),s._v("）：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("先执行外层查询")]),s._v("获得到"),t("code",[s._v("student_info")]),s._v("表的第一条记录，发现它的"),t("code",[s._v("number")]),s._v("值是"),t("code",[s._v("20180101")]),s._v("。把"),t("code",[s._v("20180101")]),s._v("当作参数传入到子查询，此时子查询的意思是判断"),t("code",[s._v("student_score")]),s._v("表的"),t("code",[s._v("number")]),s._v("字段是否有"),t("code",[s._v("20180101")]),s._v("这个值存在，子查询的结果是该值存在，所以整个"),t("code",[s._v("EXISTS")]),s._v("表达式的值为"),t("code",[s._v("TRUE")]),s._v("，那么"),t("code",[s._v("student_info")]),s._v("表的第一条记录可以被加入到结果集。")]),s._v(" "),t("li",[s._v("再执行外层查询获得到"),t("code",[s._v("student_info")]),s._v("表的第二条记录，发现它的"),t("code",[s._v("number")]),s._v("值是"),t("code",[s._v("20180102")]),s._v("，与上边的步骤相同，"),t("code",[s._v("student_info")]),s._v("表的第二条记录也可以被加入到结果集。")]),s._v(" "),t("li",[s._v("与上边类似，"),t("code",[s._v("student_info")]),s._v("表的第三条记录也可以被加入到结果集。")]),s._v(" "),t("li",[s._v("与上边类似，"),t("code",[s._v("student_info")]),s._v("表的第四条记录也可以被加入到结果集。")]),s._v(" "),t("li",[s._v("再执行外层查询获得到"),t("code",[s._v("student_info")]),s._v("表的第五条记录，发现它的"),t("code",[s._v("number")]),s._v("值是"),t("code",[s._v("20180105")]),s._v("，把"),t("code",[s._v("20180105")]),s._v("当作参数传入到它的子查询，此时子查询的意思是判断"),t("code",[s._v("student_score")]),s._v("表的"),t("code",[s._v("number")]),s._v("字段是否有"),t("code",[s._v("20180105")]),s._v("这个值存在，子查询的结果是该值不存在，所以整个"),t("code",[s._v("EXISTS")]),s._v("表达式的值为"),t("code",[s._v("FALSE")]),s._v("，那么"),t("code",[s._v("student_info")]),s._v("表的第五条记录就不被加入结果集中。")]),s._v(" "),t("li",[s._v("与上一步骤类似，"),t("code",[s._v("student_info")]),s._v("表的第六条记录也不被加入结果集中。")]),s._v(" "),t("li",[t("code",[s._v("student_info")]),s._v("表没有更多的记录了，结束查询。")])]),s._v(" "),t("h3",{attrs:{id:"对同一个表的子查询-🔥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对同一个表的子查询-🔥"}},[s._v("#")]),s._v(" 对同一个表的子查询 🔥")]),s._v(" "),t("p",[s._v("其实不只是在涉及多个表查询的时候会用到子查询，在只涉及单个表的查询中有时也会用到子查询。比方说我们想看看在"),t("code",[s._v("student_score")]),s._v("表的"),t("code",[s._v("'母猪的产后护理'")]),s._v("这门课的成绩中，有哪些超过了平均分的记录，脑子中第一印象是这么写：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> SELECT * FROM student_score WHERE subject = '母猪的产后护理' AND score > AVG(score);\nERROR 1111 (HY000): Invalid use of group function\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("很抱歉，报错了。为啥呢？因为"),t("strong",[s._v("聚集函数是用来对分组做数据统计的（如果没有GROUP BY语句那么意味着只有一个分组），而"),t("code",[s._v("WHERE")]),s._v("子句是以记录为单位来执行过滤操作的，在"),t("code",[s._v("WHERE")]),s._v("子句执行完成之后才会得到分组，也就是说：聚集函数不能放到WHERE子句中")]),s._v("！！！ 如果我们想实现上边的需求，就需要搞一个"),t("code",[s._v("student_score")]),s._v("表的副本，就相当于有了两个"),t("code",[s._v("student_score")]),s._v("表，在一个表上使用聚集函数统计，统计完了之后拿着统计结果再到另一个表中进行过滤，这个过程可以这么写：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql>  SELECT * FROM student_score WHERE subject = '母猪的产后护理' AND score > (SELECT AVG(score) FROM student_score WHERE subject = '母猪的产后护理');\n+----------+-----------------------+-------+\n| number   | subject               | score |\n+----------+-----------------------+-------+\n| 20180101 | 母猪的产后护理        |    78 |\n| 20180102 | 母猪的产后护理        |   100 |\n+----------+-----------------------+-------+\n2 rows in set (0.01 sec)\n\nmysql>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("我们使用子查询先统计出了"),t("code",[s._v("'母猪的产后护理'")]),s._v("这门课的平均分，然后再到外层查询中使用这个平均分组成的表达式来作为搜索条件去查找大于平均分的记录。")]),s._v(" "),t("h2",{attrs:{id:"谓词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谓词"}},[s._v("#")]),s._v(" 谓词")]),s._v(" "),t("p",[s._v("谓词就是"),t("strong",[s._v("返回值为真值的函数")]),s._v("。例如，=、<、>、<> 等比较运算符，其正式的名称就是比较谓词。是需要满足特定条件的函数，该条件就是返回值是真值TRUE/FALSE/UNKNOWN)。如 : LIKE、IS NULL、IS NOT NULL、BETWEEN、IN、EXISTS。查看DQL中WHERE条件查询。")]),s._v(" "),t("h2",{attrs:{id:"case表达式-🔥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#case表达式-🔥"}},[s._v("#")]),s._v(" CASE表达式 🔥")]),s._v(" "),t("p",[s._v("CASE表达式分为简单CASE表达式和搜索CASE表达式两种。搜索 CASE 表达式包含简单 CASE 表达式的全部功能。")]),s._v(" "),t("ul",[t("li",[s._v("虽然CASE表达式中的ELSE子句可以省略，这时会被默认为ELSE NULL，但为了阅读方便尽量写上")]),s._v(" "),t("li",[s._v("CASE 表达式中的 END 不能省略")]),s._v(" "),t("li",[s._v("使用CASE表达式能够将SELECT语句的结果进行组合")])]),s._v(" "),t("p",[s._v("有些 DBMS 还提供了一些特有的 CASE 表达式的简化函数，例如 Oracle 中的 DECODE、MySQL 中的 IF 等。")]),s._v(" "),t("h3",{attrs:{id:"简单-case-表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单-case-表达式"}},[s._v("#")]),s._v(" 简单 CASE 表达式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SELECT\n  product_name, -- 必须有这个逗号\n  CASE\n    product_type\n    WHEN '衣服' THEN 'A :' || product_type\n    WHEN '办公用品' THEN 'B :' || product_type\n    WHEN '衣厨房用具' THEN 'C :' || product_type\n    ELSE NULL\n  END AS abc_product_type\nFROM\n  Product;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("想要在 WHEN 子句中指定不同列时，简单 CASE 表达式就无能为力了。")]),s._v(" "),t("h3",{attrs:{id:"搜索-case-表达式-🔥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搜索-case-表达式-🔥"}},[s._v("#")]),s._v(" 搜索 CASE 表达式 🔥")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SELECT\n  product_name, -- 必须有这个逗号\n  CASE\n    WHEN product_type = '衣服' THEN 'A :' | | product_type\n    WHEN product_type = '办公用品' THEN 'B :' | | product_type\n    WHEN product_type = '厨房用具' THEN 'C :' | | product_type\n    ELSE NULL\n  END AS abc_product_type\nFROM\n  Product;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("在对 SELECT 语句的"),t("strong",[s._v("结果进行编辑")]),s._v("时，CASE 表达式能够发挥较大作用。")])])}),[],!1,null,null,null);n.default=e.exports}}]);