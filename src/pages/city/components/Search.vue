<template>

  <div>
    <div class="search">
      <input class="search-input"
             type="text"
             placeholder="输入城市名或拼音" v-model="keyword"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword"> <!--没有字母的时候不显示-->
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: "",
        list: [],
        timer: null
      }
    },
    computed:{
      hasNoData(){
      return !this.list.length
      }
    },
    methods:{
      handleCityClick(city) {
        this.$store.commit("changeCity", city)
        this.$router.push('/')
      }
    },
    watch: { //todo 监听器后面是冒号,注意区别
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword){
          this.list=[]
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)

      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search) //需要滑动的dom节点元素
    },
  }
</script>

<style lang="stylus" scoped>
  .search {
    height: 0.72rem;
    background: #00bcd4;
    padding: 0.05rem;
  }

  .search-input {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    width: 95%;
    box-sizing: border-box;
    padding: 0.01rem;
    margin-top: 0.12rem;
    text-align: center;
    border-radius: 0.05rem;
    color: #666666;
  }

  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
  }
  .search-item{
    line-height: .62rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
  }
</style>
