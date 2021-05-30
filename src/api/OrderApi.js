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
}

export default OrderApi;