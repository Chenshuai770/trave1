<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      内容
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span> <!--这里不引入无法实现其效果-->
      </div>
    </router-link>
  </div>
</template>
<!--脚本里面接受数据 通过props对象-->
<script>
  import { mapState} from 'vuex'
  export default {
    name: "HomeHeader", /*将组建名称暴露出去*/
    props: {
      city: String
    },
    computed:{
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped> /*使用第三方stylus的样式,scoped 限制当前样式只作用在当前组件*/
/*1rem=html font-size=50px */

.header {
  display: flex;
  line-height: .86rem;
  height: .86rem;
  background: #00bcd4;
  color: #fff;
}

.header-left {
  width: .64rem;
  float: left;
  margin-left: 0.2rem;
}

.back-icon {
  text-align: center;
  font-size: .4rem;
}

.header-input {
  flex: 1;
  background: #fff;
  border-radius: .1rem;
  margin-top: .18rem;
  margin-left: .2rem;
  line-height: 0.55rem;
  margin-bottom: .2rem;
  padding-left: 0.2rem;
  color: #000000;

}

.header-right {
  min-width: 1.04rem;
  float: right;
  margin-right: 0.1rem;
  text-align: center;
  margin-left: 0.1rem;
  color: black;
}

.arrow-icon {
  font-size: 0.2rem;
}


</style>
