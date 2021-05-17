---
title: 目录
order: 1
nav:
  title: 手写代码
  path: /components
group:
  title: 手写代码
  path: /手写代码
  order: 1000
---

手写代码

- ES6 的 polyfill 实现
  - 手写 promise，promise.all（如果传入的是普通数值怎么处理）,promise.race,promise.finally
  - 手写数组方法的实现，比如 reduce，flat，unique(复杂数组的去重)，map,isArray，sort
    - 拍平数组
  - 手写字符串方法的实现，比如 repeat，padEnd
  - 手写使用 setTimeOut 实现 setInterval
  - 使用 generator 模拟 async，await 的实现
  - 手写 new，apply，call,bind,instanceof
- 手写工具函数(业务中常用)
  - 手写防抖(Debouncing)，节流(Throtting)，两个的区别
  - 手写深拷贝
  - 手写一个发红包代码
  - 手写一个柯里化函数，比如 add(1)(2)(3)
  - 手写产生 1000 个 6 位随机验证码
  - 手写一个 trim 方法
  - 手写实现千位分隔符
  - 手写寄生组合式继承
- 手写常见的排序和查找方法
  - 快速排序，
  - 二分查找
- 手写设计模式
  - 手写 EventEmitter（eventBus）
- 手写框架原理的实现
  - 手写 redux，vuex
  - 手写 vue
  - 手写 vue 响应式
  - 手写常见组件比如，toast
  - 手写一个 hooks，比如 useSafeState
  - 手写 koa，手写一个 koa 中间件（koa composed 原理）
  - 手写一个 require
  - 手写一个 webpack 的 plugin
  - 实现一个模版引擎
  - 手写实现 react-router
  - 手写实现一个编译器：[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)
- 手写业务代码
  - 手写一个双向数据绑定
  - 手写一个拖拽
  - 手写一个限制并发数的请求函数
  - 画一个时钟，能否用 canvas 实现
  - 封装 fetch，使 fetch 可以传入延时时间
  - 自动生成十六进制随机颜色（有没有更简单的方法（生成 0——FFFFFF）间的一个数，再转 16 进制，怎么转十六进制
  ```
  - const arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  const randomColor = ()=>new Array(6).fill(0).map(i=>arr[(Math.random()*16).toFixed(0)]).join('');
  ```

```
- 手写数据结果
  - 两个栈实现一个队列
```

function repeat(fn, times, wait) {
return async (...args) => {
for(let i=0;i<times;i++){
await new Promise(resolve=>{
setTimeout(()=>{
fn.apply(this,args);
resolve()
},wait)
})
}
};
}
const repeatFunc = repeat(console.log,4,3000);
repeatFunc("hello Horld");//输出四次 hello word,每隔 3 秒

```
- 约瑟夫环（用链表的方式），找到最后一个人的编号
- 从arr[1, n]这n个数中，找出最大的k个数，这就是经典的TopK问题。TOP K 描述思路（为啥不用快排，用堆排）
- 求一个数平方根，保留三位小数
- 将数组对象转换为级联样式
- [给定一个二叉树，想象自己在它右侧所能看到的节点值](https://leetcode-cn.com/problems/binary-tree-right-side-view/)
- 多叉树的广度优先遍历
- 实现一个红包函数，入参是金额m和个数n，返回一个里面有n个元素的数组，元素之和为m
```

//洗牌算法
const shuffe_pick = (arr)=>{
const result = [];
while(arr.length>0){
let rnd = Math.floor(Math.random()_arr.length);
result.push(arr[rnd]);
arr.splice(rnd,1)
}
return result;
}
const randomRange = (min,max)=>{
return parseFloat((Math.random()_(max-min)+min).toFixed(2))
}
const randomRedPackageGenerator=(threshold=0.618)=>{
if(threshold<0||threshold>1){
throw Error('threshold is error');
}
return function(money,count){
let result = [];
for(let i=0;i<count-1;i++){
const value = randomRange(0.01,money\*threshold);
result.push(value);
money = money-value;
}
result.push(parseFloat(money.toFixed(2)));
result = shuffe_pick(result);
return result;
}
}
const redPackage = randomRedPackageGenerator(0.5);

```
- 实现一个函数，输入一个数，输出n个不重复的偶数
```

function random(n){
return new Array(n).fill(null).map((e,i)=>2\*i);
}

```
- 红黄绿三色求，按组排序，输入:[2,0,2,1,1,0],输出：[1,2,0,0,2,2];要求原地调换，空间复杂度为O(1)、时间复杂度尽量最优
- 单调栈，输入：n（楼数），下吗每一行包涵n个数字wi，代表每一栋的高度，输出一行，包涵空格分割的n个数字，分别代表在第i东楼的时候看待的楼的数量
- 给出两个版本号，比较两个版本号的大小，(0.1<1.1.1<1.2<13.37>>)
- 判断一个字符串是否是一个合法的html片段（标签闭合，且嵌套关系正确）

实现js新特性的polyfill写法,比如数组的map,reduce，flat等，Object等

1. `首单享受<hightLight>50<hightLight>元福利`转换成`首单享受<span class="hightLight">50</span>元福利`
2. 合并数组[4,1,3,9,6,2]和[8,5,3,2,1,4,7]，然后去重，取出所有偶数，并从大到小输出
3. 千分制转化，1234567890转换为¥1,234,567,890
```
