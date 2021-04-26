---
nav:
  title: 手写代码
  path: /components
---

## Foo

Demo:

```tsx
import React from 'react';
import { Exercise } from 'hiker-blog';

export default () => <Exercise title="First Demo" />;
```
每日一练：

- [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)
  - 合并两个有序链表,合并两个链表
  ```
  function merge(nums1,m,nums2,n){
      let index1 =m-1;
      let index2 = n-1;
      let tail = m+n-1;
      while(index2>=0){
          if(nums1[index1]>nums2[index2]){
              nums1[tail] = nums1[index1];
              index1--;
              tail--
          }else{
              nums1[tail]= nums2[index2];
              index2--;
              tail--
          }
      }
  }
  ```
- [统计所有小于非负整数 n 的质数的数量](https://leetcode-cn.com/problems/count-primes/)
  ```
  var countPrimes = function(n) {
  if(n<=2) return 0;
      let filter = new Array(n).fill(1);
      let res = 0;
      for(let i=2;i<n;i++){
          if(filter[i]){
              res++;
              for(let j=i*i;j<n;j+=i){
                  filter[j]=0;
              }
          }
      }
      return res;
  };
  ```
- [编写一个算法题来判断一个数 n 是不是快乐数](https://leetcode-cn.com/problems/happy-number/)
  ```
  const isHappy = (n) => {
      var store = {};
      while (!store[n] && n != 1) {
          store[n] = n;
          n.toString().split('').forEach((v,i) => {
              if(i==0)n=0;
              n+=v*v;
          });
          n=parseInt(n);
      }
      return n==1;
  };
  ```
- [将数组中元素向右移动 k 个位置](https://leetcode-cn.com/problems/rotate-array/)
  （要求空间复杂度为 O(1)）
  ```
  //两个位置之间的元素反转
    let reverse = function(nums,start,end){
        while(start<end){
            [nums[start++],nums[end--]] = [nums[end],nums[start]];
        }
    }
    let rotate = function(nums,k){
        k%=nums.length;
        reverse(nums,0,nums.length-1);
        reverse(nums,0,k-1);
        reverse(nums,k,nums.length-1)
    }
  ```
- [原地移除数组中所有数值为 val 的元素，并且返回新的数组长度](https://leetcode-cn.com/problems/remove-element/solution/)
  ```
    var removeElement=(nums,val)=>{
        let left = 0;
        let right = nums.length;
        while(left<right){
            if(nums[left] === val){
                nums[left] = nums[right-1];
                right--;
            }else{
                left++
            }
        }
        return left;
    }
  ```
- [给定一个正整数，返回它在 Excel 表中对应的列的名称](https://leetcode-cn.com/problems/excel-sheet-column-title/)
  ```
    var convertToTitle = (n)=>{
        if(n<=0) return n;
        let res = [];
        while(n){
            let remain = n%26?n%26:26;
            res.unshift(String.fromCharCode(remain+64));
            n=Math.floor((n-remain)/26)
        }
        return res.join("")
    }
  ```
- 实现 12345678.002345 -> 12,345,678.002345
  ```
  const toThounsands = (num)=>{
    [num1,num2] = String(num).split(".")
    return (
        num1.toString().replace(/,/g,"").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")+`.${num2}`
    )
  }
  ```
- 用 css 实现一个开关样式，hover 时触发，滑块为正方形，具体大小随意
  ```
  <style>
        .btn{
            position: relative;
            height: 32px;
            background-color: #dddddd;
            border:4px solid #ddd;
            transition: .3s linear;
            cursor: pointer;
        }
        .btn:after{
            position: absolute;
            left: 0;
            top: 0;
            width: 30px;
            height: 100%;
            background-color: #fff;
            content: "";
            transition: .3s linear;
        }
        .btn:hover{
            background-color: green;
            border: 4px solid green;
        }
        .btn:hover:after{
            left: 100%;
            transform: translate3d(-100%,0,0);
        }
    </style>
    <div class="btn"></div>
  ```
- 实现数组里找任意两个数相加值为一个目标值的算法（输入下标），如：[2,4,5,7,6] target=8,最终输出为`[[0,3],[4,5]]`
  ```
  const twoSum=(nums,target)=>{
    const map=new Map();
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            result.push([map.get(nums[i]),i])
        }else{
            map.set(target-nums[i],i);
        }
    }
    return result;
  }
  ```
- 通用的版本规范格式为"{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}",其中 rc>beta>alpha,实现 compare 方法比较两个版本号的大小。

  ```
  const compare = (s1,s2)=>{
    let arr1 = s1.replace("-",".").replace("alpha","1").replace("beta","2").replace("rc","3").split(".");
    let arr2 = s2.replace("-",".").replace("alpha","1").replace("beta","2").replace("rc","3").split(".");
    let p=0;
    while(p<Math.max(arr1.length,arr2.length)){
        if(arr1[p]=== undefined){
            return 1;
        }else if(arr2[p] === undefined){
            return -1;
        }

        const res = arr1[p]-arr2[p];
        if(res!==0) return res>0?1:-1;
        p++;
    }
    return 0;
  }
  ```

- 1000 个 6 位长度的纯数字验证码，数组形式输出
  ```
  const range = (len)=>Array.from({length:len},(_,i)=>(Math.random()*1000000|0).toString().padEnd(6,'000000'))
  ```
- 手写一个 xiaotuofeng-mingming-shezhi 改成驼峰式 xiaotuofengMingmingShezhi

  ```
  const transform = (str)=> str.replace(/-\w/g,v=> v[1].toUpperCase())

  ```

- 实现一个 EventEmitter，支持 trigger，once，on，off 方法
  ```
  class EventEmitter{
    constructor(){
        this.eventQueue={}
    }
    on(eventName,callback){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].push(callback);
        }else{
            this.eventQueue[eventName] = [callback]
        }
    }
    off(eventName){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName] = null;
        }else{
            return;
        }
    }
    once(eventName,callback){
        let fn =()=>{
            callback()
            this.off(eventName);
        }
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].push(fn);
        }else{
            this.eventQueue[eventName] = [fn];
        }
    }
    trigger(eventName){
        if(this.eventQueue[eventName]){
            this.eventQueue[eventName].forEach(item => item());
        }else{
            console.log(`${eventName} is not defined`)
        }
    }
  }
  ```
- 手写模拟红绿灯，红灯 3s，绿灯 2s，黄灯 1s，无限循环（async await）

  ```
    const red = ()=>console.log('红灯');
    const yellow = ()=>console.log('黄灯');
    const green =()=>console.log('绿灯');

    const light = (color)=>(time)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                color();
                resolve()
            },time)
        })
    }
    const fn = async()=>{
        await light(red)(3000);
        await light(yellow)(2000);
        await light(green)(1000);
        await fn()
    }
    fn()
  ```

- abacba 转成 aaa,bb,c

```
const splitString = (str)=>{
    let map = {}
    str.split('').map((e)=>{
        if(map[e]){
            map[e]+=e;
        }else{
            map[e] = e;
        }
    });
    return Object.values(map).join(',')
}
```

- [ ] 使用 js 实现一个双向链表，并实现其节点新增（add）,删除（remove）操作方法
  ```
  function listNode(value){
    this.value = value;
    this.next = null;
    this.prev= null;
  }
  class List{
    constructor(){
        this.HeadList = new listNode(null);
        this.LastList = this.HeadList;
    }
    add(node){
        node.prev = this.LastList;
        this.LastList.next = node;
        this.LastList = node;
        this.LastList.next = null;
    }
    remove(value){
        let temp = this.HeadList;
        if(temp.value===value){
            this.HeadList = this.HeadList.next;
        }else{
            let tempNext = this.HeadList.next;
            while(tempNext !== null){
                if(tempNext.value == value){
                    temp.next = tempNext.next;
                    tempNext.next.prev = temp;
                    tempNext = null;
                    break;
                }else{
                    tempNext = tempNext.next;
                }
            }
        }
    }
  }
  ```
- 函数实现一个大位数乘法，可以算出诸如`18832343423525314513*34953852457234765238495`的结果
  ```
  function largeMultiplication(a,b){
    if(a===0||b===0) return 0;
    let aStr = String(a);
    let bStr = String(b);
    let m= aStr.length;
    let n = bStr.length;
    let res = new Array(m+n).fill(0);
    for(let i=m-1;i>=0;i--){
        let x = +aStr[i];
        for(let j =n-1;j>=0;j--){
            let y = +bStr[j];
            const sum = res[i+j+1] +x*y;
            res[i+j+1] = sum%10;
            res[i+j] +=sum/10|0;
        }
    }
    while(res[0] == '0'){
        res.shift();
    }
   return res.length?Number(res.join('')):0;
  }
  ```
- 实现斐波那契数列加到 10000，注意爆栈和超过数字范围限制的问题。
  ```
  function add(a,b){
    let num1 = String(a);
    let num2 = String(b);
    let i = num1.length-1;
    let j = num2.length-1;
    let temp = 0;
    let res = [];
    while(i>=0||j>=0||temp!=0){
        let x = i>=0?num1[i]-'0':0;
        let y = j>=0?num2[j]-'0':0;
        let add = x+y+temp;
        res.push(add%10);
        temp = Math.floor(add/10);
        i-=1;
        j-=1;
    }
    return res.reverse().join('');
  }
  function fibo(n){
    if(n==0) return n;
    if(n==1) return 1;
    let a=0,b=1,sum;
    for(let i=0;i<n-1;i++){
        sum = add(a,b);
        a=b;
        b=sum;
    }
    return b;
  }
  ```
- 在无限的整数序列 1，2，3，...，中找到第 n 个数字，注意 n 为正数，且在 32 位整形范围内，（n<231）
  ```
  function getIndexToNum(n) {
    if (n < 10) return n;
    let num = 10;
    let res = "10";
    n -= 10;
    while (n) {
        console.log(res, "res");
        n--;
        res = res.slice(1);
        if (!res) {
        num++;
        res = num.toString();
        }
    }
    return res[0];
  }
  ```
- 实现一个函数模拟除法，用括号把无限循环小数扩起来，例如1/3=0.33333，该函数需要返回`0.(3)`