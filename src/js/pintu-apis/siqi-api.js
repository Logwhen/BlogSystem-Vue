import httpRequest from '../httpRequest'
var htr = httpRequest.httpRequest;

var GetTasks = function (project_id) {
    return htr('/api/v1/project/' + project_id + '/task', 'get', {});
}

var GetSetTasks = function (task_id) {
    return htr('/api/v1/task/' + task_id, 'get', {});
}

var DeleteTask = function (project_id,task_id) {
    console.log("delete");
    return htr('/api/v1/project/' + project_id+'/task/'+task_id, 'delete', {});
}

var AddTask=function(project_id,value){
    return htr('/api/v1/project/' + project_id+'/task', 'post', {"state":value});
}

var ChangeState=function(project_id,value){
    return htr('/api/v1/project/' + project_id, 'post', {"states":value});
}

var PostTaskUser = function (task_id, newUser) {
    htr('/api/v1/task/' + task_id , 'post',{"relatedUser":newUser});
    return;
}
var PostTaskTimeStart = function (task_id, starttime) {
    htr('/api/v1/task/' + task_id , 'post',{"timeStart":starttime});
    return;
}
var PostTaskTimeEnd = function (task_id, endtime) {
    htr('/api/v1/task/' + task_id , 'post',{"timeEnd":endtime});
    return;
}
var PostTaskTitle = function (task_id, title) {
    htr('/api/v1/task/' + task_id , 'post',{"title":title});
    return;
}
var PostTaskDescription = function (task_id, des) {
    htr('/api/v1/task/' + task_id , 'post',{"description":des});
    return;
}

export default {
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