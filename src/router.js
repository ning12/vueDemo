import Vue from "vue";
import Router from "vue-router";
import LocalStorage from './api/local-storage';
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Index from "./views/Index.vue";
import indexContent from "./router/indexContent";

Vue.use(Router);

const router = new Router({
  mode: "hash",
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
