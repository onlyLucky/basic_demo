/*
 * @Author: fg
 * @Date: 2022-08-25 11:15:26
 * @LastEditors: fg
 * @LastEditTime: 2022-08-25 13:19:55
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
  