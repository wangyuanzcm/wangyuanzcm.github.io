---
title: 每日一练
nav:
  title: 手写代码
  path: /components
group:
  title: 手写代码
  path: /手写代码
  order: 2
---
## 每日一练

### 2020-01-06 [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)
  - （扩展同理可解合并两个有序链表）
```jsx
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

```
```
- 输入一个int整型数组，数组中的一个或多个连续整数组成一个子数组。求所有子数组中和的最大值。输入的数组中保证至少有一个正数
    ```
    function maxArray(nums){
        let res = -Infinity;
        let sum = nums[0];
        let i = 1;
        while(i<nums.length){
            if(Math.abs(nums[i]-nums[i-1]==1)){
            sum+=nums[i];
            }else{
            sum=nums[i];
            }s
            i++;
            res=Math.max(res,sum);
        }
        return res;
    }
    ```
- [给你两个单词word1和word2，计算将word1转为word2所使用的最小操作数。你可以对一个单词进行如下操作：插入/删除/替换一个字符](https://leetcode-cn.com/problems/edit-distance/)
  ```
  const minDistance=(word1, word2)=> {
  let n1 = word1.length;
  let n2 = word2.length;
  let dp = new Array(n1 + 1);
  for (let i = 0; i < n1 + 1; i++) {
    dp[i] = new Array(n2 + 1).fill(0);
  }
  for (let j = 0; j <= n2; j++) {
    dp[j] = j;
  }
  for (let i = 1; i <= n1; i++) {
    let temp = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n2; j++) {
      let pre = temp;
      temp = dp[j];
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[j] = pre;
      } else {
        dp[j] = Math.min(Math.min(dp[j - 1], pre), dp[j]) + 1;
      }
    }
  }
  return dp[n2];
}
  ```
- [在一个ini型数组中，找出所有符合条件的三元组[a,b,c]，满足a+b+c=0。要求时间复杂度不得超过O(n^2)](https://leetcode-cn.com/problems/3sum/)
    ```
    var threeSum = function (nums) {
  if (nums == null || nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[l] + nums[i] + nums[r];
      if (sum == 0) {
        res.push([nums[l], nums[i], nums[r]]);
        while (l < r && nums[l] == nums[l + 1]) {
          l += 1;
        }
        while (l < r && nums[r] == nums[r - 1]) {
          r -= 1;
        }
        l += 1;
        r -= 1;
      } else if (sum > 0) {
        r -= 1;
      } else {
        l += 1;
      }
    }
  }
  return res;
};
```
- 实现Array.prototype.reduce方法
```
    function myReduce(arr,callback,initValue){
        let flag = !Array.isArray(arr)||arr.length||typeof callback !== "function";
        if(flag)return [];
        let isValue = initValue===0?!initValue:!!initValue;//获取初始值参数
        let reduceValue = isValue?initValue:arr[0];
        for(let index=isValue?0:1;index<arr.length;index++){
            reduceValue = callback(reduceValue,arr[index],index,arr);
        }
        return reduceValue;
    }
```
- 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。输入数据保证，新值和原始二叉搜索树的任意节点值都不同。
```
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    var insertIntoBST = function(root, val) {
        if(root === null){
        return new TreeNode(val);
        }
        let pos = root;
        while(pos!=null){
        if(val<pos.val){
            if(pos.left == null){
            pos.left = new TreeNode(val);
            break;
            }else{
            pos=pos.left;
            }
        }else{
            if(pos.right == null){
            pos.right = new TreeNode(val);
            break;
            }else{
            pos=pos.right;
            }
        }
        }
        return root;
    };
