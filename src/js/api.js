import httpRequest from './httpRequest'
var htr = httpRequest.httpRequest;

//example from caocao
import fileApi from './pintu-apis/file'
var uploadFile = fileApi.uploadFile;
var getFileUrl = fileApi.getFileUrl;

import userApi from './pintu-apis/user'
import blogApi from './pintu-apis/blog'
import comApi from './pintu-apis/com'
var register = userApi.register;
var updateUser = userApi.updateUser;
var writeblog = blogApi.writeblog;
var showblog = blogApi.showblog;
var delblog = blogApi.delblog;
var seablog = blogApi.seablog;

var writecom=comApi.writecom;
var getcom=comApi.getcom;

//导入kunyu apis
import kunyuApi from './pintu-apis/kunyu-api'
import yunboApi from './pintu-apis/yunbo-api'

//给你的api命名
var kunyu_example=kunyuApi.kunyu_example;
var yunbo_get=yunboApi.yunbo_get;
var yunbo_post=yunboApi.yunbo_post;

import longyuApi from './pintu-apis/longyu-api'
var GetProjectMember=longyuApi.GetProjectMember;
var GetUserProject=longyuApi.GetUserProject;
var GetProjectInformation=longyuApi.GetProjectInformation;

import taskApi from './pintu-apis/siqi-api'
var GetTasks=taskApi.GetTasks;
var GetSetTasks=taskApi.GetSetTasks;
var PostTaskUser=taskApi.PostTaskUser;
var PostTaskTimeStart=taskApi.PostTaskTimeStart;
var PostTaskTimeEnd=taskApi.PostTaskTimeEnd;
var PostTaskTitle=taskApi.PostTaskTitle;
var PostTaskDescription=taskApi.PostTaskDescription;
var DeleteTask=taskApi.DeleteTask;
var AddTask=taskApi.AddTask;
var ChangeState=taskApi.ChangeState;


export default {
    htr,
    //example from caocao
    userApi,
    blogApi,
    uploadFile,
    getFileUrl,
    register,
    updateUser,
    writeblog,
    showblog,
    delblog,
    seablog,
    writecom,
    getcom,
    //下面开始export你们的
    
    yunbo_get,
    yunbo_post,

    kunyu_example,  //前端调用：this.api.kunyu_example
    GetUserProject,
    GetProjectMember,
    GetProjectInformation,

    GetTasks,
    GetSetTasks,
    PostTaskUser,
    PostTaskTimeStart,
    PostTaskTimeEnd,
    PostTaskTitle,
    PostTaskDescription,
    DeleteTask,
    AddTask,
    ChangeState,
}
