import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;


var login = function (user) {
    return htr('/login', 'post', user);
}

var register = function (user) {
    return htr('/SignUp', 'post', user);
}

var getUser = function () {
    return htr('userInfo/get', 'get');
}

var getBlog = function (user) {
    return htr('/blog/getcur', 'get');
}

var updateUser = function (id, user) {
    return htr('/api/v1/user/'+id, 'post', user);
}

var updatePicture = function (pictureUrl){
    return htr('/picture/insert','post',pictureUrl);
}

var getPicture = function (){
    return htr('/picture/get','get',{});
}
export default {
    login,
    register,
    getUser,
    updateUser,
    getBlog,
    updatePicture,
    getPicture,
}