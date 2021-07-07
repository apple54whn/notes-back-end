(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{732:function(s,n,a){"use strict";a.r(n);var e=a(11),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"集合运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合运算"}},[s._v("#")]),s._v(" 集合运算")]),s._v(" "),a("p",[s._v("集合在数学领域表示“(各种各样的)事物的总和”，在数据库领域表示记录的集合。具体来说，表、视图和查询的执行结果都是记录的集合。")]),s._v(" "),a("h2",{attrs:{id:"表的加减法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表的加减法"}},[s._v("#")]),s._v(" 表的加减法")]),s._v(" "),a("h3",{attrs:{id:"表的加法-去除重复行-union"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表的加法-去除重复行-union"}},[s._v("#")]),s._v(" 表的加法—去除重复行—UNION")]),s._v(" "),a("p",[s._v("UNION 等集合运算符"),a("strong",[s._v("默认都会除去重复（即合并，比较耗时，所以一般使用 UNION ALL）的记录")]),s._v("（除了 UNION ALL）。注意（同样适用于其他）：")]),s._v(" "),a("ul",[a("li",[s._v("作为运算对象的记录的"),a("strong",[s._v("列数必须相同")])]),s._v(" "),a("li",[s._v("作为运算对象的记录中"),a("strong",[s._v("列的类型必须一致")]),s._v("。CAST 转换后一致也可以。可能隐式类型转换")]),s._v(" "),a("li",[s._v("可以使用任何"),a("strong",[s._v("SELECT、WHERE、GROUP BY、HAVING 等")]),s._v("语句，但"),a("strong",[s._v("ORDER BY、LIMIT")]),s._v("子句只能在最后使用一次")]),s._v(" "),a("li",[s._v("需要注意的一点是，由于"),a("strong",[s._v("最后的结果集展示的列名是第一个查询中给定的列名")]),s._v("，所以"),a("code",[s._v("ORDER BY")]),s._v("子句中"),a("strong",[s._v("指定的排序列也必须是第一个查询中给定的列名")]),s._v("（别名也可以）。")])]),s._v(" "),a("p",[s._v("如果我们只想单独为各个小的查询排序，而不为最终的汇总的结果集排序行不行呢？先试试：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> (SELECT m1, n1 FROM t1 ORDER BY m1 DESC) UNION (SELECT m2, n2 FROM t2 ORDER BY m2 DESC);\n+------+------+\n| m1   | n1   |\n+------+------+\n|    1 | a    |\n|    2 | b    |\n|    3 | c    |\n|    4 | d    |\n+------+------+\n4 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("从结果来看，我们为各个小查询加入的"),a("code",[s._v("ORDER BY")]),s._v("子句好像并没有起作用，这是因为设计"),a("code",[s._v("MySQL")]),s._v("的大叔规定组合查询并不保证最后汇总起来的大结果集中的顺序是按照各个小查询的结果集中的顺序排序的，也就是说我们在各个小查询中加入"),a("code",[s._v("ORDER BY")]),s._v("子句的作用和没加一样～ 不过如果我们只是单纯的想从各个小的查询中获取有限条排序好的记录加入最终的汇总，那是可以滴，比如这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> (SELECT m1, n1 FROM t1 ORDER BY m1 DESC LIMIT 1) UNION (SELECT m2, n2 FROM t2 ORDER BY m2 DESC LIMIT 1);\n+------+------+\n| m1   | n1   |\n+------+------+\n|    3 | c    |\n|    4 | d    |\n+------+------+\n2 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("如图所示，最终结果集中的"),a("code",[s._v("(3, 'c')")]),s._v("其实就是查询"),a("code",[s._v("(SELECT m1, n1 FROM t1 ORDER BY m1 DESC LIMIT 1)")]),s._v("的结果，"),a("code",[s._v("(4, 'd')")]),s._v("其实就是查询"),a("code",[s._v("(SELECT m2, n2 FROM t2 ORDER BY m2 DESC LIMIT 1)")]),s._v("的结果。")]),s._v(" "),a("h3",{attrs:{id:"表的加法-包含重复行-union-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表的加法-包含重复行-union-all"}},[s._v("#")]),s._v(" 表的加法—包含重复行—UNION ALL")]),s._v(" "),a("h3",{attrs:{id:"公共部分-intersect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共部分-intersect"}},[s._v("#")]),s._v(" 公共部分—"),a("strong",[s._v("INTERSECT")])]),s._v(" "),a("p",[s._v("选取两个记录集合中公共部分的 "),a("strong",[s._v("INTERSECT(交集)")])]),s._v(" "),a("h3",{attrs:{id:"表的减法-except"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表的减法-except"}},[s._v("#")]),s._v(" 表的减法—EXCEPT")]),s._v(" "),a("p",[s._v("减法运算 EXCEPT(差集)，其语法也与 UNION 相同。")]),s._v(" "),a("p",[s._v("EXCEPT 有一点与 UNION 和 INTERSECT 不同，那就是在减法运算中减数和被减数的"),a("strong",[s._v("位置")]),s._v("不同，所得到的结果也不相同。")]),s._v(" "),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[s._v("只有 Oracle 不使用 EXCEPT，而是使用其特有的 MINUS 运算符")]),s._v(" "),a("li",[s._v("MySQL 还不支持 EXCEPT，因此也无法使用。")])]),s._v(" "),a("h2",{attrs:{id:"连接-联结-以列为单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接-联结-以列为单位"}},[s._v("#")]),s._v(" 连接/联结(以列为单位)")]),s._v(" "),a("p",[s._v("联结(JOIN)就是将其他表中的列添加过来，进行“添加列”的集合运算。 UNION 是以行(纵向)为单位进行操作，而联结则是以列(横向)为单位 进行的。分为内联结和外联结两种。")]),s._v(" "),a("p",[s._v("ON 是专门用来指定联结条件的（联结键），它能起到与 WHERE 相同的作用。需要指定多个键时，同样可以使用 AND、OR。并且 ON 必须书写在 FROM 和 WHERE 之间。")]),s._v(" "),a("p",[s._v("联结条件也可以使用“=”来记述。在语法上，还可以使用 <= 和 BETWEEN 等谓词。但是九成以上都用=。")]),s._v(" "),a("h3",{attrs:{id:"交叉联结-cross-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交叉联结-cross-join"}},[s._v("#")]),s._v(" 交叉联结——CROSS JOIN")]),s._v(" "),a("p",[s._v("这种联结在实际业务中并不会使用，但是交叉联结是所有联结运算的基础。")]),s._v(" "),a("p",[s._v("对于"),a("strong",[s._v("返回笛卡儿积的联结称为交叉联结，即不使用 WHERE 过滤记录的联结查询")]),s._v("！")]),s._v(" "),a("h3",{attrs:{id:"内连接-join-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内连接-join-on"}},[s._v("#")]),s._v(" 内连接——JOIN...ON")]),s._v(" "),a("p",[a("strong",[s._v("内连接其实是带有 WHERE 或 ON 过滤条件的交叉联结")]),s._v("。所以内连接查询出的所有记录"),a("strong",[s._v("都满足条件")])]),s._v(" "),a("p",[a("strong",[s._v("内连接中的 WHERE 子句和 ON 子句是等价的")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("显式内连接 ("),a("strong",[s._v("[INNER] JOIN...ON")]),s._v(")")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("xx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("xx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 还有不等关系")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("隐式内连接( , WHERE)（MySQL 和 Oracle 都支持）")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("xx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("xx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 还有不等关系")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"外连接-join-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外连接-join-on"}},[s._v("#")]),s._v(" 外连接——* JOIN...ON")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("左外")]),s._v("("),a("strong",[s._v("LEFT [OUTER] JOIN...ON")]),s._v(")")]),s._v(" "),a("p",[a("strong",[s._v("左表记录")]),s._v("无论是否满足条件"),a("strong",[s._v("都会查询出")]),s._v("，而"),a("strong",[s._v("右表满足条件才能查出")]),s._v("。左表中不满条件的记录，右表补"),a("strong",[s._v("NULL")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("xx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("xx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 还有不等关系")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("右外")]),s._v("("),a("strong",[s._v("RIGHT [OUTER] JOIN...ON")]),s._v(")")]),s._v(" "),a("p",[a("strong",[s._v("右表记录")]),s._v("无论是否满足条件"),a("strong",[s._v("都会查询出")]),s._v("，而"),a("strong",[s._v("左表满足条件才能查出")]),s._v("。右表中不满条件的记录，左表补"),a("strong",[s._v("NULL")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RIGHT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("xx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("xx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 还有不等关系")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("一般情况下，我们都把"),a("strong",[s._v("只涉及单表的过滤条件放到"),a("code",[s._v("WHERE")]),s._v("子句中")]),s._v("，把"),a("strong",[s._v("涉及两表的过滤条件都放到"),a("code",[s._v("ON")]),s._v("子句中")]),s._v("，我们也一般把放到"),a("code",[s._v("ON")]),s._v("子句中的过滤条件也称之为"),a("code",[s._v("连接条件")]),s._v("。在运行时（生成中间表时）会使用到 ON 过滤，生成中间表后使用 WHERE 过滤")]),s._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM t1;\n+------+------+\n| m1   | n1   |\n+------+------+\n|    1 | a    |\n|    2 | b    |\n|    3 | c    |\n+------+------+\n3 rows in set (0.00 sec)\n\nmysql> SELECT * FROM t2;\n+------+------+\n| m2   | n2   |\n+------+------+\n|    2 | b    |\n|    3 | c    |\n|    4 | d    |\n+------+------+\n3 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM t1 INNER JOIN t2 ON t1.m1 = t2.m2;\n+------+------+------+------+\n| m1   | n1   | m2   | n2   |\n+------+------+------+------+\n|    2 | b    |    2 | b    |\n|    3 | c    |    3 | c    |\n+------+------+------+------+\n2 rows in set (0.00 sec)\n\nmysql> SELECT * FROM t1 LEFT JOIN t2 ON t1.m1 = t2.m2;\n+------+------+------+------+\n| m1   | n1   | m2   | n2   |\n+------+------+------+------+\n|    2 | b    |    2 | b    |\n|    3 | c    |    3 | c    |\n|    1 | a    | NULL | NULL |\n+------+------+------+------+\n3 rows in set (0.00 sec)\n\nmysql> SELECT * FROM t1 RIGHT JOIN t2 ON t1.m1 = t2.m2;\n+------+------+------+------+\n| m1   | n1   | m2   | n2   |\n+------+------+------+------+\n|    2 | b    |    2 | b    |\n|    3 | c    |    3 | c    |\n| NULL | NULL |    4 | d    |\n+------+------+------+------+\n3 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"自连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自连接"}},[s._v("#")]),s._v(" 自连接")]),s._v(" "),a("p",[s._v("我们上边说的都是多个不同的表之间的连接，其实同一个表也可以进行连接。比方说我们可以对两个"),a("code",[s._v("t1")]),s._v("表来生成"),a("code",[s._v("笛卡尔积")]),s._v("，就像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM t1, t1;\nERROR 1066 (42000): Not unique table/alias: 't1'\nmysql>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("咦，报了个错，这是因为设计 MySQL 的大叔不允许"),a("code",[s._v("FROM")]),s._v("子句中出现相同的表名。我们这里需要的是两张一模一样的"),a("code",[s._v("t1")]),s._v("表进行连接，为了把两个一样的表区分一下，需要为表定义别名。比如这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM t1 AS table1, t1 AS table2;\n+------+------+------+------+\n| m1   | n1   | m1   | n1   |\n+------+------+------+------+\n|    1 | a    |    1 | a    |\n|    2 | b    |    1 | a    |\n|    3 | c    |    1 | a    |\n|    1 | a    |    2 | b    |\n|    2 | b    |    2 | b    |\n|    3 | c    |    2 | b    |\n|    1 | a    |    3 | c    |\n|    2 | b    |    3 | c    |\n|    3 | c    |    3 | c    |\n+------+------+------+------+\n9 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("这里相当于我们为"),a("code",[s._v("t1")]),s._v("表定义了两个副本，一个是"),a("code",[s._v("table1")]),s._v("，另一个是"),a("code",[s._v("table2")]),s._v("，这里的连接过程就不赘述了，大家把它们认为是不同的表就好了。由于被连接的表其实是源自同一个表，所以这种连接也称为"),a("code",[s._v("自连接")]),s._v("。我们看一下这个"),a("code",[s._v("自连接")]),s._v("的现实意义，比方说我们想查看与"),a("code",[s._v("'史珍香'")]),s._v("相同专业的学生有哪些，可以这么写：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT s2.number, s2.name, s2.major FROM student_info AS s1 INNER JOIN student_info AS s2 WHERE s1.major = s2.major AND s1.name = '史珍香' ;\n+----------+-----------+--------------+\n| number   | name      | major        |\n+----------+-----------+--------------+\n| 20180103 | 范统      | 软件工程     |\n| 20180104 | 史珍香    | 软件工程     |\n+----------+-----------+--------------+\n2 rows in set (0.01 sec)\n\nmysql>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("code",[s._v("s1")]),s._v("、"),a("code",[s._v("s2")]),s._v("都可以看作是"),a("code",[s._v("student_info")]),s._v("表的一份副本，我们可以这样理解这个查询：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("根据"),a("code",[s._v("s1.name = '史珍香'")]),s._v("搜索条件过滤"),a("code",[s._v("s1")]),s._v("表，可以得到该同学的基本信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----------+-----------+------+--------------------+-----------------+--------------+-----------------+\n| number   | name      | sex  | id_number          | department      | major        | enrollment_time |\n+----------+-----------+------+--------------------+-----------------+--------------+-----------------+\n| 20180104 | 史珍香    | 女   | 141992199701078600 | 计算机学院      | 软件工程     | 2018-09-01      |\n+----------+-----------+------+--------------------+-----------------+--------------+-----------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("因为通过查询"),a("code",[s._v("s1")]),s._v("表，得到了"),a("code",[s._v("'史珍香'")]),s._v("所在的专业其实是"),a("code",[s._v("'软件工程'")]),s._v("，接下来就应该查询"),a("code",[s._v("s2")]),s._v("表了，查询"),a("code",[s._v("s2")]),s._v("表的时候的过滤条件"),a("code",[s._v("s1.major = s2.major")]),s._v("就相当于"),a("code",[s._v("s2.major = '软件工程'")]),s._v("，于是查询到 2 条记录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----------+-----------+------+--------------------+-----------------+--------------+-----------------+\n| number   | name      | sex  | id_number          | department      | major        | enrollment_time |\n+----------+-----------+------+--------------------+-----------------+--------------+-----------------+\n| 20180103 | 范统      | 男   | 17156319980116959X | 计算机学院      | 软件工程     | 2018-09-01      |\n| 20180104 | 史珍香    | 女   | 141992199701078600 | 计算机学院      | 软件工程     | 2018-09-01      |\n+----------+-----------+------+--------------------+-----------------+--------------+-----------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("而我们只需要"),a("code",[s._v("s2")]),s._v("表的"),a("code",[s._v("number")]),s._v("、"),a("code",[s._v("name")]),s._v("、"),a("code",[s._v("major")]),s._v("这 3 个列的数据，所以最终的结果就长这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----------+-----------+--------------+\n| number   | name      | major        |\n+----------+-----------+--------------+\n| 20180103 | 范统      | 软件工程     |\n| 20180104 | 史珍香    | 软件工程     |\n+----------+-----------+--------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"连接查询与子查询的转换-🔥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接查询与子查询的转换-🔥"}},[s._v("#")]),s._v(" 连接查询与子查询的转换 🔥")]),s._v(" "),a("p",[s._v("有的查询需求既可以使用连接查询解决，也可以使用子查询解决，比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT * FROM student_score WHERE number IN (SELECT number FROM student_info WHERE major = '计算机科学与工程');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个子查询就可以被替换：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT s2.* FROM student_info AS s1 INNER JOIN student_score AS s2 WHERE s1.number = s2.number AND s1.major = '计算机科学与工程';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("大家在实际使用时可以按照自己的习惯来书写查询语句。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("小贴士： MySQL 服务器在内部可能将子查询转换为连接查询来处理，当然也可能用别的方式来处理，不过对于我们刚入门的小白来说，这些都不重要，知道这个语句会把哪些信息查出来就好了！")])])])}),[],!1,null,null,null);n.default=t.exports}}]);