<template>
    <div class="payform-container">

        <h3>Enter details</h3>

        <v-divider></v-divider><br>

        <form @submit.prevent="submit">

            <v-text-field
            v-model="name"
            label="Customer Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="city"
            label="City"
            required
            ></v-text-field>

            <v-text-field
            v-model="address"
            label="Address"
            required
            ></v-text-field>

            <v-text-field
            v-model="state"
            label="State"
            required
            ></v-text-field><br>
        <small>Confirm your order</small><br><br>
        <v-data-table
            :headers="headers"
            :items="getOrderFood"
            :items-per-page="5"
            class="elevation-1"
        >
        <template v-slot:item.img_url="{ item }">
            <img :src="item.img_url" style="width: 50px; height: 50px" />
        </template>
        </v-data-table><br><br>



        <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
        >
            Buy
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
        </form><br>

    </div>



</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import store from '../store/index';
export default {
    name:"OrderPay",
    components: {
    },
    props:{
        recipe: Object,
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      headers: [
            {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'img_url',
            },
            { text: 'Name', value: 'name' },
            { text: 'Amount', value: 'count' },
            { text: 'Unit', value: 'unit' },

      ],
      checkbox: null,
    }),
    methods: {
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
      submit(){
          axios.post('http://api-recipe.us-east-1.elasticbeanstalk.com/api/v1/purchase_orders', {
              address: this.address,
              city: this.city,
              customer_name: this.name,
              state:this.state,
              country: this.country,
              purchase_order_items:[ this.getOrderFood ]
          },
          {
              headers: {'Authorization': `Bearer ${store.state.accessToken}`}
          })
          console.log(this.address)
      }
    },
    computed: {
        ...mapGetters([
        "isLogin",
        "getOrderFood"
        ])
    },
    created(){
        if (!this.isLogin){
            this.$router.push({name:'Login'})
        }
    },
}
</script>

<style scoped>
.payform-container{
    width: 500px;
    padding-top:50px;
    margin: 0 auto;

}
</style>