import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: Cookies.get("accessToken"),
    expiresIn: null,
    foods: Cookies.get("cart"),
  },
  mutations: {
    AUTH(state, payload) {
      localStorage.setItem('refresh_token', payload.refresh_token)
      state.accessToken = payload.access_token;
      state.expiresIn = payload.expires_in;
      Cookies.set("accessToken", payload.access_token, payload.expires_in);
    },
    LOGIN(state) {
      if(state.accessToken){
        state.accessToken = Cookies.get("accessToken");
      }
    },
    LOGOUT(state) {
      state.accessToken = null;
      Cookies.remove('accessToken');
      localStorage.removeItem('refresh_token');
    },
    ADDTOCART(_state, payload){
      Cookies.set("cart", payload.foods, 36000);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getAccessToken: () => {
      return Cookies.get("accessToken");
    },
    isLogin: (_state, getters) => {
      return getters.getAccessToken ? true : false;
    },
    getOrderFood: (state) =>{
      return JSON.parse(state.foods) 
    }
  }
})
