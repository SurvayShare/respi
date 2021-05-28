class BaseApi {

  constructor(local_var_path) {
    this.api_url = process.env.API_URL || 'http://api-recipe.us-east-1.elasticbeanstalk.com/api';
    this.local_var_path = local_var_path;
  }

  get path() {
    return `${this.api_url}${this.local_var_path}`
  }
}

exports.default = BaseApi