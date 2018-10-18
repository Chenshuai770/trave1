<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>

        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for="itme of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>


        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>

        </div>

        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>

        </div>


        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "CityList",
    props:{
      hot:Array,
      cities:Object
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper)
    }



  }
</script>

<style lang="stylus" scoped>
  .list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .title {
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
  }

  .border-topbottom {
    border-bottom: 0.01rem solid #ccc;
  }

  .button-list {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
  }

  .button-wrapper {
    float: left;
    width: 33.33%;
  }

  .button {
    margin: .1rem;
    text-align: center;
    border: 0.02rem solid #ccc;
    padding: 0.1rem 0rem;
    border-radius: .03rem;
  }

  .item {
    line-height: .76rem;
    color: #666;
    padding-left: 0.2rem;
  }

  .border-bottom {
    border-bottom: 0.01rem solid #ccc;
  }

</style>
