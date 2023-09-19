import { BASE_URL } from '../services/config.js'

class HyRequset {
   request(url, method, params){
    return new Promise((resolve, reject) => {
      my.request({
        url: BASE_URL + url,
        method: method,
        data: params,
        success: (res) => resolve(res.data),
        fail: reject
       })
    })
  }

  post(url, data) {
    return this.request(url, 'POST', data);
  }

  get(url, data) {
    return this.request(url, 'GET', data);
  }

}

export const hyRequest = new HyRequset();

