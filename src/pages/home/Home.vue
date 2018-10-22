<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommed :list="recommendList"></home-recommed>
    <home-weekend :list="weekendList"></home-weekend>

  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommed from './components/Recommed'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommed,
      HomeWeekend
    },

    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo() {
        axios.get('/static/mock/index.json')
          .then((res) => {
            res = res.data
            if (res.ret) {
              this.swiperList = res.data.swiperList
              this.iconList = res.data.iconList
              this.recommendList = res.data.recommendList
              this.weekendList = res.data.weekendList

              //console.log(this.swiperList)
            }
          })
      }
    },

    /*一般请求数据在这个网络层*/
    mounted() {
      this.getHomeInfo()
    }
  }
</script>

<style>
  .home {
    font-size: 100px;
  }
</style>
