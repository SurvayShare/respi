import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    accessToken: Cookies.get("accessToken"),
    expiresIn: null
  },
  mutations: {
    AUTH(state, payload) {
      localStorage.setItem('refresh_token', payload.refresh_token)
      state.accessToken = payload.access_token;
      state.expiresIn = payload.expires_in;
      Cookies.set("accessToken", payload.access_token, payload.expires_in);
      state.isLogin = true;
    },
    LOGIN(state) {
      if(state.accessToken){
        state.accessToken = Cookies.get("accessToken");
        state.isLogin = true;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
