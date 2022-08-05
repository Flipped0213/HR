# 人力资源管理系统

## 1.1 简介

人力资源管理系统是一款基于SaaS平台的人力资源管理系统， 企业通过该系统可以完成公司组织架构管理、员工管理、角色管理、权限管理（审批、考勤、社保）等，为企业的人力资源管理提供一站式解决方案。

[vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/) 是一个后台前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。它使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。

[vue-element-admin](http://panjiachen.github.io/vue-element-admin) 是一个后台集成方案, 集成了PC项目中很多的业务场景和功能, 尤其在当下SPA的趋势下,我们可以从中获得很多成熟的解决方案.

这里是[官网地址](https://panjiachen.gitee.io/vue-element-admin-site/zh/)

这里是[线上demo地址](https://panjiachen.github.io/vue-element-admin/#/dashboard)

**`注意`**：[基础模板](https://github.com/PanJiaChen/vue-element-admin.git)，包含了基本的 **登录 / 鉴权 / 主页布局** 的一些基础功能模板, 其他模块是我直接在该模板上进行功能的扩展和项目的二次开发

## 1.2 项目介绍

### 登录模块

Vuex的action的调用以及Axios拦截器的异常处理

![](https://github.com/Flipped0213/HR/blob/main/pic/1.png)

### 主页模块

运用Token的拦截和处理，自定义指令的设计和应用，实现登出功能

![](https://github.com/Flipped0213/HR/blob/main/pic/2.png)

![](https://github.com/Flipped0213/HR/blob/main/pic/2-1.png)

### 组织架构

Element组件的使用

![](https://github.com/Flipped0213/HR/blob/main/pic/3.png)

### 公司和角色



![](https://github.com/Flipped0213/HR/blob/main/pic/4.png)

### 员工管理

![](https://github.com/Flipped0213/HR/blob/main/pic/5.png)

### 权限设计和管理

![](https://github.com/Flipped0213/HR/blob/main/pic/6.png)

### 其他模块（社保、审批、考勤、工资）

社保模块

![](https://github.com/Flipped0213/HR/blob/main/pic/7.png)

审批

![](https://github.com/Flipped0213/HR/blob/main/pic/8.png)

考勤

![](https://github.com/Flipped0213/HR/blob/main/pic/9.png)

工资

![](https://github.com/Flipped0213/HR/blob/main/pic/10.png)

## 项目运行

git拉取项目

```base
$ git clone https://github.com/Flipped0213/HR.git
```

安装项目依赖（定位到项目目录下）

```base
$ npm install  #安装依赖
```

启动项目

```base
$ npm run dev #启动开发模式的服务
```
