<template>
  <div class="goback" @click="goBack">
    <!-- <img height="16px" width="16px" src="../../common/icon/back.png" > -->
    <Back />
  </div>
</template>

<script>
import Back from 'common/icon/back.svg'
export default {
  name: 'go-back',
  methods: {
    goBack() {
      window.history.back()
    }
  },
  components: {
    Back
  }
}
</script>

<style lang="stylus" scoped>
  .goback
    position: fixed
    top: 0
    left: 12px
    z-index 90
</style>
