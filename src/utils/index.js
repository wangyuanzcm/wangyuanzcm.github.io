const moment = require('moment');

export const getInitTime = ()=>{
    if(!localStorage.getItem("initTime")){
        const initTime = moment().add(1, 'hours').format("YYYY/MM/DD HH:mm:ss"); //当前时间的前10天时间
        localStorage.setItem("initTime", initTime);
        return initTime
    }
    return localStorage.getItem("initTime")
}