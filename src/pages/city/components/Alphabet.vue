<template>
  <ul class="list">
    <li class="item"
        v-for="itme of letters"
        :key="itme"
        :ref="itme"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      {{itme}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false,
        startY:0,
        timer:0
      }
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: { //todo 这里主要是做了两个世界，从list角度只需要元素，所以只用元素就行了
      handleLetterClick(e) {
        //console.log(e.target.innerText)
        this.$emit("change", e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          if (this.timer){
            clearTimeout(this.timer)
          }
          this.timer=setTimeout(()=>{//代码做性能 优化
//const startY = this.$refs['A'][0].offsetTop //A元素距离顶部的高度
            const touchY = e.touches[0].clientY - 79//算出手指距离标题栏的高度
            const index = Math.floor((touchY - this.startY) / 20)//字母的高度，定位出字母
            //console.log(index)
            if (index >= 0 && index < this.letters.length) {
              this.$emit("change", this.letters[index])
            }
          },16)

        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      },
    },
    //页面数据更新成功之后
    updated(){
      this.startY=this.$refs['A'][0].offsetTop//A元素距离顶部的高度
    }
  }
</script>

<style lang="stylus" scoped>
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
  }

  .item {
    text-align: center;
    line-height: .4rem;
    color: #00bcd4;
  }
</style>
