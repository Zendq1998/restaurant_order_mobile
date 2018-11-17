<template>
  <div class="goback" @click="goBack">
    <img height="16px" width="16px" src="../../common/icon/back.png" >
  </div>
</template>

<script>
export default {
  name: 'go-back',
  methods: {
    goBack() {
      window.history.back()
    }
  }
}
</script>


<style lang="stylus" scoped>
  .goback
    position: fixed
    top: 7px
    left: 7px
    z-index 90
</style>
