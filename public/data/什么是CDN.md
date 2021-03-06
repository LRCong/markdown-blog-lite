# 概述

CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，
依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，
降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术

# 组成

CDN网络中包含的功能实体包括内容缓存设备、内容交换机、内容路由器、CDN内容管理系统等组成。
内容缓存为CDN网络节点，位于用户接入点，是面向最终用户的内容提供设备，可缓存静态Web内容和流媒
体内容，实现内容的边缘传播和存储，以便用户的就近访问。
内容交换机处于用户接入集中点，可以均衡单点多个内容缓存设备的负载，并对内容进行缓存负载平衡及访问控制。 
内容路由器负责将用户的请求调度到适当的设备上。内容路由通常通过负载均衡系统来实现，动态均衡各个内容缓存站点的载荷分配，为用户的请求选择最佳的访问站点，同时提高网站的可用性。内容路由器可根据多种因素制定路由，包括站点与用户的临近度、内容的可用性、网络负载、设备状况等。负载均衡系统是整个CDN的核心。负载均衡的准确性和效率直接决定了整个CDN的效率和性能。 
内容管理系统负责整个CDN的管理，是可选部件，作用是进行内容管理，如内容的注入和发布、内容的分发、内容的审核、内容的服务等。

![image](https://bkimg.cdn.bcebos.com/pic/4610b912c8fcc3ce005c05d19c45d688d53f20b0?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5)