<template>
  <div id="app">
    <go-back></go-back>
    <order-header :seller="seller" :rid="rid" :sid="sid"></order-header>
    <order :rid="rid"></order>
  </div>
</template>

<script>
  import OrderHeader from 'components/order-header/order-header'
  import Order from 'components/order/order'
  import GoBack from 'components/go-back/go-back'
  // import { getSeller } from 'api'
  import Seller from '../../../seller.json'

  export default {
    name: 'app',
    data() {
      return {
        seller: {},
        rid: '0',
        sid: '028'
      }
    },
    computed: {
    },
    created() {
      this._getSeller()
      this.rid = this.$route.params.rid + ''
      this.sid = this.$route.params.sid + ''
    },
    methods: {
      _getSeller() {
        this.seller = Seller.seller
        // getSeller()
        //   .then((seller) => {
        //     this.seller = seller
        //   })
      }
    },
    components: {
      Order,
      OrderHeader,
      GoBack
    }
  }
</script>
<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position: fixed
      top: 136px;
      left: 0
      right: 0
      bottom: 0
</style>
