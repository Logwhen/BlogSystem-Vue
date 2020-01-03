import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;


var writeblog = function (blog) {
    return htr('/blog/write', 'post', blog);
}

var showblog=function(){
    return htr('/blog/getcur', 'get');
}

var delblog=function(blogid){
    return htr('/blog/delete', 'DELETE', {blogid});
}

var seablog=function (searchString) {
    return htr('/blog/search', 'post',searchString);
}

export default {
    writeblog,
    showblog,
    delblog,
    seablog,
}