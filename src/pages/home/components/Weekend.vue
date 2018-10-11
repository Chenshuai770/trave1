
<template>
  <div>
    <ul>
      <li class="item" border-bottom v-for="(item,index) of list" :key="item.id" >
       <div class="item-div-img">
         <img class="item-img"
              :src="item.imgUrl"/>
       </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props:{
      list:Array
    }

  }
</script>

<style scoped>


  .item {
    display: inline;
    height: 1.9rem;
    /* background: red;*/

  }
  .item-div-img{
    width: 100%;
    height: 2rem;
  }
  .item-img{
    width: 100%;
    height: 1.8rem;
    padding: 0.1rem;
  }
  .item-info{
    flex: 1;
    padding: 0.1rem;
  }
  .item-title{
    margin-left: 0.2rem;
    line-height: .54rem;
    font-size: .32rem;

    /*这个属性是相当于maxline*/
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
