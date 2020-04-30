import Vue from "vue";
import Router from "vue-router";
import LocalStorage from './api/local-storage';
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Index from "./views/Index.vue";
import indexContent from "./router/indexContent";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/index",
      name: "Index",
      component: Index,
      redirect: '/index/indexs',
      children: [
        ...indexContent
      ]
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/back",
      name: "Back",
      component: resolve => require(['@/components/Back.vue'], resolve),
      redirect: '/back/list',
      meta: {
        requireLogin: true,
        head: '返回按钮'
      },
      children: [{
        path: "list",
        meta: {
          requireLogin: true,
          head: '直播列表'
        },
        component: resolve =>require(['@/views/List.vue'],resolve)
      },
      {
        path: "collageList",
        meta: {
          requireLogin: true,
          head: '拼团列表'
        },
        component: resolve =>require(['@/views/CollageList.vue'],resolve)
      },
      {
        path: "detail",
        meta: {
          requireLogin: true,
          head: '课程详情'
        },
        component: resolve =>require(['@/views/Detail.vue'],resolve)
      }  
    ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  if(to.meta.requireLogin) {
    if(LocalStorage.getItem('password')) {
      next();
    }
    else {
      alert('信息过期，请重新登录!');
      next({
        path: '/',
        query: {redirect: to.fullPath}
      });
    }
  }
  else {
    next();
  }
});

export default router;
