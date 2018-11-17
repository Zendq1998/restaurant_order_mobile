<template>
  <div id="app">
    <go-back></go-back>
    <order-header :seller="seller" :rid="rid"></order-header>
    <order :rid="rid"></order>
    <!-- <div class="tab-wrapper">
      <tab :tabs="tabs" :initialIndex="0"></tab>
    </div> -->
    <!-- <goods :data="data" :goods="goods"></goods> -->
  </div>
</template>

<script>
  // import VHeader from 'components/v-header/v-header'
  import OrderHeader from 'components/order-header/order-header'
  import Order from 'components/order/order'
  import GoBack from 'components/go-back/go-back'
  // import Tab from 'components/tab/tab'

  // import { getSeller, getGoods } from 'api'
  import { getSeller } from 'api'

  export default {
    name: 'app',
    data() {
      return {
        // data: {
        //   seller: {}
        // },
        // goods: [],
        seller: {},
        rid: 0
      }
    },
    computed: {
      // tabs() {
      //   return [
      //     {
      //       label: '商品',
      //       component: Goods,
      //       data: {
      //         seller: this.seller
      //       }
      //     },
      //     {
      //       label: '评价',
      //       component: Rating,
      //       data: {
      //         seller: this.seller
      //       }
      //     },
      //     {
      //       label: '商家',
      //       component: Seller,
      //       data: {
      //         seller: this.seller
      //       }
      //     }
      //   ]
      // }
    },
    created() {
      this._getSeller()
      // this._getGoods()
      this.rid = this.$route.params.id + ''
    },
    methods: {
      _getSeller() {
        getSeller()
          .then((seller) => {
            this.seller = seller
            // this.data.seller = seller
          })
      },
      // _getGoods() {
      //   getGoods()
      //   .then((goods) => {
      //     this.goods = goods
      //   })
      // }
    },
    components: {
      // VHeader,
      // Tab,
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
