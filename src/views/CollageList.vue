<template>
  <v-flex>
    <v-tabs v-model="tab" :grow="grow" background-color="#fff" icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab>
       已开抢
        <span>9:00</span>
       </v-tab>
      <v-tab>
       抢购中
       <span>12:00</span>
      </v-tab>
      <v-tab>
       未开始
       <span>16:00</span>
      </v-tab>
      <v-tab-item>
        <v-container>
         <v-row>
          <v-col>
           <img src="./../assets/images/pin2.jpg" alt="" width="100%" style="border-radius:.2rem">
          </v-col>
          <v-col>
           <v-flex class="collage-tit" style="">河南招教2.0考点突破班•5天试学•赠25套真题</v-flex>
           <v-flex>
            <div class="collageList-left">
             <div class="collageList-left-top">￥200<span>￥320</span></div>
             <div class="collageList-left-bottom">
              <v-progress-linear v-model="valueDeterminate" color="pink" class="mr-2"></v-progress-linear>
              <span>已抢40%</span>
             </div>
            </div>
            <div class="collageList-right">
             <v-btn small color="error">查看詳情</v-btn>
            </div>
           </v-flex>
          </v-col>
         </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        2225
      </v-tab-item>
      <v-tab-item>
       33333
      </v-tab-item>
    </v-tabs>
  </v-flex>
</template>

<script>

  export default {

     data: () => ({
      tab: null,
      grow: true,
      valueDeterminate: 50
     })
  }
</script>

<style lang="stylus">
.collage-tit {
 font-size:.7rem;
 display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
}
</style>
