<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="info">
                <v-toolbar-title>登录</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="账号"
                    type="text"
                    v-model="account"
                    :rules="accountRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="密码"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-form>
                <transition name="trans">
                  <v-alert
                    close-text="Close Alert"
                    dense
                    outlined
                    type="info"
                    dismissible
                    v-model="errTips"
                    class="alet-border"
                  >{{errMsg}}</v-alert>
                </transition>
              </v-card-text>
              <v-card-actions>
                <v-flex class="headline text-center">
                  <v-btn color="info" @click="handleLogin">登录</v-btn>
                  <!-- <v-btn @click="handleClear">重置</v-btn> -->
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<style lang="stylus" scoped>
.alet-border {
  border-radius: 0 !important;
}

.v-alert--outlined {
  background: none !important;
  border: none !important;
}
</style>
<script>
import LocalStorage from '../api/local-storage';
import qs from 'qs';
import {userLogin} from '../api/server'
// 已全局引用axios,组件中直接使用this.$axios进行请求
export default {
  data: () => ({
    account: "",
    password: "",
    valid: true,
    accountRules: [v => !!v || "请输入用户账号"],
    passwordRules: [v => !!v || "请输入请输入用户密码"],
    errTips: false,
    errMsg: ""
  }),
  methods: {
    handleLogin() {
      // 全局引用的baseUrl,axios,get,postform.请求如:
      // this.$post('/xxx',data).then(res=>{}),err(err=>{})
      // console.log(apiDeviceDetail)
      // console.log(this.$axios)
      // console.log(this.$get)
      // console.log(this.$post)
      // console.log(this.$postform)
      if (this.$refs.form.validate()) {
        const data = {
          loginName: this.account,
          loginPwd: this.password,
        }
        userLogin(qs.stringify(data)).then(res=>{
          console.log(res);
          if(res.success) {
             LocalStorage.setItem("password", this.password);
             this.$router.push({ path: "/index" });
          }else {
            this.errTips = true;
            this.errMsg = res.message;
          }
        })
        .catch(err=>{
          this.errTips = true;
          this.errMsg = "服务器繁忙,请稍后再试";
          console.log(err);
        })
      } else {
        return;
      }
    },
    handleClear() {
      this.account = "";
      this.password = "";
    }
  }
};
</script>