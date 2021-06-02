const axios = require('axios'); //获得axios
const BaseApi = require('./BaseApi.js').default;


class OrderApi extends BaseApi {
  constructor(access_token) {
    super('/v1/purchase_orders');
    this.access_token = access_token;
  }

  async getOrders() {
    const response = await axios.get(this.path, {}, { headers: this.headers });
    return response.data.data.purchase_orders;
  }

  get headers() {
    return { 'Authorization': `Bearer ${this.access_token}`}
  }

  async postOrder(orderData){
    orderData.purchase_order_items = this.toOrderItem(orderData.purchase_order_items);
    console.log(orderData)
    const response = await axios.post('http://api-recipe.us-east-1.elasticbeanstalk.com/api/v1/purchase_orders', orderData, { headers: this.headers })
    if(response.data.message !== 'success'){
      return response.data.data
    }else{
      throw 'Order created fail';
    }
  }

  toOrderItem(items) {
    return items.map((item) => {
                      return {count: item.count, unit: item.unit, id: item.id}
                    })
  }
}

export default OrderApi;