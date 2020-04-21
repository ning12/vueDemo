module.exports = {
  "lintOnSave": false,
  "devServer": {
    "port": 8080,
    "host": "localhost",
    "open": false,
    // proxy : {
    //   '/api': {
    //   target: 'http://127.0.0.1/openadmin/', //API服务器的地址,前端解决跨域问题方法,使用api进行代理地址请求
    //   changeOrigin: true,
    //   pathRewrite: {
    //   '^/api': ''
    //     }
    //   }
    // },
  },
  "transpileDependencies": [
    "vuetify"
  ]
}