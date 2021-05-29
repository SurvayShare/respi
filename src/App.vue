<template>
  <v-app>
    <v-toolbar app style="max-height:9%">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import UserApi from '@/api/UserApi'
import store from '@/store';

export default {
  name: 'App',
  async mounted() {
    const userApi = new UserApi;
    console.log(store.state.accessToken);
    const { username, email } = await userApi.getUserInfo(store.state.accessToken);
    console.log(username, email)
  },
  data(){
    return {
      appTitle: 'ReciPi',
      menuItems: [
          { title: 'Recipes', path: '/', icon: 'home' },
          { title: 'Orders', path: '/order', icon: 'face' },
          { title: 'User Info', path: '/user_info', icon: 'lock_open' }
     ]
    }
  },
  
};
</script>

