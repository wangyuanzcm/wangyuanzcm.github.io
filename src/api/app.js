
import {data} from './datalist';
const axios = require("axios");
const url = "https://api.github.com/repos/wangyuanzcm/hiker-blog/issues";

function request(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(
        url,
        {
          ...params,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "token xxxxxxx",//token需要自己保存
          },
        }
      )
      .then((res) => {
        resolve(true);
      })
      .catch((error) => {
        resolve(false);
        alert("更新用户数据失败" + error);
      });
  });
}

let promise = data.map((item)=>{
    return request(url,item)
})
//并行请求
// Promise.all(promises)
// .then(() => {
//   console.log('done')
// })
// .catch(() => {
//   console.log('error')
// })

//串行请求
let parallelPromise = promise.reduce((pre,cur)=>{
    return pre.then((res)=>{
        cur.then((res)=>{
            console.log(res,'res')
        })
    })
},Promise.resolve());

parallelPromise.then(()=>{
    console.log('done')
}).catch((err)=>{
    console.log(err)
})