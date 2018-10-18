<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from "./components/Header"
  import CitySearch from "./components/Search"
  import CityList from "./components/List"
  import CityAlphabet from "./components/Alphabet"
  import axios from 'axios'

  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data(){
      return{
        hotCities:[],
        cities:{}
      }
    },
    methods:{
      getCityInfo(){
        axios.get("/static/mock/city.json")
          .then((res) => {
            res=res.data
            if (res.ret){
              const data=res.data;
              console.log(data)
              this.hotCities=data.hotCities
              this.cities=data.cities
            }
          })
      }
    },
    mounted() {
      this.getCityInfo()

    }
  }
</script>

<style lang="stylus" scoped>


</style>
