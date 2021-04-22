export const data = [
    {
      title: "call",
      body: `Function.prototype.call = function (context, ...args) {
                if (typeof this !== "function") {
                  throw new Error("is no function");
                }
                let context = context ? context : window;
                context["fn"] = this;
                let res = context["fn"](...args);
                delete context["fn"];
                return res;
              };`,
    },
    {
      title: " apply",
      body: `Function.prototype.apply = function (context, args) {
                if (typeof this !== "function") {
                  throw new Error("not function");
                }
                let context = context || window;
                context["fn"] = this;
                let res = context["fn"](...args);
                delete context["fn"];
                return res;
              };`,
    },
    {
      title: " bind",
      body: `Function.prototype.bind = function (context, ...args) {
                if (typeof this !== 'function') {
                    throw TypeError('holp caller is functiom')
                }
                let _self = this;
                let context = context || window;
                retrun (...args2)=> {
                    _self.call(context, ...args, ...args2);
                }
            }`,
    },
    {
      title: "instanceof",
      body: `function instance(left, right) {
                let left = left._proto_;
                let right = right.prototype;
                while (true) {
                  if (left === null) return false;
                  if (left === right) return true;
                  left = left._proto_;
                }
              }`,
    },
    {
      title: "Object.create",
      body: `function create(obj) {
                function F() {}
                F.prototype = obj;
                return new F();
              }`,
    },
    {
      title: "new",
      body: `function myNew(fn, ...args) {
                let obj = {};
                obj._proto_ = fn.prototype;
                let res = fn.call(obj, ...args);
                return typeof res === "object" ? res : obj;
              }`,
    },
    {
      title: "深拷贝",
      body: `function clone(target, map = new Map()) {
                if (typeof target === "object") {
                  let cloneTarget = Array.isArray(target) ? [] : {}; //考虑数组
                  if (map.has(target)) {
                    //考虑循环引用
                    return target;
                  }
                  map.set(target, cloneTarget);
                  for (let key in target) {
                    cloneTarget[key] = clone(target[key], map);
                  }
                  return cloneTarget;
                } else {
                  return target;
                }
              }`,
    },
    {
      title: "防抖",
      body: `function debond(callback, delay) {
                let timer = null;
                return function () {
                  if (timer) {
                    clearTimeout(timer);
                  }
                  timer = setTimeout(() => {
                    callback.apply(this, arguments);
                    timer = null;
                  }, delay);
                };
              }`,
    },
    {
      title: "节流",
      body: `function throttle(callback, delay) {
                let timer = null;
                return function () {
                  if (!timer) {
                    timer = setTimeout(() => {
                      callback.apply(this, arguments);
                      timer = null;
                    }, delay);
                  }
                };
              }`,
    },
    {
      title: "函数柯里化",
      body: `// 函数参数定长
            function add(a, b, c, d) {
              return [...arguments].reduce((a, b) => a + b);
            }
            function add(a, b, c, d) {
              return [...arguments].reduce((a, b) => a + b);
            }
            function currying(fn) {
              let len = fn.length;
              let args = [];
              return function _c(...newArgs) {
                // 合并参数
                args = [...args, ...newArgs];
                // 判断当前参数集合args 的长度是否< 目标函数fn 的需求参数长度
                if (args.length < len) {
                  // 继续返回函数
                  return _c;
                } else {
                  // 返回执行结果
                  return fn.apply(this, args.slice(0, len));
                }
              };
            }
            // 函数参数个数不定长;
            function add(...args) {
              return args.reduce((a, b) => a + b);
            }
            function currying(fn) {
              let args = [];
              return function _c(...newArgs) {
                if (newArgs.length) {
                  args = [...args, ...newArgs];
                  return _c;
                } else {
                  return fn.apply(this, args);
                }
              };
            }
            let addCurry = currying(add)
            // https://www.imooc.com/article/302720?block_id=tuijian_wz`,
    },
    {
      title: "trim",
      body: `function trim(str) {
                // your implement
                str = str.replace(/(^\s*)|(\s*$)/g, ""); //用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
                //空格开头或者空格结尾
                // ^是开始
                // \s 是空白
                // *表示0 个或多个
                // |是或者
                // $是结尾
                // g 表示全局
                return str;
              }
              function simpleTrim(str) {
                // your implement
                if (str.charAt(0) == " " || str.charAt(str.length - 1) == " ") {
                  str = str.replace(" ", "");
                  str = simpleTrim(str);
                }
                return str;
              }
              // 使用示例
            var str = " hi! ";
            str = simpleTrim(str);
            console.log(str); // 'hi!'`,
    },
    {
      title: "reduce",
      body: `Array.prototype.myReduce = function (callback, initialVal) {
                const arr = this;
                let base = initialVal == null ? 0 : initialVal;
                let startPoint = initialVal == null ? 0 : 1;
                for (let i = 0; i < arr.length; i++) {
                  base = callback(base, arr[i], i + startPoint, arr);
                }
                return base;
              };`,
    },
    {
      title: "简版Promise",
      body: `class MyPromise {
                constructor(fn) {
                    this.resolvedCallbacks = [];
                    this.rejectedCallbacks = [];
                    this.state = 'PENDING';
                    this.value = '';
                    fn(this.resolve.bind(this), this.reject.bind(this));
                }
                resolve(value) {
                    if (this.state === 'PENDING') {
                        this.state = 'RESOLVED';
                        this.value = value;
                        this.resolvedCallbacks.map(cb => cb(value));
                    }
                }
                reject(value) {
                    if (this.state === 'PENDING') {
                        this.state = 'REJECTED';
                        this.value = value;
                        this.rejectedCallbacks.map(cb => cb(value));
                    }
                }
                then(onFulfilled, onRejected) {
                    if (this.state === 'PENDING') {
                        this.resolvedCallbacks.push(onFulfilled);
                        this.rejectedCallbacks.push(onRejected);
                    } i
                    f(this.state === 'RESOLVED') {
                        onFulfilled(this.value);
                    } i
                    f(this.state === 'REJECTED') {
                        onRejected(this.value);
                    }
                }
            }
            // https://mp.weixin.qq.com/s/yWOPoef9ixuSBWApZQhjIg`,
    },
    {
      title: "Promise.all",
      body: `   // all 方法返回一个promise 对象，当数组里所有的promise 状态都变成resolved时，返回的promise 对象会以数组的形式返回每个promise resolve 后的结果，当任何一个promise 状态变成reject 时，则返回promise 对应的错误信息
            Promise.prototype.all = function (promises) {
                return new Promise((resolve, reject) => {
                    let result = [];
                    let index = 0;
                    let len = promises.length;
                    if (len === 0) {
                        resolve(result);
                        return;
                    }
                    for (let i = 0; i < len; i++) {
                        // 为什么不直接promise[i].then, 因为promise[i]可能不是一个promise
                        Promise.resolve(promise[i])
                            .then((data) => {
                                result[i] = data;
                                index++;
                                if (index === len) resolve(result);
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    }
                });
            };`,
    },
    {
      title: "Promise.race",
      body: ` //race 返回一个promise 对象，一旦数组中的某个promise 对象resolved 或rejected，返回的promise 对象就会resolve 或reject 相应的值
            Promise.prototype.race = function (proArr) {
                return new Promise((resolve, reject) => {
                    for (const item of proArr) {
                        Promise.resolve(item)
                            .then((res) => {
                                resolve(res);
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    }
                });
            };`,
    },
    {
      title: "完整版Promise",
      body: `class MyPromise {
                constructor(handle) {
                    if (typeof handle !== 'function') {
                        console.log('参数应该是function')
                    }
                    this._status = PENDING
                    this.succvalue = ''
                    this.errval = ''
                    this.resolvecallback = []
                    this.rejectcallback = []
                    let _resolve = (val) => {
                        const run = () => {
                            this.value = val
                            while (this.resolvecallback.length) {
                                let cb = this.resolvecallback.shift()
                                cb(val)
                            }
                        }
                        setTimeout(() => {
                            if (this._status != 'PENDING') return
                            if (this._status == 'PENDING') this._status = FULFILLED
                            run(val)
                        })
                    }
                    let _reject = (val) => {
                        const run = () => {
                            this.value = val
                            while (this.rejectcallback.length) {
                                let cb = this.rejectcallback.shift()
                                cb(val)
                            }
                        }
                        setTimeout(() => {
                            if (this._status != 'PENDING') return
                            if (this._status == 'PENDING') this._status = REJECTED
                            run(val)
                        })
                    }
                    handle(_resolve, _reject)
                }
                then(resolveFn, rejectFn) {
                    return new Promise((resolve,reject) => {
                        let newCb = (val) => {
                            var cbVal = resolveFn(val)
                            resolve(cbVAl)
                        }
                        let newRejectCb = (err) => {
                            var cbErr = resolveFn(err)
                                resolve(cbErr)
                            }
                        })
                        switch(this._status) {
                            case 'PENDING':
                                this.resolvecallback.push(newCb)
                                this.rejectcallback.push(newRejectCb)
                                bresk;
                            case 'FULFILLED':
                                resolveFn(this.value)
                                break;
                            case 'REJECTED':
                                rejectFn(this.value)
                                break;
                            }
                        }
                }`,
    },
    {
      title: "原生ajax",
      body: `let xhr = new XMLHttpRequest();
            xhr.open(get, "888.js", false);
            xhr.onreadystatechange = function () {
              if (xhr.status === 200 && xhr.readyState === 4) {
                console.log(xhr.responseText);
              }
            };`,
    },
    {
      title: "斐波那契算法",
      body: `let count = 0;
            function fn(n) {
              let cache = {};
              function _fn(n) {
                if (cache[n]) {
                  return cache[n];
                }
                count++;
                if (n == 1 || n == 2) {
                  return 1;
                }
                let prev = _fn(n - 1);
                cache[n - 1] = prev;
                let next = _fn(n - 2);
                cache[n - 2] = next;
                return prev + next;
              }
              return _fn(n);
            }
            let count2 = 0;
            function fn2(n) {
              count2++;
              if (n == 1 || n == 2) {
                return 1;
              }
              return fn2(n - 1) + fn2(n - 2);
            }
            console.log(fn(20), count); // 6765 20
            console.log(fn2(20), count2); // 6765 13529`,
    },
    {
      title: "多种去重方法",
      body: `function unique(arr) {
                var res = arr.filter((item, index, array) => {
                  return array.indexOf(item) === index;
                });
                return res;
              }
              var unique = (arr) => [...new Set(arr)];
              var res = arr.reduce((prev, curr) => {
                if (!prev.includes(curr)) {
                  return prev.concat(curr);
                } else {
                  return prev;
                }
              }, []);`,
    },
    {
      title: "发布订阅",
      body: `class Pub {
                constructor() {
                  this.users = [];
                }
                // 实例订阅
                on(callback) {
                  this.users.push(callback);
                }
                // 发布消息
                emit(msg) {
                  this.users.forEach((cb) => {
                    cb && cb(msg);
                  });
                }
              }
              var p = new Pub();
              // 订阅
              p.on(function (msg) {
                console.log("用户一收到消息了" + msg);
              });
              p.on(function (msg) {
                console.log("用户二收到消息了" + msg);
              });
              // 发布消息
              p.emit("有新通知了");`,
    },
    {
      title: "Object.is",
      body: ``,
    },
    {
      title: "快速排序",
      body: `funtion quickSort(arr) {
                let index = Math.floor(arr.length / 2)
                let base = arr.splice(index, 1)[0]
                let left = [], right = []
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < base) {
                        left.push(arr[i])
                    } else {
                        right.push(arr[i])
                    }
                }
                return quickSort(left).concat(base, quickSort(right))
            }`,
    },
    {
      title: "数组扁平化",
      body: `function flatten(arr) {
                var result = [];
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (Array.isArray(arr[i])) {
                        result = result.concat(flatten(arr[i]))
                    } else {
                        result.push(arr[i])
                    }
                }
                return result;
            }
            const arr = [1, [1, 2], [1, 2, 3]]
            arr.flat(Infinity) // [1, 1, 2, 1, 2, 3]
            functionflatten(arr) {
                while (arr.some(item => Array.isArray(item))) {
                    arr = [].concat(...arr);
                }
                return arr;
            }`,
    },
    {
      title: "类的继承",
      body: `function Parent5() {
                this.name = "parent5";
                this.play = [1, 2, 3];
              }
              function Child5() {
                Parent5.call(this);
                this.type = "child5";
              }
              Child5.prototype = Object.create(Parent5.prototype);
              Child5.prototype.constructor = Child5;`,
    },
    {
      title: "双向数据绑定",
      body: `// 数据
            const data = {
              text: "default",
            };
            const input = document.getElementById("input");
            const span = document.getElementById("span");
            // 数据劫持
            Object.defineProperty(data, "text", {
              // 数据变化--> 修改视图
              set(newVal) {
                input.value = newVal;
                span.innerHTML = newVal;
              },
            });
            // 视图更改--> 数据变化
            input.addEventListener("keyup", function (e) {
              data.text = e.target.value;
            });
            // proxy 版本：
            // 数据
            const data = {
              text: "default",
            };
            const input = document.getElementById("input");
            const span = document.getElementById("span");
            // 数据劫持
            const handler = {
              set(target, key, value) {
                target[key] = value;
                // 数据变化--> 修改视图
                input.value = value;
                span.innerHTML = value;
                return value;
              },
            };
            const proxy = new Proxy(data, handler);
            // 视图更改--> 数据变化
            input.addEventListener("keyup", function (e) {
              proxy.text = e.target.value;
            });`,
    },
    {
      title: "promise 封装ajax",
      body: `function ajax(url, method) {
                return new Promise((resolve, reject) => {
                  const xhr = new XMLHttpRequest();
                  xhr.open(url, method, true);
                  xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                      if (xhr.status === 200) {
                        resolve(xhr.responseText);
                      } else if (xhr.status === 404) {
                        reject(new Error("404"));
                      }
                    } else {
                      reject("请求数据失败");
                    }
                  };
                  xhr.send(null);
                });
              }`,
    },
    {
      title: "const 实现",
      body: `var __const = function __const(data, value) {
                window.data = value; // 把要定义的data 挂载到window 下，并赋值value
                Object.defineProperty(window, data, {
                  // 利用Object.defineProperty 的能力劫持当前对象，并修改其属性描述符
                  enumerable: false,
                  configurable: false,
                  get: function () {
                    return value;
                  },
                  set: function (data) {
                    if (data !== value) {
                      // 当要对当前属性进行赋值时，则抛出错误！
                      throw new TypeError("Assignment to constant variable.");
                    } else {
                      return value;
                    }
                  },
                });
              };
              __const("a", 10);
              console.log(a);
              delete a;
              console.log(a);
              for (let item in window) {
                // 因为const 定义的属性在global 下也是不存在的，所以用到了enumerable: false 来模拟这一功能
                if (item === "a") {
                  // 因为不可枚举，所以不执行
                  console.log(window[item]);
                }
              }
              a = 20; // 报错`,
    },
    {
      title: "eventEmitter",
      body: `class EventEmitter {
                constructor() {
                  // handlers 是一个map，用于存储事件与回调之间的对应关系
                  this.handlers = {};
                }
                // on 方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
                on(eventName, cb) {
                  // 先检查一下目标事件名有没有对应的监听函数队列
                  if (!this.handlers[eventName]) {
                    // 如果没有，那么首先初始化一个监听函数队列
                    this.handlers[eventName] = [];
                  }
                  // 把回调函数推入目标事件的监听函数队列里去
                  this.handlers[eventName].push(cb);
                }
                // emit 方法用于触发目标事件，它接受事件名和监听函数入参作为参数
                emit(eventName, ...args) {
                  // 检查目标事件是否有监听函数队列
                  if (this.handlers[eventName]) {
                    // 如果有，则逐个调用队列里的回调函数
                    this.handlers[eventName].forEach((callback) => {
                      callback(...args);
                    });
                  }
                }
                // 移除某个事件回调队列里的指定回调函数
                off(eventName, cb) {
                  const callbacks = this.handlers[eventName];
                  const index = callbacks.indexOf(cb);
                  if (index !== -1) {
                    callbacks.splice(index, 1);
                  }
                }
                // 为事件注册单次监听器
                once(eventName, cb) {
                  // 对回调函数进行包装，使其执行完毕自动被移除
                  const wrapper = (...args) => {
                    cb.apply(...args);
                    this.off(eventName, wrapper);
                  };
                  this.on(eventName, wrapper);
                }
              }
              // https://mp.weixin.qq.com/s/YXEiK8NNx-Bo81371rVCaQ
              `,
    },
  ];