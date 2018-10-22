import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    city:"杭州"
  },
 /* actions:{//提交到这一步一般是做耗时的异步操作
    changeCity(ctx,city){
      ctx.commit("changeCity",city)
    }
  },*/
  mutations:{
    changeCity(state,city){
      state.city=city
    }
  }
})
