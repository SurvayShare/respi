<template>
<div class="container">
  <v-card
    class="mx-auto"
    width="256"
    tile
  >
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ info_username }}
            </v-list-item-title><br><br>
            <v-list-item-subtitle>{{ info_email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
  </v-card>
</div>
</template>

<script>
import UserApi from '@/api/UserApi'
import store from '@/store';

export default {
  name: 'UserInfo',
  data(){
      return{
          info_username: String,
          info_email: String,
      }
  },
  async created() {
    const userApi = new UserApi;
    console.log(store.state.accessToken);
    const {username, email} = await userApi.getUserInfo(store.state.accessToken);
    this.info_username = username;
    this.info_email = email;
    console.log(this.info_username,this.info_email)
    
  },
  
};
</script>

<style scoped>
.container{
    margin-top: 50px;
}
</style>