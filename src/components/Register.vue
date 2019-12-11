<template>
    <div id="login" style="background:#ffffff; width: 100vw;height: 100vh;">

        <div id="page1" v-show="isShowPage1">
            <div class="goback-btn" @click="routeTo('login')"></div>
            <div class="title">
                注册
            </div>
            <div class="description">
                请告诉我们，您的基本信息
            </div>
            <div class="input-description">
                邮箱
            </div>
            <div class="input-rect">
                <input type="text" id="email" v-model="user.email">
                <i class="input-message"></i>
            </div>
            <div class="input-description">
                用户名
            </div>
            <div class="input-rect">
                <input type="text" id="userName" v-model="user.userName">
                <i class="input-message"></i>
            </div>
            <div class="btn next-btn" @click="isShowPage1=false;">
                下 一 步
            </div>
        </div>

        <div id="page2" v-show="!isShowPage1">
            <div class="goback-btn" @click="isShowPage1=true;"></div>
            <div class="title">
                注册
            </div>
            <div class="description">
                很好，现在请设置您的密码
            </div>
            <div class="input-description">
                密码
            </div>
            <div class="input-rect">
                <input type="password" id="password" v-model="user.password">
                <i class="input-message"></i>
            </div>
            <div class="input-description">
                再次输入密码
            </div>
            <div class="input-rect">
                <input type="password" id="repassword" v-model="user.repassword">
                <i class="input-message"></i>
            </div>
            <div class="btn finish-btn" @click="register(isFormCorrect);">
                完 成
            </div>
        </div>
    </div>
</template>

<script>
    import {Notification} from 'element-ui';

    export default {
        name: "Register",
        data () {
            return {
                formResult:false,
                isFormCorrect:{
                    isEmailCorrect:false,
                    isPasswordCorrect:false,
                    isPasswordEqualsRepassword:false,
                },
                isShowPage1:true,
                user:{
                    email:null,
                    userName:null,
                    password: null,
                    repassword: null
                }
            }
        },
        mounted(){
            this.initDetection();
        },
        methods: {
            routeTo(des){
                this.$router.push(des);
            },
            register: async function(formResult) {
                // console.log(formResult);
                let result = this.isFormCorrect.isEmailCorrect && 
                    this.isFormCorrect.isPasswordCorrect && 
                    this.isFormCorrect.isPasswordEqualsRepassword;
                if(result){
                    let res = await this.api.register({
                        userName:this.user.userName,
                        email:this.user.email,
                        password:this.user.password,
                    })
                    if(res.data.state=="success"){
                        Notification({
                            title:"注册成功",
                            type:"success"
                        })
                        this.routeTo('login');
                    }else{
                        Notification({
                            title:"注册失败，可能是邮箱名已被占用",
                            type:"error"
                        })
                    }
                }
            },
            initDetection(){
                //export this to THIS
                var THIS = this;
                //邮箱表单验证
                this.$("input")[0].onchange=function(){
                    // console.log("[email]");
                    let regs = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                    if(regs.test(this.value)){
                        // console.log("[email] 格式正确");
                        THIS.isFormCorrect.isEmailCorrect=true;
                        THIS.$(".input-message")[0].style.color="green";
                        THIS.$(".input-message")[0].classList.add("el-icon-success");
                        THIS.$(".input-message")[0].classList.remove("el-icon-error");
                    }else{
                        // console.log("[email] 格式错误");
                        THIS.isFormCorrect.isEmailCorrect=false;
                        THIS.$(".input-message")[0].style.color="red";
                        THIS.$(".input-message")[0].classList.remove("el-icon-success");
                        THIS.$(".input-message")[0].classList.add("el-icon-error");
                        Notification({
                            title:"邮箱格式不正确",
                            type:"error"
                        })
                    }
                }
                //密码表单验证
                this.$("input")[2].onchange=function(){
                    // console.log("[password]");
                    // console.log(THIS.isFormCorrect);
                    if(THIS.$("input")[3].value!=""){
                        THIS.$("input")[3].onchange();
                    }
                    if(THIS.user.password.length<6){
                        THIS.isFormCorrect.isPasswordCorrect=false;
                        THIS.$(".input-message")[2].style.color="red";
                        THIS.$(".input-message")[2].classList.add("el-icon-error");
                        THIS.$(".input-message")[2].classList.remove("el-icon-success");
                        Notification({
                            title:"密码不得少于6个字符",
                            type:"error"
                        })
                    }else{
                        THIS.isFormCorrect.isPasswordCorrect=true;
                        THIS.$(".input-message")[2].style.color="green";
                        THIS.$(".input-message")[2].classList.add("el-icon-success");
                        THIS.$(".input-message")[2].classList.remove("el-icon-error");
                    }
                }
                this.$("input")[3].onchange=function(){
                    // console.log("[password]");
                    if(THIS.user.password!=THIS.user.repassword){
                        THIS.isFormCorrect.isPasswordEqualsRepassword=false;
                        THIS.$(".input-message")[3].style.color="red";
                        THIS.$(".input-message")[3].classList.add("el-icon-error");
                        THIS.$(".input-message")[3].classList.remove("el-icon-success");
                        Notification({
                            title:"用户两次输入密码不一致",
                            type:"error"
                        })
                    }else{
                        THIS.isFormCorrect.isPasswordEqualsRepassword=true;
                        THIS.$(".input-message")[3].style.color="green";
                        THIS.$(".input-message")[3].classList.add("el-icon-success");
                        THIS.$(".input-message")[3].classList.remove("el-icon-error");
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
#login{
    font-size: 13px;
    padding-top: .41rem;
    letter-spacing: .1em;
}

#page1, #page2{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0 10% 0 10%; 
    .goback-btn{
        height: 23px;
        width: 15px;
        background: url("./../assets/goback-btn.png");
        background-size: cover;
        margin-bottom: .55rem;
    }
    .title{
        font-size: 26px;
        font-weight: bold;
        margin-bottom: .15rem;
    }
    .description{
        font-size: 15px;
        font-weight: bold;
        margin-bottom: .43rem;
    }
    .input-rect{
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: .24rem;
    }
    .input-description{
        font-size: 12px;
        font-weight: bold;
        color: #A4A4A4;
    }
    .input-message{
        color:red;
        font-size: larger;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: 30px;
        width:83px;
        height:29px;
        background:rgba(191,191,191,1);
        border-radius:9px;
        font-size:12px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        // letter-spacing: .3em;
    }
    .finish-btn{
        background:rgba(52,97,187,1);
    }
}

input{
    background:none;
    border:none;
    border-bottom:1px solid #E5E5E5;
    height: .4rem;
    flex: 1;
    font-size: 14px;
    font-weight: bold;
    color: rgb(90, 90, 90);
}

</style>