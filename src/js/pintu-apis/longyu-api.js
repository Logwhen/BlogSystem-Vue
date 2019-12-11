import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;

//example
var GetUserProject = function (id) {
    //htr返回一个Promise，前端要取得它请求得到的值需要加await
    //参数：1.url，2.method，3.parameters
    return htr('/api/v1/user/'+id+'/project', 'get', {});
}

var GetProjectMember = function (id) {
    return htr('/api/v1/project/'+id+'/user','get',{});
}

var GetProjectInformation= function (id) {
    return htr('/api/v1/project/'+id,'get',{});
}
export default{
    GetUserProject,
    GetProjectMember,
    GetProjectInformation,
}
