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
         <v-row v-for="(item,i) in collageList" :key="i">
          <v-col>
           <img src="./../assets/images/pin2.jpg" alt="" width="100%" style="border-radius:.2rem">
          </v-col>
          <v-col class="pl-0">
           <v-flex class="collage-tit" style="">{{item.title}}</v-flex>
           <v-flex class="d-flex justify-space-between " style="margin-top:30%">
            <div class="collageList-left" style="flex:1.5">
             <div class="collageList-left-top"><span style="color:red;font-size:.6rem">{{item.nowPrice}}</span><span style="color:#ececec;font-size:.4rem">{{item.oldPrice}}</span></div>
             <div class="collageList-left-bottom d-flex justify-space-between" style="line-height:0">
              <v-progress-linear v-model="valueDeterminate" color="pink" class="mr-2" style="width:38%"></v-progress-linear>
              <span style="font-size:.4rem">已抢{{item.percent}}</span>
             </div>
            </div>
            <div class="collageList-right">
             <v-btn x-small color="error">查看詳情</v-btn>
            </div>
           </v-flex>
          </v-col>
         </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
         <v-row v-for="(item,i) in collageList" :key="i">
          <v-col>
           <img src="./../assets/images/pin1.png" alt="" width="100%" style="border-radius:.2rem">
          </v-col>
          <v-col class="pl-0">
           <v-flex class="collage-tit" style="">{{item.title}}</v-flex>
           <v-flex class="d-flex justify-space-between " style="margin-top:30%">
            <div class="collageList-left" style="flex:1.5">
             <div class="collageList-left-top"><span style="color:red;font-size:.6rem">{{item.nowPrice}}</span><span style="color:#ececec;font-size:.4rem">{{item.oldPrice}}</span></div>
             <div class="collageList-left-bottom d-flex justify-space-between" style="line-height:0">
              <v-progress-linear v-model="valueDeterminate" color="pink" class="mr-2" style="width:38%"></v-progress-linear>
              <span style="font-size:.4rem">已抢{{item.percent}}</span>
             </div>
            </div>
            <div class="collageList-right">
             <v-btn x-small color="error">查看詳情</v-btn>
            </div>
           </v-flex>
          </v-col>
         </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
       <v-container>
         <v-row v-for="(item,i) in collageList" :key="i">
          <v-col>
           <img src="./../assets/images/pin3.jpg" alt="" width="100%" style="border-radius:.2rem">
          </v-col>
          <v-col class="pl-0">
           <v-flex class="collage-tit" style="">{{item.title}}</v-flex>
           <v-flex class="d-flex justify-space-between" style="margin-top:30%">
            <div class="collageList-left" style="flex:1.5">
             <div class="collageList-left-top"><span style="color:red;font-size:.6rem">{{item.nowPrice}}</span><span style="color:#ececec;font-size:.4rem">{{item.oldPrice}}</span></div>
             <div class="collageList-left-bottom d-flex justify-space-between" style="line-height:0">
              <v-progress-linear v-model="valueDeterminate" color="pink" class="mr-2" style="width:38%"></v-progress-linear>
              <span style="font-size:.4rem">已抢{{item.percent}}</span>
             </div>
            </div>
            <div class="collageList-right">
             <v-btn x-small color="error">查看詳情</v-btn>
            </div>
           </v-flex>
          </v-col>
         </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-flex>
</template>

<script>

  export default {

     data: () => ({
      tab: null,
      grow: true,
      valueDeterminate: 50,
      collageList:[
        {title:"河南招教2.0考点突破班•5天试学•赠25套真题",nowPrice:"￥320",oldPrice:"￥320",percent:"40%"},
        {title:"河南特岗2.0考点突破班•5天试学•赠25套真题",nowPrice:"￥150",oldPrice:"￥200",percent:"90%"},
        {title:"模拟2.0考点突破班•5天试学•赠25套真题",nowPrice:"￥150",oldPrice:"￥200",percent:"20%"},
        {title:"测试2.0考点突破班•5天试学•赠25套真题",nowPrice:"￥150",oldPrice:"￥200",percent:"30%"},
        {title:"前端2.0考点突破班•5天试学•赠25套真题",nowPrice:"￥150",oldPrice:"￥200",percent:"40%"},
        {title:"java2.0考点突破班•5天试学•赠25套真题",nowPrice:"￥150",oldPrice:"￥200",percent:"5%"},
        ]
     })
  }
</script>

<style lang="stylus">
.collage-tit {
 font-size:2rem;
 display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
}
</style>
