<template>
  <div id="app">
    <keep-alive><!--加载完一次放入内存中,不需要重新去渲染-->
      <router-view/>  <!--当前使用了路由,会跳转到路由对应的文件列表进去-->
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>
