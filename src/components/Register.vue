<template>
    <div id="register">
        <img class="logo" src="@/src/assets/logo.png">
        <div class="welcome">
            感谢使用blog，如已经注册过帐号，点击登录按钮进入登录界面
        </div>
        <div class="reg-btn" @click="routeTo('login')">登录</div>
        <div class="input-box">
            <div class="input-text">
                <div class="icon">
                    <font-awesome-icon :icon="['fas','user']" />
                </div>
                <input v-model="user.username" type="text" placeholder="  Enter username"/>
            </div>
            <div class="input-text-1">
                <div class="icon">
                    <font-awesome-icon :icon="['fas','lock']" />
                </div>
                <input v-model="user.password" type="text" placeholder="  Enter password"/>
            </div>
            <div class="log-btn" @click="register(isFormCorrect)">注册</div>
        </div>
    </div>
</template>

<script>
    import { Notification } from 'element-ui';
    export default {
        name: "Register",
        data () {
            return {
                isFormCorrect:{
                    isNameCorrect:false,
                    isPasswordCorrect:false,
                    isPasswordEqualsRepassword:false,
                },
                user:{
                    username:null,
                    password:null,
                }
            }
        },
        methods: {
            routeTo:function(des){
                this.$router.push(des);
            },
            register: async function(formResult){
                //let result = this.isFormCorrect.isEmailCorrect && 
                //    this.isFormCorrect.isPasswordCorrect && 
                //    this.isFormCorrect.isPasswordEqualsRepassword;
                let result=true;
                console.log(this.user.username);
                //if(result){
                    let res = await this.api.userApi.register(this.user)
                    console.log(res);
                    if(res.data.status=="200"){
                        Notification({
                            title:"注册成功",
                            type:"success"
                        })
                        this.routeTo('login');
                    }else if(res.data.status=="500"){
                        Notification({
                            title:"注册失败，可能是邮箱名已被占用",
                            type:"error"
                        })
                    }
                //}
            }
        }
    }
</script>

<style lang="scss" scoped>
#register{
    position: fixed;
    background-size: 100% 100%;
    background: #7B8B6F;
    width: 100%;
    height: 100%;
    align-items: center;
    font-weight:400;

    .logo{
        width: 300px;
        height: 215px;
    }

    .welcome{
        position: absolute;
        left: 117px;
        top:300px;
        width: 482px;
        height: 151px;
        font-size: 36px;
        font-family: 'PingFang SC';
        color: #4a4a4a;
    }

    .reg-btn{
        position: absolute;
        left: 117px;
        top: 471px;
        width: 212px;
        font-size: 30px;
        background: #b5c4b1;
        color: #4a4a4a;
        text-align: center;
    }
    .log-in-btn{
        position: absolute;
        left: 117px;
        top: 471px;
        width: 212px;
        font-size: 30px;
            background: #fff;
            color: #3DA8F5;
            text-align: center;
        }
    .input-box{
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 382px;
        background: #b5c4b1;
        top: 300px;
        left: 816px;
    }
    .register-text{
        width: 500px;
        height: 50px;
        font-size: 50px;
        color: #4a4a4a;
        text-align:center;
        margin-top: 27px;
        font-family: 'Alibaba Puhui';
        margin-bottom: 40px;
    }
    .input-text{
        position: relative;
        height: 70px;
        width: 460px;
        font-size: 18px;
        margin-left: 20px;
        margin-top: 60px;
        .icon{
            position: absolute;
            // display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70px;
            width: 50px;
        }
    }

    .input-text-1{
        position: relative;
        height: 70px;
        width: 460px;
        font-size: 18px;
        margin-left: 20px;
        margin-top: 30px;
        .icon{
            position: absolute;
            // display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70px;
            width: 50px;
        }
    }

    .log-btn{
        margin-left: 175px;
        margin-top: 50px;
        position: relative;
        height: 50ox;
        width: 150px;
        font-size: 24px;
        background: #fdf9ee;
        color: #4a4a4a;
        text-align: center;

    }

}

input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    background: #ffffff; 
    padding: 10px;
    padding-left: 38px;
}


input::-webkit-input-placeholder{
    color:#c4c4c4;
}

input:focus{
    border: #ccc solid 1px;
    padding: 9px;
    padding-left: 37px;
}
</style>