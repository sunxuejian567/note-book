(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1471:function(e,t,r){"use strict";r.r(t);var a=r(20),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"容错机制浅析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容错机制浅析"}},[e._v("#")]),e._v(" 容错机制浅析")]),e._v(" "),a("p",[e._v("图解 Elasticsearch 容错机制：master 选举，replica 容错，数据恢复")]),e._v(" "),a("p",[a("img",{attrs:{src:r(580),alt:""}})]),e._v(" "),a("p",[e._v("还是使用上一章的例子，9 shard，3 node 来说明 es 的一个最基本的容错机制")]),e._v(" "),a("ol",[a("li",[e._v("master node 宕机，自动 master 选举，red")]),e._v(" "),a("li",[e._v("replica容错：新 master 将 replica 提升为 primary shard，yellow")]),e._v(" "),a("li",[e._v("重启宕机 node，master copy replica 到该 node，使用原有的 shard 并同步宕机后的修改，green")])])])}),[],!1,null,null,null);t.default=s.exports},580:function(e,t,r){e.exports=r.p+"assets/img/markdown-img-paste-20190101152512479.3216fbda.png"}}]);