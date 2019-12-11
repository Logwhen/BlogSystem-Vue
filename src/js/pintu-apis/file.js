var COS = require('cos-js-sdk-v5');

function UUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

var getAuthorization = function(){
    var cos = new COS({
        getAuthorization: function (options, callback) {
            $.get('http://121.199.79.177:9999/api/v1/file/credential', {
            }, function (data) {
                data=JSON.parse(data);
                var credentials = data.credentials;
                callback({
                    TmpSecretId: credentials.tmpSecretId,
                    TmpSecretKey: credentials.tmpSecretKey,
                    XCosSecurityToken: credentials.sessionToken, // 需要提供把 sessionToken 传给
                    ExpiredTime: data.expiredTime,
                    ScopeLimit: true, // 细粒度控制权限需要设为 true，会限制密钥只在相同请求时重复使用
                });
            });
        }
    });
    return cos;
}

//上传文件，文件名会重新自动生成独一无二的编码并作为返回值返回，因此上传后需要获取腾讯云的文件名
var uploadFile = function(file, path){
    let cos=getAuthorization();
    let filename = UUID() + file.name;
    cos.putObject({
        Bucket: 'publicmessage-1259081301',
        Region: 'ap-shanghai',
        Key: '/together' + path + '/' + filename,
        Body: file,
        }, function (err, data) {
            console.log('[TencentCloud / Upload]', err || data);
    });
    return filename;
}

var getFileUrl = function(file, path){
    let cos = getAuthorization();
    let url = cos.getObjectUrl({
        Bucket: 'publicmessage-1259081301',
        Region: 'ap-shanghai',
        Key: '/together' + path + '/' +file
    });
    console.log("[TencentCloud / GetUrl]",url);
    return url;
}


export default {
    uploadFile,
    getFileUrl,
}