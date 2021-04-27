---
title: 目录
nav:
  title: 手写代码
  path: /components
group:
  title: 手写代码
  path: /手写代码
  order: 2
---


Demo:

```tsx
import React from 'react';
import { Coding } from 'hiker-blog';

export default () => <Coding title="First Demo" />;
```

1. 手写代码

- ES6的polyfill实现
  - 手写promise，promise.all,promise.race,
  - 手写数组方法的实现，比如reduce，flat，unique，map
  - 手写使用setTimeOut实现setInterval
  - 使用generator模拟async，await的实现
- 手写工具函数
  - 手写防抖(Debouncing)，节流(Throtting)
  - 手写深拷贝
  - 手写一个发红包代码6位随机验证码
  - 手写产生1000个
- 手写常见的排序
  - 快速排序，
- 手写设计模式
  - 手写EventEmitter
- 手写框架原理的实现
  - 手写redux，vuex
  - 手写vue
  - 手写常见组件比如，toast
  - 手写一个hooks，比如useSafeState
  - 手写koa，手写一个koa中间件
  - 手写一个require
  - 手写一个webpack的plugin
- 手写业务代码
  - 手写一个双向数据绑定
  - 手写一个拖拽
  - 手写一个限制并发数的请求函数


实现一个trim方法
实现一个deepClone方法
实现 add(1)(2)(3)
大数相加
拍平数组
实现防抖函数
实现节流函数
实现字符串翻转
数组去重
实现千位分隔符
判断是否是回文数
实现一个模板引擎
判断一个数是否是素数
获取n以内所有的素数
Promise.all实现
Promise.race实现
Promise.prototype.finally实现
Promise限制异步并发数