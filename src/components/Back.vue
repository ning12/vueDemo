<template>
 <v-sheet  >
  <v-toolbar style="position:fixed;z-index:111;width:100%;">
    <v-btn icon  @click.stop="goToBack()">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-flex>
      <v-toolbar-title text-xs-center>{{$route.meta.head}}</v-toolbar-title>
    </v-flex>
  </v-toolbar>
  <v-divider></v-divider>
  <v-content style="padding-top:56px;">
      <router-view/>
      <!-- hello -->
    </v-content>
 </v-sheet>
</template>

<script>
export default {
  name: "HelloUser",
  data: () => ({
  }),
  methods: {
   goToBack(){
     window.history.back(-1);
   }
  }
};
</script>