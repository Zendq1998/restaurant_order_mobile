<template>
  <div class="tab-wrapper">
    <room-header @logout="logout" :logged="logged" :sid="sid"></room-header>
    <div class="tab">
      <div class="slide-wrapper">
        <div class="goods">
          <div class="scroll-nav-wrapper">
            <cube-scroll-nav 
              :side=true
              :data="rooms"
              v-if="rooms.length"
            >
              <cube-scroll-nav-panel
                v-for="floor in rooms"
                :key="floor.floor"
                :label="floor.label"
                :title="floor.label"
              >
                <ul class="floor">
                  <li
                    v-for="room in floor.room"
                    :key="room.rid"
                    class="room-item"
                  >
                    <div class="room-item-container">
                      <div 
                        v-if="room.status==0" 
                        class="logo-item"
                        @click="toOrder(room.rid)"
                      >
                        <Dinner />
                      </div>
                      <div 
                        v-if="room.status==1" 
                        class="logo-item logo-item-locked"
                        @click="cantClickRoom"
                      >
                        <Lock />
                      </div>
                      <span class="room-id" :class="`room-id-${room.status}`">
                        {{room.rid}}
                      </span>
                    </div>
                  </li>
                </ul>
              </cube-scroll-nav-panel>
            </cube-scroll-nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { getRooms } from 'api'
import Dinner from '../../common/icon/dinner.svg'
import Lock from '../../common/icon/lock.svg'
import RoomHeader from 'components/room-header/room-header'
import { getCookie, deletCookie } from '../../cookie'

export default {
  name: 'rooms',
  data() {
    return {
      rooms: [],
      logged: false,
      sid: ''
    }
  },
  created() {
    if (getCookie('logged_in') === 'yes') {
      this.logged = true
      this.sid = getCookie('sid')
    }
    this._getRooms()
  },
  methods: {
    _getRooms() {
      getRooms()
        .then((rooms) => {
          rooms.forEach((floor) => {
            floor.label = `${floor.floor}楼`
          })
          this.rooms = rooms
        })
    },
    cantClickRoom() {
      this.$createDialog({
        title: `该房间未开启～`
      }).show()
    },
    toOrder(rid) {
      if (this.sid) {
        window.location = `/order/${this.sid}/${rid}`
      }
      else {
        this.$createDialog({
          type: 'confirm',
          content: `订餐需要服务员权限，确认登录？`,
          $events: {
            confirm: () => {
              window.location = `/login`
            }
          }
        }).show()
      }
    },
    logout() {
      deletCookie('sid')
      deletCookie('logged_in')
      location.reload()
    }
  },
  components: {
    Dinner,
    Lock,
    RoomHeader
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .tab-wrapper
      position: fixed
      top: 0px;
      left: 0
      right: 0
      bottom: 0
    .tab
      display: flex
      flex-direction: column
      height: 100%
      .slide-wrapper
        flex: 1
        overflow: hidden
        .goods
          position: relative
          text-align: left
          height: 100%
          .scroll-nav-wrapper
            position: absolute
            width: 100%
            top: 0
            left: 0
            bottom: 0
          >>> .cube-sticky-fixed
            border-right: 1px solid $color-background-ssss
          >>> .cube-scroll-wrapper
            background: $color-white
            width: 100%
          >>> .cube-scroll-nav-bar
            width: 80px
            white-space: normal
            overflow: hidden
          >>> .cube-scroll-nav-bar-item
            padding: 0 10px
            display: flex
            align-items: center
            justify-content: center
            height: 86px
            line-height: 14px
            font-size: $fontsize-small
            background: $color-white
            border-bottom: 1px solid $color-col-line
          >>> .cube-scroll-nav-bar-item_active
            background: $color-orange
            color: $color-white
          >>> .cube-sticky-ele
            height: 1px
          >>> .cube-scroll-nav-panel-title
            padding-left: 14px
            height: 32px
            line-height: 32px
            border-left: 2px solid $color-col-line
            font-size: $fontsize-small
            color: $color-orange
            background: $color-white
          .floor
            display: flex
            flex-direction: row
            flex-wrap: wrap
            padding-bottom: 30px
            padding-top: 30px
            justify-content: space-between
            background: $color-background-ssss
            .room-item
              display: flex
              margin: 18px
              padding-bottom: 18px
              position: relative
              .room-item-container
                display: flex
                flex-direction: column
                justify-content: center
                .logo-item
                  width: 50px
                  height: 50px
                  line-height: 57px
                  text-align: center
                  border-radius: 100%
                  background: $color-green
                  color: $color-white
                  font-size: $fontsize-large-xxxx
                .logo-item-locked
                  background: $color-red
                .room-id
                  text-align: center
                  margin-top: 10px
                .room-id-1
                  color: $color-red
                .room-id-0
                  color: $color-green
            
</style>


