<template>
  <div class="wrapper">
    <swiper :options="swiperOption"  v-if="showswipered"> <!--加载完城数据后去加载数据-->
      <!-- slides -->
      <swiper-slide v-for="item of list " :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls 点的集合-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props:{
      list:Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop:true,
          autoplay:1500,
          autoplayDisableOnInteraction : false,
          speed:2


        }}
    },
    computed:{
      showswipered(){
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .wrapper >>> .swiper-pagination-bullet-active {
    background: #fff
  }
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 3rem;
    background: #ccc;
  }
  .swiper-img {
    width: 100%;
    height: 3rem;
  }
</style>
