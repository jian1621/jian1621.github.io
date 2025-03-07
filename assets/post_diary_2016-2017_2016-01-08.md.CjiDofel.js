import{_ as r,c as a,o as t,ag as l}from"./chunks/framework.BVgKs9HZ.js";const g=JSON.parse('{"title":"登陆用户权限设置","description":"主要是介绍了RBAC协议","frontmatter":{"title":"登陆用户权限设置","date":"2016-01-08T21:04:50.000Z","categories":"学习","tags":["一日一记，权限架构"],"description":"主要是介绍了RBAC协议"},"headers":[],"relativePath":"post/diary/2016-2017/2016-01-08.md","filePath":"post/diary/2016-2017/2016-01-08.md"}'),o={name:"post/diary/2016-2017/2016-01-08.md"};function i(n,e,h,c,s,p){return t(),a("div",null,e[0]||(e[0]=[l('<p><strong>文章引用</strong></p><blockquote><p>用户权限是桌面应用/web应用/app应用等设计的第一步，为了更好的理解权限的设计，特意搜集了些资料。引用文章如下：</p><ul><li><a href="http://www.cnblogs.com/yukaizhao/archive/2007/04/15/user_role_action_permission.html" target="_blank" rel="noreferrer">用户权限设计思路1</a></li><li><a href="http://jyk.cnblogs.com/jyk/archive/2009/06/12/1501896.html" target="_blank" rel="noreferrer">用户权限设计思路2</a></li><li><a href="http://www.cnblogs.com/leoxie2011/archive/2011/05/19/2050626.html" target="_blank" rel="noreferrer">用户权限设计思路3</a></li><li><a href="http://rongxh2010.iteye.com/blog/930648" target="_blank" rel="noreferrer">用户权限设计思路4</a></li><li><a href="http://www.cnblogs.com/leoxie2011/archive/2011/05/19/2050626.html" target="_blank" rel="noreferrer">RBAC模型的介绍</a></li><li><a href="http://blog.csdn.net/ms_x0828/article/details/7035956" target="_blank" rel="noreferrer">RBAC96模型的介绍1</a><strong>有概念图</strong></li><li><a href="http://blog.csdn.net/liujiahan629629/article/details/23128651" target="_blank" rel="noreferrer">RBAC96模型的介绍2</a><strong>有概念图</strong></li><li><a href="http://www.doc88.com/p-3731028784518.html" target="_blank" rel="noreferrer">基于RBAC模式权限管理系统的设计与实现</a> <strong>毕业论文</strong></li><li><a href="http://www.mamicode.com/info-detail-68740.html" target="_blank" rel="noreferrer">别人整理的RBAC知识点</a></li></ul></blockquote><h3 id="rbac模型" tabindex="-1">RBAC模型 <a class="header-anchor" href="#rbac模型" aria-label="Permalink to &quot;RBAC模型&quot;">​</a></h3><p>RBAC(Role-Based-Access-Control)基于角色的访问控制模型</p><h4 id="rbac0" tabindex="-1">RBAC0: <a class="header-anchor" href="#rbac0" aria-label="Permalink to &quot;RBAC0:&quot;">​</a></h4><p>用户&lt;-&gt;角色&lt;-&gt;权限，即为了避免权限&lt;-&gt;用户太直接应用所带来的繁琐，通过加入一个角色作为索引来缓冲,使的权限分配更加灵活。用户通过赋予其的角色身份来获取角色的权限,从而简化了权限的管理。角色和权限是多对多的关系。这是RBAC0的基本内容,也是RBAC的核心所在,其概念图如下: <img src="http://ww2.sinaimg.cn/thumbnail/006lPiqbjw1ezpmvvkcwij30fm0c8q3h.jpg" alt="RBAC0的概念图"> 这个图中其实可以简化成三个表。</p><h4 id="rbac1" tabindex="-1">RBAC1: <a class="header-anchor" href="#rbac1" aria-label="Permalink to &quot;RBAC1:&quot;">​</a></h4><p>在RBAC0的基础上增加了角色的分层，即角色有上下级的区别，存在继承包含的关系。</p><h4 id="rbac2" tabindex="-1">RBAC2: <a class="header-anchor" href="#rbac2" aria-label="Permalink to &quot;RBAC2:&quot;">​</a></h4><p>在RBAC0的基础上增加了约束原则,引入了SSD(静态职责分离)和DSD(动态职责分离)。SSD比如角色之间具有互斥性,同一种权限不能分配给两个角色，或某级别角色的分配数量可控制，先决条件约束。DSD略。</p><h4 id="rbac3" tabindex="-1">RBAC3: <a class="header-anchor" href="#rbac3" aria-label="Permalink to &quot;RBAC3:&quot;">​</a></h4><p>在RBAC0的基础上，增添RBAC1和RBAC2的功能。</p><h3 id="常用到的权限管理内容" tabindex="-1">常用到的权限管理内容 <a class="header-anchor" href="#常用到的权限管理内容" aria-label="Permalink to &quot;常用到的权限管理内容&quot;">​</a></h3><ul><li>菜单管理：不同角色的用户显示不同的菜单</li><li>功能管理：增删查改的权限不同</li><li>授权管理：直接对用户授权，可以将用户和权限连接起来，可以对用户进行角色升级/降级等。 <a href="http://www.cnblogs.com/rodney/archive/2011/06/19/2084531.html" target="_blank" rel="noreferrer">权限具体案例1</a><a href="http://www.cnblogs.com/wuhuacong/archive/2011/05/08/2040620.html" target="_blank" rel="noreferrer">权限具体案例2</a></li></ul><h3 id="后续学习" tabindex="-1">后续学习： <a class="header-anchor" href="#后续学习" aria-label="Permalink to &quot;后续学习：&quot;">​</a></h3><p><a href="http://www.cnblogs.com/RGogoing/p/4495081.html" target="_blank" rel="noreferrer">MySql的权限管理</a><a href="http://blog.csdn.net/wengyupeng/article/details/5844878" target="_blank" rel="noreferrer">spring框架下的acegi权限控制1</a><a href="http://wenku.baidu.com/view/e1283e7102768e9951e73822.html?re=view" target="_blank" rel="noreferrer">spring框架下的acegi权限控制2</a></p>',16)]))}const d=r(o,[["render",i]]);export{g as __pageData,d as default};
