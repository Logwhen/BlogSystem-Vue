import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;


var writecom = function (comment) {
    return htr('/comment/add', 'post', comment);
}

var getcom=function(comments) {
    return htr('/comment/get', 'post',comments);
}

export default {
    writecom,
    getcom,
}