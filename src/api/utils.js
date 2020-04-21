import axios from 'axios'
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url,params={}){
 return new Promise((resolve,reject) => {
   axios.get(url,{
     params:params
   })
   .then(response => {
     resolve(response.data);
   })
   .catch(err => {
     reject(err)
   })
 })
}
  /**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
 return new Promise((resolve,reject) => {
   axios.post(url,data)
   .then(response => {
     resolve(response.data);
   },err => {
     reject(err)
   })
 })
}
  /**
 * 封装post请求 FormData方式
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postform(url,data = {}){
 return new Promise((resolve,reject) => {
   instance.post(url,data)
   .then(response => {
     resolve(response.data);
   },err => {
     reject(err)
   })
 })
}
/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
 return new Promise((resolve, reject) => {
   axios.put(url, params)
     .then(res => {
       resolve(res.data)
     })
     .catch(err => {
       reject(err.data)
     })
 });
}
/**
 * $delete，对应delete请求
 */
export function $delete(url, params){
 return new Promise((resolve, reject) =>{
   axios.delete(url, {
     data: params
   })
     .then(res => {
       resolve(res.data)
     })
     .catch(err => {
       reject(err.data)
     })
 });
}