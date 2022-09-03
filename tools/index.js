/*
 * @Author: fg
 * @Date: 2022-08-25 11:15:26
 * @LastEditors: fg
 * @LastEditTime: 2022-08-30 09:28:24
 * @Description: 工具函数
 */

/**
 * @description: 获取url 参数
 * @param {*} URL
 * @return {*}
 */
const getQueryParams = URL => JSON.parse(`{"${decodeURI(URL.split('?')[1]).replace(/&/g,'","').replace(/=/g,'":"')}"}`)

/**
 * @description: 是否为周末
 * @param {*} date 日期
 * @return {*}
 */
const isWeekend = (date)=>[0,6].includes(date.getDay())
  

/**
 * @description: 给定范围内生成随机数字
 * @param {*} min 
 * @param {*} max
 * @return {*}
 */
const randomNum = (min, max)=>Math.floor(Math.random()*(max-min+1))+min

/**
 * @description: 求平均数
 * @param {array} numbers 数字
 * @return {*}
 */
const getAverage = (...numbers)=>numbers.reduce((a,b)=>a+b)/numbers.length


/**
 * @description: 颠倒字符串
 * @param {*} str 字符串
 * @return {*}
 */
const reverseString = (str)=>str.split('').reverse().json('')

/**
 * @description: 检查空的数组
 * @param {*} arr 
 * @return {*}
 */
const arrayIsNotEmpty = (arr)=>Array.isArray(arr) && arr.length>0


/**
 * @description: 计算间隔的天数
 * @param {*} start
 * @param {*} end
 * @return {*}
 */
const daysDiff = (start, end)=>Math.ceil(Math.abs(start - end)/86400000)

const mergeArrayAndRemoveDuplications = 