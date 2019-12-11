import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;


var login = function (user) {
    return htr('/login', 'post', user);
}

var register = function (user) {
    return htr('/api/v1/user', 'post', user);
}

var getUser = function (id) {
    return htr('/api/v1/user/'+id, 'get');
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