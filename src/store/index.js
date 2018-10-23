import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
  state: state,//todo 键和值是一样的,可以只简写键
  /* actions:{//提交到这一步一般是做耗时的异步操作
     changeCity(ctx,city){
       ctx.commit("changeCity",city)
     }
   },*/
  mutations: mutations
})
