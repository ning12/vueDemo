<template>
  <v-flex>
    <v-tabs v-model="tab" :grow="grow" background-color="#fff" >
      <v-tabs-slider></v-tabs-slider>
      <v-tab>专升本</v-tab>
      <v-tab>教师招聘</v-tab>
      <v-tab>教师资格</v-tab>
      <v-tab-item>
        <v-container>
          <v-flex>
            <v-card v-for="(item,i) in lists" :key="i" class="mb-3">
              <v-img class="white--text align-end" height="auto" src="./../assets/images/pin1.png">
                <p class="text-justify mb-0">{{item.type}}</p>
              </v-img>
              <v-card-subtitle class="pl-1 pt-0 pb-0 mt-1 text-center list-tit">{{item.title}}</v-card-subtitle>
              <v-flex class="pl-1 pr-1 d-flex justify-space-between mt-3">
                <span style="color:#8A8A8A;font-size:.7rem">{{item.course}}个课程 {{item.book}}本图书</span>
                <del class="ml-2" style="font-size:.7rem;color:#8A8A8A;">{{item.num}}人报名</del>
              </v-flex>
              <v-flex class="d-flex pl-1 pr-1 justify-space-between pb-3 mt-3">
                <v-flex>
                  <span style="color:red" class="mr-1">￥{{item.newPrice}}</span>
                  <span style="color:#8A8A8A;">￥{{item.oldPrice}}</span>
                </v-flex>
                <v-flex class="pb-0 pt-0 text-right">
                  <v-btn small color="error">查看詳情</v-btn>
                </v-flex>
              </v-flex>
            </v-card>
          </v-flex>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <v-flex>
            <v-card v-for="(item,i) in lists" :key="i" class="mb-3">
              <v-img class="white--text align-end" height="auto" src="./../assets/images/pin1.png">
                <p class="text-justify mb-0">{{item.type}}</p>
              </v-img>
              <v-card-subtitle class="pl-1 pt-0 pb-0 mt-1 text-center list-tit">{{item.title}}</v-card-subtitle>
              <v-flex class="pl-1 pr-1 d-flex justify-space-between mt-3">
                <span style="color:#8A8A8A;font-size:.7rem">{{item.course}}个课程 {{item.book}}本图书</span>
                <del class="ml-2" style="font-size:.7rem;color:#8A8A8A;">{{item.num}}人报名</del>
              </v-flex>
              <v-flex class="d-flex pl-1 pr-1 justify-space-between pb-3 mt-3">
                <v-flex>
                  <span style="color:red" class="mr-1">￥{{item.newPrice}}</span>
                  <span style="color:#8A8A8A;">￥{{item.oldPrice}}</span>
                </v-flex>
                <v-flex class="pb-0 pt-0 text-right">
                  <v-btn small color="error">查看詳情</v-btn>
                </v-flex>
              </v-flex>
            </v-card>
          </v-flex>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <v-flex>
            <v-card v-for="(item,i) in lists" :key="i" class="mb-3">
              <v-img class="white--text align-end" height="auto" src="./../assets/images/pin1.png">
                <p class="text-justify mb-0">{{item.type}}</p>
              </v-img>
              <v-card-subtitle class="pl-1 pt-0 pb-0 mt-1 text-center list-tit">{{item.title}}</v-card-subtitle>
              <v-flex class="pl-1 pr-1 d-flex justify-space-between mt-3">
                <span style="color:#8A8A8A;font-size:.7rem">{{item.course}}个课程 {{item.book}}本图书</span>
                <del class="ml-2" style="font-size:.7rem;color:#8A8A8A;">{{item.num}}人报名</del>
              </v-flex>
              <v-flex class="d-flex pl-1 pr-1 justify-space-between pb-3 mt-3">
                <v-flex>
                  <span style="color:red" class="mr-1">￥{{item.newPrice}}</span>
                  <span style="color:#8A8A8A;">￥{{item.oldPrice}}</span>
                </v-flex>
                <v-flex class="pb-0 pt-0 text-right">
                  <v-btn small color="error">查看詳情</v-btn>
                </v-flex>
              </v-flex>
            </v-card>
          </v-flex>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      grow: true,
      vertical: false,
      valueDeterminate: 50,
      lists: [
        {
          type: "直播套餐",
          title: "【专升本】2020年河南专升本《英语+教育理论》考前最后一课",
          course: "1",
          book: "4",
          num: "3473",
          oldPrice: "39",
          newPrice: "30"
        },
        {
          type: "課程套餐",
          title: "【专升本】2020年河南专升本《英语+管理学》考前最后一课",
          course: "1",
          book: "4",
          num: "3473",
          oldPrice: "39",
          newPrice: "30"
        },
        {
          type: "圖書套餐",
          title: "【专升本】2020年河南专升本管理学考前最后一课",
          course: "1",
          book: "4",
          num: "3473",
          oldPrice: "39",
          newPrice: "30"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.text-justify {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.4rem;
  padding: 0.1rem;
}

.list-tit {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-tab:before {
  background-color: #fff;
}
</style>
