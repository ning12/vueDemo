// 页面内容路由部分
export default [
 {
  path: "indexs",
  meta: {
    requireLogin: true,
    bottomNav: 'indexs',
    head: '首页'
  },
  component: resolve => require(['@/views/Indexs.vue'], resolve)
},{
  path: "work",
  meta: {
    requireLogin: true,
    bottomNav: 'work',
    head: '作业'
  },
  component: resolve => require(['@/views/Work.vue'], resolve)
},{
  path: "class",
  meta: {
    requireLogin: true,
    bottomNav: 'class',
    head: '课程'
  },
  component: resolve => require(['@/views/Class.vue'], resolve)
}]