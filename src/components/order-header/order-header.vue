<template>
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description-local">
          {{seller.description}}
        </div>
        <div class="description">
          房间号：
          <span class="rid">{{rid}}</span>
        </div>
        <div class="description">
          服务员工号：
          <span class="rid">{{sid}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      >
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'order-header',
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      },
      rid: {
        type: String,
        default() {
          return '101'
        }
      },
      sid: {
        type: String,
        default() {
          return '028'
        }
      }
    },
    methods: {
      showDetail() {
        this.headerDetailComp = this.headerDetailComp || this.$createHeaderDetail({
          $props: {
            seller: 'seller',
            rid: 'rid',
            sid: 'sid'
          }
        })
        this.headerDetailComp.show()
      }
    },
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .header
    position: relative
    overflow: hidden
    color: $color-white
    background: $color-background-ss
    .content-wrapper
      position: relative
      display: flex
      align-items: center
      padding: 24px 12px 18px 24px
      .avatar
        flex: 0 0 64px
        width: 64px
        margin-right: 16px
        img
          border-radius: 2px
      .content
        flex: 1
        .title
          display: flex
          align-items: center
          margin-bottom: 4px
        .description-local
          font-size: $fontsize-small-s
          margin-bottom: 8px
        .description
          margin: 4px 0
          line-height: 12px
          font-size: $fontsize-small
          .rid
            color: $color-orange
        .support
          display: flex
          align-items: center
          .text
            line-height: 12px
            font-size: $fontsize-small-s

      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        display: flex
        align-items: center
        padding: 0 8px
        height: 24px
        line-height: 24px
        text-align: center
        border-radius: 14px
        background: $color-background-sss
        .count
          font-size: $fontsize-small-s
        .icon-keyboard_arrow_right
          margin-left: 2px
          line-height: 24px
          font-size: $fontsize-small-s

    .bulletin-wrapper
      position: relative
      display: flex
      align-items: center
      height: 28px
      line-height: 28px
      padding: 0 8px
      background: $color-background-sss
      .bulletin-title
        flex: 0 0 22px
        width: 22px
        height: 12px
        margin-right: 4px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        flex: 1
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        font-size: $fontsize-small-s
      .icon-keyboard_arrow_right
        flex: 0 0 10px
        width: 10px
        font-size: $fontsize-small-s
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
</style>
