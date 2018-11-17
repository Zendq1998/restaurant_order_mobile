<template>
  <div class="header">
    <div class="content-wrapper">
      <p v-if="!login">
        hi, <span class="to-login" @click="toLogin">请登录～</span>
      </p>
    </div>
    <p v-if="login" class="intro">请选择您所在的包间</p>
  </div>
</template>

<script>
export default {
  name: 'room-header',
  data() {
    return {
      login: false
    }
  },
  methods: {
    toLogin() {
      window.location = '/login'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .header
    position: relative
    overflow: hidden
    color: $color-white
    background: $color-background-ss
    border-bottom: 1px solid $color-orange
    .content-wrapper
      position: relative
      display: flex
      align-items: center
      padding: 24px 12px 18px 24px
      .to-login
        color: $color-orange
    .intro
      position: absolute
      right: 5px
      top: 42px
      font-size: $fontsize-small
</style>

