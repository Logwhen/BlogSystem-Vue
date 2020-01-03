import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;


var addfavour = function (blogid) {
    return htr('/favourates/insert', 'post', {blogid});
}

var getfavour=function() {
    return htr('/favourates/get','get')
}

export default {
    addfavour,
    getfavour,
}