<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    // document.documentElement.style.fontSize =
    //   document.documentElement.clientWidth / 72 + "px";
    function placeholderPic() {
      document.documentElement.style.fontSize =
        document.documentElement.offsetWidth / 72 + "px"; //同上
    }
    placeholderPic();
    window.onresize = function() {
      //窗口改变时再次执行一次函数即可
      placeholderPic();
    };
  }
};
</script>
