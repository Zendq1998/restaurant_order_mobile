<template>
  <div class="login">
    <go-back></go-back>
    <div class="forms">
      <img class="img-logo" :src="logo[0]" alt="">
      <cube-input class="input input-id" v-model="sid" placeholder='请输入工号' type="text" :autofocus="true" ></cube-input>
      <cube-input class="input" v-model="pw" placeholder='请输入密码' type='password' :eye="eye"></cube-input>
      <cube-button class="bt" @click="login"  :primary="primary" :disabled="!(sid.length && pw.length)">登录</cube-button>
    </div>
  </div>
</template>

<script>
import goBack from '../go-back/go-back'
import gql from 'graphql-tag'

const USERLOGIN = gql`query login($name: String!, $psw: String!){
  user {
    token(user: {username: $name, password: $psw})
  }
}`

export default {
  name: 'login',
  data() {
    return {
      sid: '',
      pw: '',
      eye: {
        open: true,
        reverse: false
      },
      primary: false,
      outline: true,
      logo: [
        'data:image/png;base64,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']
    }
  },
  methods: {
    login() {
      const LoginToast = this.$createToast({
        time: 0,
        txt: '登录中...'
      })
      LoginToast.show()
      this.$apollo.query({
        query: USERLOGIN,
        variables: {
          name: this.sid,
          psw: this.pw
        }
      })
        .then(res => {
          LoginToast.hide()
          if (res.data.user.token) {
            localStorage.setItem('token', res.data.user.token)
            localStorage.setItem('logged_in', 'yes')
            localStorage.setItem('user_name', this.sid)
            console.log(localStorage.getItem('token'))
            this.$router.push({ path: '/' })
          } else {
            const ErrToast = this.$createToast({
              time: 1000,
              txt: '用户名或密码错误',
              type: 'error',
              onTimeout: () => {
                this.pw = ''
              }
            })
            ErrToast.show()
          }
        })
        .catch(err => {
          LoginToast.hide()
        })
    },
    showToastTime() {
      const toast = this.$createToast({
        time: 500,
        txt: '登录中...',
        onTimeout: () => {
          document.cookie = 'logged_in=yes'
          document.cookie = `sid=${this.sid}`
          this.$router.push({ path: '/' })
        }
      })
      toast.show()
    }
  },
  components: {
    goBack
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .login
      position: fixed
      top: 0px;
      left: 0
      right: 0
      bottom: 0
      // background: $color-orange
      display: flex
      flex-direction: column
      align-items: center
      .forms
        padding-top: 100px;
        width: 300px
        .img-logo
          margin: 0 auto 12px
          display: block
        .input
          margin-bottom: 16px
          font-size: $fontsize-large-xx
        .bt
          margin-top: 30px
        >>> .cube-btn
          background: $color-orange
        >>> .cube-btn_disabled
          color: $color-white
          background: #ccc

</style>
