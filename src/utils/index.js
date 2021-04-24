const moment = require("moment");
import LRU from "./LRU";

const initLRU = new LRU(100);
export const getInitTime = () => {
  let result = localStorage.getItem("initTime");
  if (!result || moment().isSameOrAfter(moment(result))) {
    const initTime = moment().add(1, "hours").format("YYYY/MM/DD HH:mm:ss"); //当前时间的前10天时间
    localStorage.setItem("initTime", initTime);
    return initTime;
  }
  return localStorage.getItem("initTime");
};
export const LRUCache = initLRU;
/**
 * 
 * @param {*} n 生成随机字符串的长度
 * @returns 
 */
export const generateMixed=(n)=> {
  var chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * 62);
    res += chars[id];
  }
  return res;
}