```
- [给你一个按升序排序的整数数组num（可能包涵重复数字），请你把他们分割成一个或多个长度为3的子序列，其中每个子序列都有连续整数组成。如果可以完成分割则返回true，否则返回false](https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers/)

```
  var isPossibleDivide = function (nums, k) {  
  let m=new Map(),min;
  //先对数组排序，然后将数组内容保存进map
  nums.sort((a,b)=>a-b).forEach(v => {
    m.set(v,m.get(v)+1||1);
  });
  // 因为map是有序的，所以可以以插入的顺序去遍历
  while(min=m.keys().next().value){
    for(var i =k;i!=0;i--){
      if(m.has(min)){
        let tmp=m.get(min);
        tmp === 1?m.delete(min):m.set(min,--tmp);
        min++
      }else{
        return false;
      }
    }
  }
  return true;
};
```
- `function a1(next){
  console.log('dosth_a1_before');
  next&&next();
  console.log('dosth_a1_after');
}
function a2(next){
  console.log('dosth_a2_before');
  next&&next();
  console.log('dosth_a2_after');
}
function a3(next){
  console.log('dosth_a3_before');
  next&&next();
  console.log('dosth_a3_after');
}`
按如下顺序输出：
`console.log('dosth_a1_before');
console.log('dosth_a2_before');
console.log('dosth_a3_before');
console.log('dosth_a3_after');
console.log('dosth_a2_after');
console.log('dosth_a1_after');`

```
//这里是koa的compose的原理
function compose(...args){
  let i=0;
  function dispatch(i){
    const fn = args[i];
    if(i<args.length){
      fn(()=>dispatch(++i));
    }
  }
  dispatch(i);
}
```
- 如果有n个接口，需要按接口顺序渲染dom，怎么实现（提供get(id),render(id）方法)
```
function order(ids){
  return ids.map(id=>new Promise((resolve)=>{
    resolve(get(id));
  }))
}
async function renderUI(ids){
  let arr = order(ids);
  for(let i=0;i<ids.length;i++){
    let data = await arr[i];
    render(id,data)
  }
}
```
- 手写一个截取url参数然后生成map关系映射的函数
```
const queryParse = (url)=>{
  return url.substring(url.indexOf('?')+1).split('&').reduce((pre,cur)=>{
    let key = cur.split('=')[0];
    let value = cur.split('=')[1];
    return Object.assign(pre,{[key]:value});
  },{})
}
```
- 实现一个Observer类对指定数据进行劫持
```
//包涵了对数组的处理
class Observer{
  constructor(data){
    this.observe(data);
  }
  observe(data){
    if(typeof data==='object'&&data!==null){
      if(Array.isArray(data)){
        this.observeArray(data);
        for(let val of data){
          this.observe(val);
        }
      }else{
        for(let key in data){
          this.observeObject(key,data,data[key]);
        }
      }
    }
  }
  observeArray(data){
    var _this= this;
    var createObj = Object.create(Array.prototype);
    data.__proto__ = createObj;
    const methodsToPatch = ['push','pop'];
    methodsToPatch.forEach(method=>{
      createObj[method] = function(){
        Array.prototype[method].call(this,...arguments);
        _this.observe(...arguments);
      }
    })
  }
  observeObject(key,data,value){
    Object.defineProperty(data,key,{
      configurable:true,
      enumerable:true,
      get:()=>{
        this.observe(value);
        return value;
      },
      set:(val)=>{
        if(val!==value){
          this.observe(val);
          value=val;
        }
      }
    })
  }
}
```
- 给定一个整数数组nums，找到一个具有最大和的连续子数组（子数组最少包涵一个元素），返回其最大和
```
var maxSubArray = function(nums) {
  let dp = nums[0];
  let max = nums[0];
  for(let i = 1;i<nums.length;i++){
    dp= Math.max(dp+nums[i],nums[i]);
    max=Math.max(max,dp);
  }
  return max;
};

