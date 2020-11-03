(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1339:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"hystrix"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix"}},[s._v("#")]),s._v(" hystrix")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://cloud.spring.io/spring-cloud-static/spring-cloud-netflix/2.0.4.RELEASE/multi/multi_spring-cloud-netflix.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("本章知识点大部分来自官网"),n("OutboundLink")],1)])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("本文不适合小白，适合有一定基础知识的")])]),s._v(" "),n("p",[s._v("版本交代：")]),s._v(" "),n("ul",[n("li",[s._v("spring boot：2.0.4.RELEASE")]),s._v(" "),n("li",[s._v("spring cloud：Finchley.SR1")])]),s._v(" "),n("p",[s._v("背景：服务之间调用原本使用的是 feign；后来想开启 hystrix 功能；\n根据这个背景来记录后续的一些问题和做法")]),s._v(" "),n("h2",{attrs:{id:"feign-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feign-使用"}},[s._v("#")]),s._v(" feign 使用")]),s._v(" "),n("p",[s._v("添加依赖")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-openfeign'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("开启并扫描指定路径的 feignClient")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableFeignClients")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn.mrcode.cloud.b.*.client.support"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("yml 配置")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("feign")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  httpclient:")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    enabled: true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务名，填写default为所有服务")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("connectTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("readTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("400000")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调用超时，单位毫秒；3.3 * 2 分钟")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("通过以上配置，在 A 服务中就可以通过 feign 调用 b 服务提供的快捷 client\n（b 服务把自己暴露的接口通过 feign client 的方式写成了 jar 包方式，引用后，只要扫描到这个 jar 其他服务就可以使用了）了")]),s._v(" "),n("p",[s._v("这个时候需要查看 a 调用 b 的接口情况，比如：接口耗时、qps ，由于本人从事的工作没有高并发相关的，所以只能想到一些简单的需求，\n其实我就是想看下这些接口调用耗时和调用频率；")]),s._v(" "),n("p",[s._v("那么这个就想到了这段时间正在学习的 hystrix。而 spring boot 提供了 hystrix 的集成")]),s._v(" "),n("h2",{attrs:{id:"hystrix-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-配置"}},[s._v("#")]),s._v(" hystrix 配置")]),s._v(" "),n("p",[s._v("添加依赖")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("compile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-hystrix'")]),s._v("\n···\n\n开启 hystrix\n\n```java\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableHystrix")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("feign 中开启 hystrix")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("feign"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  hystrix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    enabled"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("通过以上配置， feign 在调用时就会使用 hystrix command 去调用接口了；")]),s._v(" "),n("p",[s._v("注：通过以上配置之后，在该项目中都支持 HystrixCommand 相关注解之定义调用了。")]),s._v(" "),n("p",[s._v("关于 HystrixCommand 原生使用请参考 "),n("a",{attrs:{href:"'/cache-pdp/hystrix/084.md'"}},[s._v("亿级流量缓存架构")])]),s._v(" "),n("h2",{attrs:{id:"hystrix-dashboard-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-dashboard-配置"}},[s._v("#")]),s._v(" hystrix-dashboard 配置")]),s._v(" "),n("p",[s._v("添加依赖")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("compile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-hystrix-dashboard'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("compile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"org.springframework.boot:spring-boot-starter-actuator"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("开启 dashborad")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableHystrixDashboard")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("配置")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("management")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("exposure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露所有端点")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hystrix.stream"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露这个断点")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("启动之后访问地址："),n("code",[s._v("http://localhost:80/actuator/hystrix.stream")]),s._v(" ;\n能正常访问，就表示已经可以采集到短路器相关信息了")]),s._v(" "),n("p",[s._v("访问地址："),n("code",[s._v("http://localhost:80/hystrix/")]),s._v(" 可以打开一个豪猪的页面")]),s._v(" "),n("p",[n("img",{attrs:{src:a(671),alt:""}})]),s._v(" "),n("p",[s._v("上面地址栏中输入前面的 hystrix.stream 地址，就可以打开下面这样图的报表了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(672),alt:""}})]),s._v(" "),n("p",[s._v("通过上图观察到，默认配置是按「服务」来划分线程池的，也就是说素有的接口共享一个线程池，每个接口是一个 command；")]),s._v(" "),n("p",[s._v("如果是按照上面的默认配置来执行的话，一个服务怎么可能只会有 10 个线程并发访问？修改这些参数")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hystrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("execution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("isolation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("thread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeoutInMilliseconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("800000")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.6 * 2 分钟")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("threadpool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("allowMaximumSizeToDivergeFromCoreSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("coreSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("maximumSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("maxQueueSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keepAliveTimeMinutes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("上面的配置简单说下：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("timeoutInMilliseconds 超时配置")]),s._v(" "),n("p",[s._v("由于 feign 中配置了 6 分钟，这里要适当配置长一点，因为你配置了等待队列的话，\n饱和之后，就会进入等待队列，到真正执行的时候回检查该 command 是否有超时，\n如果不大一点，刚放出来就已经超时了，不会被执行了")]),s._v(" "),n("p",[s._v("所以使用 hystrix 本人感觉难点就在于调优了，根据测试调优是个难点")])]),s._v(" "),n("li",[n("p",[s._v("threadpool")]),s._v(" "),n("p",[s._v("原生的 hystrix 线程池配置，上面的意思是使用动态的线程池配置，我这里配置了 500 个线程，\n一个服务共享一个线程池， 500 个感觉都有点少")]),s._v(" "),n("p",[s._v("在亿级流量架构里面讲解得时按细粒度控制，每个服务接口来划分的。这里直接按一个微服务划分了")])])]),s._v(" "),n("p",[s._v("最后需要注意的一个坑：ui 上的 Pool Size 需要手动刷新才能看到变化，比如不活跃被销毁了")]),s._v(" "),n("p",[s._v("其他请参考 "),n("RouterLink",{attrs:{to:"/cache-pdp/hystrix/108.html#hystrix-dashboard-含义"}},[s._v("hystrix-dashboard 含义和这里其他的配置注意事项")]),s._v(" "),n("RouterLink",{attrs:{to:"/cache-pdp/hystrix/106.html#配置-withMaximumSize-无效解决"}},[s._v("配置 withMaximumSize 无效解决")])],1),s._v(" "),n("h2",{attrs:{id:"turbine-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#turbine-配置"}},[s._v("#")]),s._v(" turbine 配置")]),s._v(" "),n("p",[s._v("turbine 是聚合多个 hystrix.stream 的封装，在多个实例的微服务中，使用 turbin 才是有用的；")]),s._v(" "),n("p",[s._v("spring-cloud-starter-netflix-turbin 中的前提：")]),s._v(" "),n("ul",[n("li",[s._v("需要依赖 eurake")]),s._v(" "),n("li",[s._v("部署的服务需要能获取到 eurake 的信息，因为默认会通过配置的服务名来从 eurake 中获取具体服务实例的 hystrix.stream 地址")]),s._v(" "),n("li",[s._v("turbine 需要和要监控的服务在同一个 eurake 中")]),s._v(" "),n("li",[s._v("turbine 不能部署在 服务注册中心，服务注册中心一般不会注册在注册中心上（单服务注册中心是这样）")])]),s._v(" "),n("p",[s._v("添加依赖")]),s._v(" "),n("div",{staticClass:"language-groovy line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[s._v("compile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.springframework.cloud:spring-cloud-starter-netflix-turbine'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("通过注解开启支持")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableTurbine")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("项目启动之后，会在控制台中找到 mapping 信息 "),n("code",[s._v("/turbine.stream")]),s._v(" (高版本的 boot 需要配置打印出 controller 的映射路径信息)")]),s._v(" "),n("p",[s._v("访问地址："),n("code",[s._v("http://localhost:80/clusters")]),s._v("，如果能看见以下信息，说明配置没有问题了；")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MRCODE"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"link"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:80/turbine.stream?cluster=MRCODE"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("但是跟着本笔记走的话，肯定是不行的，还需要在 yml 中对 turbine 进行配置")]),s._v(" "),n("p",[s._v("配置需要聚合的微服务")]),s._v(" "),n("div",{staticClass:"language-yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("turbine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("aggregator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从服务注册中心返回的服务名是大写的，如有多个使用数组方式给出；")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 它绑定的配置路径是 org.springframework.cloud.netflix.turbine.TurbineAggregatorProperties#setClusterConfig")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clusterConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MRCODE\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("appConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mrcode\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这个时候随意打开一个仪表盘，如 "),n("code",[s._v("http://localhost:80/hystrix/")]),s._v(" ，填入通过 /clusters 获取到的 link 地址，即可观察该集群信息")])])}),[],!1,null,null,null);t.default=e.exports},671:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190618142007747.69f4d6fd.png"},672:function(s,t,a){s.exports=a.p+"assets/img/markdown-img-paste-20190618142112455.9d0f8ca2.png"}}]);