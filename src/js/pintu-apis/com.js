import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;


var writecom = function (comment) {
    return htr('/comment/add', 'post', comment);
}

var getcom=function(blogid) {
    return htr('/comment/get/'+blogid, 'post');
}

export default {
    writecom,
    getcom,
}