```
- `[{id:1,parentId:0},{id:2,parentId:1},{id:3,parentId:1}]`把这个数组从顶级分类递归查找到子分类，最终构建一个树状数组。结果输出如下：`[{id:1,parentId:0,children:[{id:2,parentId:1},{id:3,parentId:1}]}`,parentId为0的是根节点。

```
function arr2tree(arr){
 return arr.reduce((pre,cur)=>{
   const index = pre.findIndex(e=>e.id==cur.parentId);
    if(index>-1){
      pre[index].hasOwnProperty('children')?pre[index].children.push(cur):pre[index].children=[cur];
    }else{
      pre.push(cur);
    }
    return pre;
 },[])
}
```
- [有两个整数A和B，成员都是数字，现在系统通过如下操作后，每一次操作都从B中选择一个成员替换掉A中的一个成员。经过N次操作后，希望A变成一个递增数组。求N的最小值。例如：输入A=[2,6,4,7,8],B=[2,4,3,5],输出1.](https://leetcode-cn.com/problems/minimum-swaps-to-make-sequences-increasing/)
```
var minSwap = function (A, B) {
  let n1 = 0,
    s1 = 1;
  for (let i = 1; i < A.length; ++i) {
    let n2 = Infinity,
      s2 = Infinity;
    if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
      n2 = Math.min(n2, n1);
      s2 = Math.min(s2, s1 + 1);
    }
    if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
      n2 = Math.min(n2, s1);
      s2 = Math.min(s2, n1 + 1);
    }
    n1=n2;
    s1=s2;
  }
  return Math.min(n1,s1)
};
```
- [这里有一个约定规则，实现一个方法，decodeStr，输入一个字符串，根据约定规则输出编码结果。约定规则如下：str='2[a]1[bc]',返回'aabc',可以看出N[string]表示string正好重复N次。](https://leetcode-cn.com/problems/decode-string/)

```
var decodeString = function(s) {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let result = '';
  for(const char of s){
    if(!isNaN(char)){
      num=num*10+Number(char);
    }else if(char=='['){
      strStack.push(result);
      result='';
      numStack.push(num);
      num=0;
    }else if(char==']'){
      let repeatTimes = numStack.pop();
      result= strStack.pop()+result.repeat(repeatTimes);
    }else{
      result+=char;
    }
  }
  return result;
};
```
- 实现promise.all的polyfill写法。

```

Promises.myAll=(promiseArr)=>{
  return new Promise((resolve,reject)=>{
    const ans = [];
    let index = 0;
    for(let i=0;i<promiseArr.length;i++){
      promiseArr[i].then((res)=>{
        ans[i]=res;
        index++;
        if(index==promiseArr.length){
          resolve(ans);
        }
      }).catch(err=>reject(err));
    }
  })
}
```
- 给定一个指定数组，类似与[1,3,4,9,19],数组数量不定，找出最接近平均数的数字

```
const findAvetageLike = (arr) => {
  let ave = arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
  let res = Infinity;
  let n = 0;
  for (let i of arr) {
    let num = Math.abs(i - ave);
    if (num < res) {
      res = num;
      n = i;
    }
  }
  return n;
};
```

- 给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。说明：叶子节点是指没有子节点的节点。
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};
```

- ['a','b','c','d']转{a:{b:{c:'d'}}}
```
const traverse=(arr)=>{
  return arr.reduceRight((pre,cur)=>{
    if(pre){
      return {[cur]:pre}
    }else{
      return {cur};
    }
  })
}
```

