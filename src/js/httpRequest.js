/* httpRequest.js
 * Copyright @author: chaoszh
 * Time 2019-10-17
 */

/*axios*/
//httpRequest
import axios from 'axios'
import qs from 'qs'

// var baseURL = process.env.VUE_APP_BASE_API; //开发配置接口地址
var baseURL = 'http://121.199.79.177:9999'; //生产配置接口地址

axios.defaults.baseURL = baseURL;

function httpRequest(url, method, params = {}) {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-console
        console.log('[CHAOSZH url]', method.toUpperCase(), baseURL + url);
        console.log('[CHAOSZH params]', params);
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: method,
            url: url,
            data: JSON.stringify(params),
            dataType: 'json',
            withCredentials: false,
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export default {
    httpRequest,
}