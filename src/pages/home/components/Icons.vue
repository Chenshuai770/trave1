<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon"
             v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent"
                 :src=item.imgUrl>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

  export default {
    name: "HomeIcons",
    props: {
      list: Array
    },
    data(){
     return{
       swiperOption:{
         autoplay:false
       }
     }
    },
    computed: {
      pages() {
        const pages = []
        /*定义一个空的数组 ,这里有个算法的问题*/
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)

        })
        return pages

      }
    }
  }
</script>

<style scoped>

  .icons >>> .swiper-container {
    width: 100%;
    height: 0;
    padding-bottom: 50%;

  }

  .icon {
    position: relative;
    overflow: hidden;

    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
  }

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .1rem;

  }

  .icon-imgcontent {
    display: block;
    margin: 0 auto;
    height: 100%;
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    color: #333;
    text-align: center;
    /*这个属性是相当于maxline*/
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
</style>
