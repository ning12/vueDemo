import { post, $delete, put } from "./utils";
// eslint-disable-next-line no-unused-vars
let baseUrl = ''
if (process.env.NODE_ENV == 'development') {
  // baseUrl = 'http://192.168.0.139/openadmin/' 
  baseUrl = 'http://127.0.0.1/openadmin'
  // baseUrl = 'http://www.haodaifujiaoyu.com/openadmin/' 

} else if (process.env.NODE_ENV == 'production') {
  // baseUrl = 'http://192.168.0.139/openadmin/'
  baseUrl = 'http://127.0.0.1/openadmin'
  // baseUrl = 'http://www.haodaifujiaoyu.com/openadmin/' 
}
// export {
//   baseUrl
// }
/*
*api接口地址统一管理
*/
/**
 * api接口统一管理例如
 * 如果不存在跨域问题可以直接使用${baseUrl}
 * 如果存在跨域问题直接使用api进行代理
 */

// 用户登录
export const userLogin = data => post(`${baseUrl}/mlogin`, data);
// export const userLogin = data => post('/api/mlogin', data);
// 修改设备
export const apiUpdeteDevice = data => put(`${baseUrl}/api/device`, data);
// 删除设备
export const apiDelDevice = data => $delete(`${baseUrl}/api/device`, data);
