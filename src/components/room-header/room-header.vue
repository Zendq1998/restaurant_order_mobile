<template>
  <div class="room-header">
    <div class="content-wrapper">
      <div class="my-icon">
        <div @click="logout" v-if="logged">
          <Logout />
          <div class="rid">Logout</div>
        </div>
        <div v-else class="left"></div>
      </div>
      <div class="middle">
        选择包间
      </div>
      <div @click="test" class="right">
        <div class="my-icon">
          <Server class="my-icon-right" />
          <div class="rid">{{logged ? `ID:${sid}` : 'Login'}}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Server from '../../common/icon/server.svg'
import Logout from '../../common/icon/logout.svg'
const EVENT_LOGOUT = 'logout'
export default {
  name: 'room-header',
  props: {
    logged: {
      type: Boolean,
      default() {
        return false
      }
    },
    sid: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      login: false
    }
  },
  methods: {
    test() {
      window.location = '/login'
    },
    toLogin() {
      if (!this.logged) {
        window.location = '/login'
      }
    },
    logout() {
      this.$emit(EVENT_LOGOUT)
    }
  },
  components: {
    Server,
    Logout
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .room-header
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    height: 60px
    top: 0
    width: 100%
    z-index: 9
    box-shadow: 0 2px 6px rgba(0,0,0,.2)
    .content-wrapper
      display: flex
      align-items: center
      justify-content: space-between
      font-size: $fontsize-large-xx
      padding-right: 20px
      padding-left: 20px
      height: 45px
      .left
        width: 32px
      .middle
        color: $color-orange
      .my-icon
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        color: $color-orange
        font-size: 10px
      .my-icon-right
        margin-bottom: 5px
        .rid
          width: 32px
          height: 13px
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center
      .to-login
        color: $color-orange
        margin-right: 10px
</style>

