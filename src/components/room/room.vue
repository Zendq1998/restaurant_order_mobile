<template>
  <div class="romm">
    <span class="number">{{room.rid}}</span>
  </div>
</template>

<script>
export default {
  name: 'room',
  props: {
    room: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .room
    display: inline-block
    
</style>


