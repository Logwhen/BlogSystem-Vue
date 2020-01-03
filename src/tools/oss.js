import co from 'co'
var OSS = require('ali-oss');

const OSSConfig = {
	uploadHost: 'http://whitealbum.oss-cn-beijing.aliyuncs.com', //OSS上传地址
	type: 'scs',
	ossParams: {
		region: 'oss-cn-beijing',
		success_action_status: '200', // 默认200
		accessKeyId: 'LTAI4Fth4afrtSPEA55FnXfe',
		accessKeySecret: '5SWPdCDJtWNBRkVL9UwsNsHFkzbuG9',
		bucket: 'whitealbum',
	},
}

function random_string(len) {
	len = len || 32
	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
	var maxPos = chars.length
	var pwd = ''
	for (let i = 0; i < len; i++) {
		pwd += chars.charAt(Math.floor(Math.random() * maxPos))
	}
	return pwd
}

/**
 *
 * @param event 上传图片的资源路径
 * @param type 图片资源类型
 * @param dir oss要保存的文件夹
 * @returns {OSS文件路径}
 */

function uploadOSS(event, type,dir = 'album/') {
    return new Promise((resolve, reject) => {
        var client = new OSS({
            region: OSSConfig.ossParams.region,
            accessKeyId: OSSConfig.ossParams.accessKeyId,
            accessKeySecret: OSSConfig.ossParams.accessKeySecret,
            bucket: OSSConfig.ossParams.bucket,
            withCredentials: true,
            crossDomain:true,
        });
        var file=[];
        var randomName=[];
        var imgUrl=[];
        if (type == 0) {
            file[0] = event;
        } else {
            for(let i=0;i<type;i++){
                file[i] = event.target.files[i];
            }
        }
        for(let i=0;i<type;i++){
            randomName[i] = `${dir}${random_string(6)}_${file[i].name}`;
        }
        
        co(function* () {
            var imgUrl=[];
            for(let i=0;i<type;i++){
                var result = yield client.multipartUpload(randomName[i], file[i]);
                imgUrl[i]=`${result.name}`;
                console.log("oss");
                console.log(`${OSSConfig.uploadHost}/${result.name}`);
            }
            resolve(imgUrl);
            
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
}

export { uploadOSS }
