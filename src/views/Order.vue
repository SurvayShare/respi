<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderApi from '../api/OrderApi'
export default {
    name:'Order',
    data(){
        return{
            orders:[],
            headers:[          
            {
                text: 'Customer',
                align: 'start',
                sortable: false,
                value: 'customer_name',
            },
          ],
        }
    },
    async created(){
        if (!this.isLogin){
            this.$router.push({name:'Login'})
        }
        const orderApi = new OrderApi;
        this.orders = orderApi.getOrders();

    },
    computed: {
        ...mapGetters([
            "isLogin"
        ])
    }
}


</script>