- [在一个N*N的棋盘上，我们可以按以下规则移动棋子：1，起始点是(0,0);2,第一次移动总是到(1,0);3,最多移动N次，每次只能朝上下左右方向移动一个格子，4，不能移动到已经移动过的地方，5，不能移动到棋盘之外。问：对于N*N的棋盘，最多有几种不同的移动方式](https://leetcode-cn.com/problems/unique-paths/)
```
var uniquePaths = function (n) {
  let sum = 0;
  let pathArray = new Array(n).fill(0).map(()=>new Array(n).fill(0));
  pathArray[0][0] = 1;
  function checkPath(x, y, count) {
    if (pathArray[x][y]==1) return;
    if (count === 0) sum++;
    else {
      pathArray[x][y] = 1;
      checkPath( x + 1, y, count - 1);
      checkPath( x, y + 1, count - 1);
      if (x !== 0) {
        checkPath( x - 1, y, count - 1);
      }
      if (y !== 0) {
        checkPath( x, y - 1, count - 1);
      }
      pathArray[x][y] = 0
    }
  }
  checkPath( 0, 1, n - 1);
  return sum;
};
```
- 给定一个字符串，将其打印为三角形。 
```
var traverse = (str)=>{
  let stack = [];
  for(let i=0;str.length>0;i+=2){
    stack.push(str.slice(0,i+1));
    str = str.slice(i+1);
    stack=stack.map((e,index)=>{
      if(index !=stack.length-1){
        return ' '+e+' ';
      }else{
        return e;
      }
    })
  }
  stack.forEach((e)=>{
    console.log(e);
  })
  return stack;
}
const arr = new Array(60).fill(0).map((e,i)=>i).join('');
```
- 写出一个函数trans，将数字转换成汉语输出，输入为不超过1万亿的数字。比如123456转换成十二万三千四百五十六
- [乱序区间合并,输入：`intervals = [[1,3],[2,6],[8,10],[15,18]]`,输出：`[[1,6],[8,10],[15,18]]`](https://leetcode-cn.com/problems/merge-intervals/)
```
var merge = (intervals)=>{
  intervals.sort((a,b)=>a[0]-b[0]);
  for(let i=0;i<intervals.length-1;i++){
    let start = intervals[i][1];
    let end = intervals[i+1][0];
    if(start>=end){
      const data = [...intervals[i],...intervals[i+1]];
      const item = [Math.min(...data),Math.max(...data)];
      intervals.splice(i,2,item);
      i--;
    }
  }
  return intervals;
}
```
- 将一个链表逆序排列
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while(cur){
        const next=cur.next;
        cur.next = pre
        pre=cur;
        cur=next;
    }
    return pre
};
```
- 输入一个正整数数组，如果这个数组可以通过以下两种操作中的一种，使整个数组变成单调递增或递减，则返回最终的单调序列，否则返回-1.这两种操作分别是：1，交换数组中某两个元素的值，2，指定数组中的某个严格子区间，将该区间进行递增或递减排序
```
function testArr(arr,start=0,end=arr.length-1){
  let ascCount = 0;
  let descCount = 0;
  let tempArr=arr.slice(start,end+1);
  let ascResult = Array.from(tempArr).sort((a,b)=>a-b);
  let descResult = Array.from(tempArr).sort((a,b)=>b-a);
  for(let i=0;i<tempArr.length;i++){
    if(ascResult[i]!==tempArr[i]){
      ascCount++;
    }
    if(ascCount>2){
      break;
    }
  }
  if(ascCount<3){
    return ascResult;
  }
  for(let i=0;i<tempArr.length;i++){
    if(descResult[i]!==tempArr[i]){
      descCount++;
    }
    if(descCount>2){
      break;
    }
  }
  if(descCount<3){
    return descResult;
  }
  return -1;
}
console.log(testArr([6,7,2,1,0]));
console.log(testArr([6,1,2,3,0]));
console.log(testArr([6,1,3,2,0]));
console.log(testArr([6,0,3,2,0],1,4));
```
- 实现sum函数，使得sum(1,2,3).sumOf()//6;sum(2,3)(2).sumOf()//7;sum(1)(2)(3)(4).sumOf()//10;
```
function sum(...val){
  const num = val.reduce((p,c)=>p+c,0);
  const fn=(...val)=>{
    return sum(num,...val);
  }
  fn.sumOf=()=>num;
  return fn;
}
```
- [二叉树所有根到叶子路径组成到数字之和。](https://leetcode-cn.com/problems/binary-tree-paths/)
```
var binaryTreePaths = function(root) {
  const paths=[];
  const DFS=(root,path)=>{
    if(root){
      path+=root.val;
      if(root.left == null&&root.right==null){
        paths.push(path);
      }else{
        DFS(root.left,path);
        DFS(root.right,path);
      }
    }
  }
  DFS(root,0)
  return paths;
};
```
[`给定一个数组，最终返回一个二维数组，每个小数组由3个和为0的元素组成。全罗列，例如:[1,0,-1,1,2,-1,-4]输出[[-1,0,1],[-1,-1,2]];`](https://leetcode-cn.com/problems/3sum/)
```
var threeSum = function(nums) {
    if(nums==null||nums.length<3) return [];
    nums.sort((a,b)=>a-b)
    let len = nums.length;
    let res = [];
    for(let i=0;i<len;i++){
        if(nums[i]>0)  break;
        if(i>0&&nums[i]==nums[i-1]) continue;
        let l = i+1;
        let r=len-1;
        while(l<r){
            const sum = nums[l]+nums[i]+nums[r]
            if(sum==0){
                res.push([nums[l],nums[i],nums[r]]);
                while(l<r&&nums[l]==nums[l+1]){
                    l+=1;
                }
                while(l<r&&nums[r]==nums[r-1]){
                    r-=1;
                }
                l+=1;
                r-=1;
            }else if(sum>0){
                r-=1;
            }else{
                l+=1;
            }
        } 
    }
    return res

};

```
- [求一个数平方根，保留三位小数。](https://leetcode-cn.com/problems/sqrtx/);
```
const sqrt=(num)=>{
  if(num<0) throw Error('输入数值必须是个正数');
  let temp = 0;
  //处理输入值小于1的情况
  if(num<1) {
    while(num<1){
      temp+=2;
      num*=100;
    }
  }
  temp=Math.pow(10,temp/2);
  let low = 0;
  let high = num;
  let mid = low+(high-low)/2;
  while(high-low>0.0000001){
     if(Math.abs(mid*mid-num)<0.0000001){
      return (mid/temp).toFixed(3);
    }else if(mid*mid>num){
      high=mid;
    }else if(mid*mid<num){
      low = mid;
    }
    mid=low+(high-low)/2; 
  }
  return (mid/temp).toFixed(3)
}
console.log(sqrt(0.04))
```
- 斐波那契数列大数相加

- 某前端团队的技术分享两周一次，一次两人，为了确定下一次是谁来分享，团队中引入分享积分制，具体规则为：
    - 每个人都有一个积分，初始值为0
    - 每一次分享后所有人要一轮骰子，点数做为积分累加到格子积分中，骰子点数为1-12
    - 积分最高的两个人作为下一次的分享人
    - 为了避免连续分享，某个人分享后它的积分会被清零，并且跳过本次的摇骰子环节，
    - 如果积分最高的人数超过两个人，则相同分数的人继续摇骰子，直至决出2个积分最高的人，此时的积分继续累计
  请编写代码模拟这个过程。
  ```
  class share {
  constructor(data){
    this.personList=data;
  }
  getHiger(end){
    //如果参与摇骰子人数少于两人，直接退出
    if(end<2)return;
    //给每个人随机积分，从1到12;
    for(let i=0;i<end;i++){
      this.personList[i].value+=Math.ceil(Math.random()*12);
    }
    //按照积分进行排序，并且返回一个新的数组
    let res = this.personList.splice(0,end).sort((a,b)=>b.value-a.value);
    Array.prototype.unshift.apply(this.personList,res);
    //不管几个人积分相等，实际上只需要判读第二个和第三个积分是否相等,都需要重新摇骰子。
    if(this.personList[2].value==this.personList[1].value){
      //查找积分相同的人的位置
      let i =3;
      while(1){
        if(i==this.personList.length)break;
        if(this.personList[i].value!==this.personList[i-1].value){
          break;
        }else{
          i++;
        }
      }
      //对于最高积分相同的人重复摇骰子的过程
      return this.getHiger(i);
    }else{
      //将第一个和第二个人的积分置空
      this.personList[0].value=0;
      this.personList[1].value=0;
      return;
    }
  }
  wholsNext(){
    this.getHiger(this.personList.length);
    return [this.personList[0].name,this.personList[1].name];
  }
}

let b=[
  {name:"a",value:0},
  {name:"b",value:0},
  {name:"c",value:0},
  {name:"d",value:0},
  {name:"e",value:0},
  {name:"f",value:0},
  {name:"g",value:0},
  {name:"h",value:0},
  {name:"i",value:0},
  {name:"j",value:0},
]
let a = new share(b);
console.log(a.wholsNext());
console.log(a.wholsNext());
console.log(a.wholsNext());
console.log(a.wholsNext());
console.log(a.wholsNext());
console.log(a.wholsNext());
  ```
- 任意两个给定区间，写一个函数isOverlapped，判断这两个区间是否有重叠，(不存在非法数据，区间都是闭区间)
```
  function isOverlapped(first,second){
    if(first.end<second.start||first.start>secode.end){
      return false
    }else{return true};
  }
```
- 手写代码实现一个react-hook，reactSafeState，用于组件卸载后异步请求返回数据设置state报错的解决。
```
import {useState,useRef,useEffect}from 'react';
function useSafeState(initialState){
    const [state,setState] = useState(initialState);
    //使用ref存放一个变量
    const unmountedRef = useRef(false);
    useEffect(()=>{
        return ()=>{
            //useEffect 中return的函数表示componentWillUnmounted周期
            unmountedRef.current = true;
        }
    },[])
    const setCurrentState = (currentState)=>{
        // 当变量变为true的时候直接return
        if(unmountedRef.current) return;
        setState(currentState)
    }
    return [state,setCurrentState];
}
export default useSafeState;
```
- 实现一个LazyMan,可以按照以下方式调用：
  输入：LazyMan('Hank')
  输出：Hi!This is Hanl!
  输入：LazyMan('Hank).sleep(10).eat('dinner')
  输出：Hi!This is Hanl!(等待10s)wake up after 10；Eat dinner~
  输入：LazyMan('Hank).sleep(10).eat('dinner').eat('supper')
  输出：Hi!This is Hanl!(等待10s)wake up after 10；Eat dinner~;Eat supper~
  输入：LazyMan('Hank).sleepFirst(5).eat('supper')
  输出：(等待5s)wake up after 5；Hi!This is Hanl!Eat supper~
```

class LazyMan{
  constructor(name){
    this.queue = [];
    this.name = name;
    this.sayName()
    Promise.resolve().then(()=>{
      let sequence = Promise.resolve();
      this.queue.forEach(item => {
          sequence = sequence.then(item);
      });
    })
  }
  sayName(){
    this.queue.push(()=>{
      console.log(`Hi!this is ${this.name}`)
    })
    return this;
  }
  eat(str){
    this.queue.push(()=>{
      console.log(`Eat ${str}`);
    })
    return this;
  }
  sleepFirst(time){
    this.queue.unshift(this._holdOn(time))
    return this;
  }
  sleep(time){
    this.queue.push(this._holdOn(time))
    return this;
  }
  _holdOn(time){
    return ()=>new Promise((resolve)=>{
      setTimeout(()=>{
        console.log(`wake up after ${time}`);
        resolve()
      },time*1000);
    })
  }
}
const newLazyMan = (name)=>new LazyMan(name);
newLazyMan('Hank').sleepFirst(10).eat('dinner').eat('supper')
```
- 任意两个日期，填满中间日期，如[2020-04-01,2020-04-05]=>2020-04-01,2020-04-02,2020-04-03,2020-04-04,2020-04-05
```
const format=(stamp)=>{
  let date = new Date(stamp);
  let month = date.getMonth()+1;
  let day = date.getDate();
  return date.getFullYear()+'-'+(month>=10?month:'0'+month)+'-'+(day>=10?day:'0'+day);
}
const fillDates=(a,b)=>{
  const result = []
  let startStamp = new Date(a).getTime();
  let endStamp = new Date(b).getTime();
  while(startStamp<=endStamp){
    result.push(format(startStamp));
    startStamp+=24*3600*1000;
  }
  return result;
}
```
