<template>
  <div class="login">
    <div class="forms">
      <cube-input class="input input-id" v-model="id" placeholder='请输入工号' :autofocus="true" ></cube-input>
      <cube-input class="input" v-model="pw" placeholder='请输入密码' type='password' :eye="eye"></cube-input>
      <cube-button class="bt" :outline="outline"  :primary="primary" :disabled="!(id.length && pw.length)">登录</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      id: '',
      pw: '',
      eye: {
        open: true,
        reverse: false
      },
      primary: false,
      outline: true
    }
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
      background: $color-orange
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      .forms
        width: 80%
        height: 20%
        .input
          height: 40%
          width: 100%
          margin-bottom: 10%
          font-size: $fontsize-large-xx
        .bt
          height: 35%
        >>> .cube-btn-outline
          color: $color-white
          position: inherit
          border: 1px solid $color-white
          



</style>


