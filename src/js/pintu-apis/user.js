import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;


var login = function (user) {
    return htr('/login', 'post', user);
}

var register = function (user) {
    return htr('/SignUp', 'post', user);
}

var getUser = function (id) {
    return htr('user/findUser', 'get');
}

var updateUser = function (id, user) {
    return htr('/api/v1/user/'+id, 'post', user);
}

export default {
    login,
    register,
    getUser,
    updateUser,
}