<template>
    <div id="Login">
        <div class="logo">
            blog
        </div>
        <div class="input-rect">
            <div class="icon">
                <font-awesome-icon :icon="['fas','user']" />
            </div>
            <input v-model="user.username" type="text" placeholder="Enter username"/>
        </div>

        <div class="input-rect">
            <div class="icon">
                <font-awesome-icon :icon="['fas','lock']"/>
            </div>
            <input v-model="user.password" type="password" placeholder="Enter password"/>
        </div>

        <div class="btn-rect">
            <div class="btn sign-up-btn" @click="goto()">
                Sign up
            </div>
            <div class="btn log-in-btn" @click="login()">
                Log in
            </div>
        </div>
    </div>
</template>

<script>
    import { Notification } from 'element-ui';
    export default {
        name: "Login",
        data () {
            return {
                user:{
                    username:"",
                    password:"",
                }
            }
        },
        methods: {
            routeTo:function(des){
                this.$router.push(des);
            },
            goto() {
      this.$router.replace("/register");
    },
            login:async function(){
                if(this.user.username==""||this.user.password=="")return;
                console.log(this.user.username.length);
                console.log(this.user.password.length);
                let res = await this.api.userApi.login(this.user);
                console.log(res);
                if(res.data.status=="200"){
                    //vuex
                    let user = res.data.data;
                    //localStorage.setItem('userId', user.id);
                    //this.$store.commit('updateUser', user);
                    this.routeTo('/');
                }else{
                    Notification({
                        title:"用户不存在或密码错误。",
                        type:"error"
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
#Login{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background:#f5f5f5;

    padding-top: 1.7rem; 

    font-size: 15px;
    font-size:15px; 
    font-weight:400;
    color: #888888;

    .logo{
        font-size:47px;
        font-family:'Squada One';
        font-weight:400;
        font-style:italic;
        color:rgba(52,97,187,1);
        transform: translateX(-5px);
        margin-bottom: 1rem;
    }
    .input-rect{
        position: relative;
        height: .41rem;
        margin-bottom: .18rem;
        width: 70%;
        .icon{
            position: absolute;
            // display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            height: .41rem;
            width: .41rem;
        }
    }
    .btn-rect{
        display: flex;
        justify-content: space-between;
        width:70%;
        height:44px;
        border-radius:4px;
        .btn{
            flex: 1;
            border-radius:4px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            font-weight: 400;
        }
        .sign-up-btn{
            background: #203BC6;
            color: #ffffff;
            font-style:italic;
            margin-right: .1rem;
        }
        .log-in-btn{
            background: #fff;
            color: #3DA8F5;
        }
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