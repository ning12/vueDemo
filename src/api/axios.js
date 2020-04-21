import axios from 'axios';
import LocalStorage from './local-storage';
import router from '../router';
axios.defaults.timeout = 10000 //超时时间

/**
 *  请求拦截
 */
axios.interceptors.request.use(config => {
  if (LocalStorage.getItem('cookietime')) {
    // 添加请求头的内容cookitime以及content-type
    config.headers['Content-Type']= 'application/x-www-form-urlencoded';
    config.headers.cookieTime = LocalStorage.getItem('cookietime');
    config.headers.userId = LocalStorage.getItem('userId');
  }

  return config;
}, err => {
  alert('请求超时,请稍后重试!')
  return Promise.reject(err);
});

/**
 *  响应拦截
 */
axios.interceptors.response.use(res => {
  if (res.data.status === 401) {
    LocalStorage.clear();
    alert('信息过期，请重新登录!');
    res.data.status = 0;
    res.data.result = 401;

    router.replace({
      path: '/',
      //登录成功后跳入浏览的当前页面
      query: {redirect: router.currentRoute.fullPath}
    });
  }

  return res;
}, err => {
  router.replace({
    path: '/',
    //登录成功后跳入浏览的当前页面
    query: {redirect: router.currentRoute.fullPath}
  });

  return Promise.reject(err);
});
