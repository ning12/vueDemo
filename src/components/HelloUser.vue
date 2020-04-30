<!--app整体布局-->
<template>
  <v-sheet>
    <v-navigation-drawer  v-model="drawer" fixed  app style="z-index:1111">
      <br />
      <v-layout row wrap>
        <v-flex xs1></v-flex>
        <v-flex xs4>
          <v-avatar size="80px">
            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="John" />
          </v-avatar>
        </v-flex>
        <v-flex xs4>
          <v-flex xs12 style="margin-top:2rem">
            <span class="black--text title">小胡</span>
          </v-flex>
          <v-flex xs12>
            <span>初级开发</span>
          </v-flex>
        </v-flex>
      </v-layout>
      <br />
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>ballot</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>修改密码</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>assignment_return</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>退出登录</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar style="position:fixed;width:100%;z-index:111" color="#fff">
      <v-app-bar-nav-icon color="#000" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-flex text-xs-center >
        <v-toolbar-title color="#000"  text-xs-center>
          学习平台{{$route.meta.head}}
        </v-toolbar-title>
      </v-flex>
    </v-toolbar>
    <v-content style="padding-top:64px;">
      <router-view/>
      <!-- <v-card>{{bottomNav}}</v-card> -->
    </v-content>
    <v-footer class="pa-0" fixed  text-center>
      <v-bottom-navigation v-model="bottomNav" background-color="#fff" color="#3af" grow>
        <v-btn value="indexs" @click="goTo('indexs')">
          <span>首页</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn value="work" @click="goTo('work')">
          <span>作业</span>
          <v-icon>note</v-icon>
        </v-btn>

        <v-btn value="class" @click="goTo('class')">
          <span>班级</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-sheet>
</template>

<script>
export default {
  name: "HelloUser",
  data: () => ({
    drawer: null,
    bottomNav: ""
  }),
  watch: {
    $route(to,from){
      this.bottomNav = this.$route.meta.bottomNav
    }
  },
  mounted() {
    this.bottomNav = this.$route.meta.bottomNav
  },
  methods: {
    goTo(url) {
      this.$router.push({path: `/index/${url}`})
    }
  }
};
</script>
<style lang="stylus" scoped>
.v-list-item__title {
  line-height: 1.2!important;
}
</style>
