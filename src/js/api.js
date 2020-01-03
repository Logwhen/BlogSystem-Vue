import httpRequest from './httpRequest'
var htr = httpRequest.httpRequest;

import userApi from './pintu-apis/user'
var register = userApi.register;
var updateUser = userApi.updateUser;
var updatePicture=userApi.updatePicture;
var getPicture=userApi.getPicture;


export default {
    htr,
    //example from caocao
    userApi,
    register,
    updateUser,
    updatePicture,
    getPicture,
    //下面开始export你们的
 

}
