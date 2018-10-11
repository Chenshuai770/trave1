<template>

  <div class="search">
    <input class="search-input"  type="text" placeholder="输入城市名或拼音"/>
  </div>

</template>

<script>
  export default {
    name: "CitySearch"
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
</style>
