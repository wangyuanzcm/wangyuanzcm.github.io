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
