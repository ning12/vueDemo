<template>
  <div class="app-page" style="min-height: 100vh;">
    <v-container style="padding-bottom:56px!important">
      <v-flex>
        <v-carousel
          delimiter-icon="mdi-minus"
          height="auto"
          :hide-delimiter-background="true"
          :show-arrows-on-hover="false"
          style="border-radius:20px"
          :show-arrows="false"
          interval="200"
        >
          <v-carousel-item src="./../assets/images/banner1.jpg"></v-carousel-item>
          <v-carousel-item src="./../assets/images/banner2.jpg"></v-carousel-item>
          <v-carousel-item src="./../assets/images/banner3.jpg"></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-container>
        <v-flex>
          <v-row>
            <v-col cols="3">
              <div class="index-type">
                <v-img src="./../assets/images/video.png" alt />
                <span style="display:block;text-align:center;">班级</span>
              </div>
            </v-col>
            <v-col cols="3">
              <div class="index-type">
                <v-img src="./../assets/images/book.png" alt />
                <span style="display:block;text-align:center;">图书</span>
              </div>
            </v-col>
            <v-col cols="3">
              <div class="index-type">
                <v-img src="./../assets/images/live.png" alt />
                <span style="display:block;text-align:center;">直播</span>
              </div>
            </v-col>
            <v-col cols="3">
              <div class="index-type">
                <v-img src="./../assets/images/teach.png" alt />
                <span style="display:block;text-align:center;">面授</span>
              </div>
            </v-col>
          </v-row>
        </v-flex>
      </v-container>
      <v-flex class="d-flex justify-space-between flex-row" style="height:2rem">
        <span>直播课</span>
        <a @click="goToMore('list')" class="live-more">查看更多></a>
      </v-flex>
      <v-flex class="d-flex justify-space-between flex-wrap ml-0">
        <v-card class="mx-auto" width="48%" v-for="(item,i) in live" :key="i">
          <p class="text-justify" style>{{item.state}}</p>
          <div class="indexs-livetime">
            <img src="./../assets/images/shijian.png" style="max-width:.9rem" />
            {{item.time}}
          </div>
          <v-flex class="d-flex justify-center">
            <v-avatar size="4rem" class="mr-3" v-for="(item1,ci) in item.src" :key="ci">
              <img :src="item1.url" alt="John" />
            </v-avatar>
          </v-flex>
          <v-card-subtitle class="pb-0 text-center">{{item.title}}</v-card-subtitle>
        </v-card>
      </v-flex>
      <v-flex
        class="d-flex justify-space-between flex-row mt-3"
        style="hegiht:2rem;line-height:2rem"
      >
        <img style="max-width:7rem" src="./../assets/images/sekill.png" />
        <span style="font-size:.6rem;">
          距离本场结束还有
          <span class="hour-time">{{hr}}</span>:
          <span class="min-time">{{min}}</span>:
          <span class="sec-time">{{sec}}</span>
        </span>
        <a @click="goToCollage('collageList')" class="live-more">查看更多></a>
      </v-flex>
      <v-flex class="mt-3 mb-3">
        <swiper ref="mySwiper1" :options="swiperOptions">
          <swiper-slide v-for="(item,i) in pin" :key="i">
            <v-card>
              <img src="./../assets/images/pin1.png" alt width="100%" />
              <p class="text-justify" style>{{item.state}}</p>
              <v-card-subtitle class="pl-1 pt-0 pb-0 mb-0 text-center pin-tit">{{item.title}}</v-card-subtitle>
              <v-flex class="pl-1">
                <span style="color:red">￥{{item.nowPrice}}</span>
                <del class="ml-2" style="font-size:.7rem;">￥{{item.oldPrice}}</del>
              </v-flex>
              <v-flex class="d-flex pl-1  justify-space-between">
                <v-row class="d-flex justify-space-between">
                  <v-col >
                    <v-progress-linear v-model="valueDeterminate" color="pink" class="mr-2"></v-progress-linear>
                  </v-col>
                  <v-col class="pb-0 pt-0 text-center">
                    <span style="font-size:.8rem">已抢40%</span>
                  </v-col>
                </v-row>
              </v-flex>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  // name: "Indexs",
  data: () => ({
    url: [
      { urls: "./../assets/images/banner1.jpg" },
      { urls: "./../assets/images/banner2.jpg" },
      { urls: "./../assets/images/banner3.jpg" }
    ],
    cycle: false,
    live: [
      {
        time: "0421 9:00",
        state: "直播中",
        src: [
          { url: "https://randomuser.me/api/portraits/men/81.jpg" },
          { url: "https://randomuser.me/api/portraits/men/81.jpg" }
        ],
        title: "2020四川教师招聘-教育基础知识思维导图-详解直播课"
      },
      {
        time: "0423 10:00",
        state: "未开始",
        src: [{ url: "https://randomuser.me/api/portraits/men/81.jpg" }],
        title: "2019河南护士资格考试直播讲解"
      }
    ],
    day: 0, //天
    hr: 0, //时
    min: 0, //分
    sec: 0, //秒
    swiperOptions: {
      pagination: {
        el: ".swiper-pagination"
      },
      slidesPerView: 2.3,
      spaceBetween: 15
      // Some Swiper option/callback...
    },
    valueDeterminate: 50,
    pin: [
      {state: "已开始",title:"2020年四川教师招聘",nowPrice:"1",oldPrice:"30"},
      {state: "未开始",title:"生理解剖学",nowPrice:"4",oldPrice:"43"},
      {state: "进行中",title:"公共英语",nowPrice:"90",oldPrice:"150"},
      {state: "进行中",title:"教师招聘",nowPrice:"90",oldPrice:"150"},
      {state: "未开始",title:"招教考试",nowPrice:"90",oldPrice:"150"},
      {state: "已结束",title:"特岗考试",nowPrice:"90",oldPrice:"150"},
      {state: "进行中",title:"公共英语",nowPrice:"90",oldPrice:"150"},
      {state: "进行中",title:"公共英语",nowPrice:"90",oldPrice:"150"},
    ]
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper1.$swiper;
    }
  },
  mounted() {
    this.countdown();
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    //倒计时
    countdown() {
      const end = Date.parse(new Date("2020-04-30 04:10:20"));
      const now = Date.parse(new Date());
      const msec = end - now;
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = "";
      if(day>0) {
        hr = parseInt((msec / 1000 / 60 / 60) % 24)*day;
      }else {
         hr = parseInt((msec / 1000 / 60 / 60) % 24);
      }
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      this._interval = setTimeout(function() {
        that.countdown();
      }, 1000);
    },
    goToMore(url) {
      this.$router.push(`/back/${url}`)
    },
    goToCollage(url) {
      this.$router.push(`/back/${url}`)
    }
  },
  //当离开页面时，清除倒计时
  beforeDestroy() {
    clearInterval(this._interval);
  }
};
</script>
<style scoped>
.text-justify {
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(153, 153, 153, 1);
  border-radius: 0px 4px 0px 4px;
  font-size: 0.4rem;
  padding: 0.1rem;
}

.indexs-livetime {
  margin: 0.5rem;
}

.v-card__subtitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.index-type {
  padding: 0.5rem;
}
.hour-time,
.min-time,
.sec-time {
  width: 0.42rem;
  height: 0.42rem;
  text-align: center;
  line-height: 0.42rem;
  -webkit-border-radius: 0.04rem;
  -moz-border-radius: 0.04rem;
  border-radius: 0.04rem;
  background: red;
  font-size: 0.8rem;
  color: #fff;
}
.live-more {
  color: #000;
  text-decoration: none;
  font-size: 0.6rem;
}
.pin-tit {
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
</style>
