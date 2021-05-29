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

export default {
  name: 'App',

  data(){
    return {
      appTitle: 'ReciPi',
      menuItems: [
          { title: 'Recipe', path: '/', icon: 'home' },
          { title: 'Orders', path: '/order', icon: 'face' },
          { title: 'User Info', path: '/userInfo', icon: 'lock_open' }
     ]
    }
  },
  
};
</script>

