<template>
  <div>
    <v-flex style="font-size:0">
      <img src="./../assets/images/pin2.jpg" width="100%" alt />
    </v-flex>
    <v-flex>
      <v-tabs v-model="tab" :grow="grow" background-color="#fff">
        <v-tabs-slider></v-tabs-slider>
        <v-tab>详情</v-tab>
        <v-tab>大纲</v-tab>
        <v-tab>评价</v-tab>
        <v-tab-item>
          <v-flex>
            <v-container>
              <h3
                class="d-inline-block text-truncate"
                style="max-width: 100%;"
              >河南招教2.0考点突破班•5天试学•赠25套真题</h3>
              <p style="font-size:.8rem">每位学员仅参与一次</p>
              <v-flex style="font-size:.8rem">
                <span @click="sheet = !sheet">全程督导|</span>
                <span @click="sheet = !sheet">名师答疑|</span>
                <span @click="sheet = !sheet">系统化学习|</span>
                <span @click="sheet = !sheet">教程配套|</span>
                <span @click="sheet = !sheet">随到随学</span>
              </v-flex>
              <p style="font-size:.8rem" class="mt-3">有效期: 365天</p>
              <v-footer class="pa-0" fixed text-center>
                <v-bottom-navigation background-color="#fff" color="#3af">
                  <v-btn value="indexs " style="flex:1">
                    <span>咨询</span>
                    <v-icon>mdi-history</v-icon>
                  </v-btn>

                  <v-btn value="work" style="flex:1" >
                    <span>收藏</span>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn value="class" style="flex:2;font-size:1rem" color="red" background-color="red">
                    立即购买
                  </v-btn>
                </v-bottom-navigation>
              </v-footer>
            </v-container>
            <div class="text-center">
              <v-bottom-sheet v-model="sheet">
                <v-sheet class height="auto">
                  <v-btn
                    class="mt-2"
                    text
                    color="red"
                    @click="sheet = !sheet"
                    style="position:absolute;right:0"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-container>
                    <p class="font-weight-bold">全程督导</p>
                    <p class="font-weight-regular">课程顾问、导师、名师，不同阶段为学生提供专业化和全面的教学服务，实现全程督导</p>
                    <p class="font-weight-bold">全程督导</p>
                    <p class="font-weight-regular">课程顾问、导师、名师，不同阶段为学生提供专业化和全面的教学服务，实现全程督导</p>
                    <p class="font-weight-bold">全程督导</p>
                    <p class="font-weight-regular">课程顾问、导师、名师，不同阶段为学生提供专业化和全面的教学服务，实现全程督导</p>
                  </v-container>
                </v-sheet>
              </v-bottom-sheet>
            </div>
          </v-flex>
        </v-tab-item>
        <v-tab-item>
          <v-expansion-panels>
            <v-expansion-panel v-for="(items,i) in content" :key="i">
              <v-expansion-panel-header>{{items.tit}}</v-expansion-panel-header>
              <v-expansion-panel-content v-for="(item,i) in items.subContent" :key="i">{{item.tit}}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
        <v-tab-item>
          <v-flex style="border-top:1px solid #ececec">
            <v-container>
              <v-flex v-for="(items,i) in content" :key="i">
                <v-row
                  style="border-bottom:1px solid #ececec"
                  v-for="(item,i) in items.comment"
                  :key="i"
                >
                  <v-col cols="2" justify="start">
                    <v-avatar>
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                    </v-avatar>
                  </v-col>
                  <v-col cols="10" justify="start">
                    <v-flex class="d-flex" style="margin-top:-12px">
                      <span class="caption" style="line-height:3.2rem">{{item.phone}}</span>
                      <v-rating
                        v-model="rating"
                        background-color="orange lighten-3"
                        color="orange"
                        large
                      ></v-rating>
                    </v-flex>
                    <v-flex>{{item.time}}</v-flex>
                    <v-flex>{{item.con}}</v-flex>
                  </v-col>
                </v-row>
              </v-flex>
            </v-container>
          </v-flex>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  name: "Home",

  data: () => ({
    tab: null,
    grow: true,
    content: [
      {
        tit: "第一章 · 教育学思维导图1",
        comment: [
          {
            phone: "15670585826",
            time: "2020-04-21 23:40:01",
            con: "系统默认好评"
          }
        ],
        subContent: [
          { tit: " 课时1 · 教育与教育学•教育的基本规律" },
          { tit: "课时2 · 教育目的与教育制度•课程" }
        ]
      },
      {
        tit: "第二章 · 教育学思维导图2",
        subContent: [
          { tit: " 课时1 · 教育与教育学•教育的基本规律" },
          { tit: "课时2 · 教育目的与教育制度•课程" }
        ]
      },
      {
        tit: "第三章 · 教育学思维导图3",
        subContent: [
          { tit: " 课时1 · 教育与教育学•教育的基本规律" },
          { tit: "课时2 · 教育目的与教育制度•课程" }
        ]
      }
    ],
    rating: 3,
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" }
    ]
  }),
  methods: {}
};
</script>
