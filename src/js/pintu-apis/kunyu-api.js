import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;

//example
var kunyu_example = function () {
    //htr返回一个Promise，前端要取得它请求得到的值需要加await
    //参数：1.url，2.method，3.parameters
    return htr('/api/v1/user/1', 'get', {});
}

export default{
    kunyu_example,
}