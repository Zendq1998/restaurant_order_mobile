<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail" @touchmove.stop.prevent>
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="title">
            <div class="line"></div>
            <div class="text">地址</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.description}}</p>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">房间号</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content rid">{{rid}}</p>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">服务员工号</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content rid">{{sid}}</p>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hide">
        <Cha />
      </div>
    </div>
  </transition>
</template>

<script>
  import popupMixin from 'common/mixins/popup'
  import Cha from 'common/icon/cha.svg'

  export default {
    name: 'header-detail',
    mixins: [popupMixin],
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
        stype: String,
        default() {
          return '028'
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
    },
    components: {
      Cha
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .header-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    backdrop-filter: blur(10px)
    opacity: 1
    color: $color-white
    background: $color-background-s
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: $color-background
    .detail-wrapper
      display: inline-block
      width: 100%
      min-height: 100%
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        .name
          line-height: 16px
          text-align: center
          font-size: $fontsize-large
          font-weight: 700
        .title
          display: flex
          width: 80%
          margin: 28px auto 24px auto
          .line
            flex: 1
            position: relative
            top: -6px
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding: 0 12px
            font-weight: 700
            font-size: $fontsize-medium

        .supports
          width: 80%
          margin: 0 auto
          .support-item
            display: flex
            align-items: center
            padding: 0 12px
            margin-bottom: 12px
            &:last-child
              margin-bottom: 0
            .text
              line-height: 16px
              font-size: $fontsize-small
        .bulletin
          width: 80%
          margin: 0 auto
          .content
            padding: 0 12px
            line-height: 24px
            font-size: $fontsize-small
          .rid
            color: $color-orange
            text-align: center;
            font-size: $fontsize-large
    .detail-close
      position: relative
      width: 30px
      height: 30px
      margin: -64px auto 0 auto
      clear: both
      font-size: $fontsize-large-xxxx
</style>
