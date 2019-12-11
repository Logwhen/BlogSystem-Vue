import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;

var yunbo_get = function () {
    //htr返回一个Promise，前端要取得它请求得到的值需要加await
    //参数：1.url，2.method，3.parameters
    return htr('/api/v1//project/24/user', 'get', {});
}

var yunbo_post = function (id) {
    //htr返回一个Promise，前端要取得它请求得到的值需要加await
    //参数：1.url，2.method，3.parameters
    let xhr=htr('/api/v1/user/'+id+'/project/24', 'post', {});
    return xhr;
}

export default{
    yunbo_get,
    yunbo_post,
}