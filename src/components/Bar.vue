<template>
    <div class="Bar">
            <div class="logo">
                <img src="@/src/assets/logo.png" style="width:91px; height:70px; position:absolute;">
            </div>
            <div class="pageName">
                <div style="font-size:18px; aligen-items:center; position:absolute; top:20px; left:120px;color:#FDF9EE;font-weight:900;">个人主页</div>
            </div>
            <div class="searchBar">
                <div class="search-btn">
                    <img src="@/src/assets/search_icon.png" style="aligen-items:center;position:absolute;top:25px;margin-left:10px;">
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                <input type="text" class="searchBox" />
            </div>
            <img class="img-head" src="@/src/assets/team1.jpg">
            <div class="user-name">{{this.user.username}}</div>

        <div class="user-background">
            <img src="@/src/assets/background.jpg" class="user-background-img">
            <img class="img-head-2" src="@/src/assets/team1.jpg">
            <div class="btn-personalpage">主页</div>

        </div>
    </div>
</template>

<script>
import { Notification } from 'element-ui';
export default {
    name:"Bar",
    data(){
        return{
            user:{},
        }
    },
    mounted: async function(){
        let res = await this.api.userApi.getUser();
        console.log(res);            
        this.user=res.data.result[0];
        if(this.user.gender==1)
        {
            this.user.gender='男';
        }             
        else{
            this.user.gender='女';
        }                                
        let blog = await this.api.userApi.getBlog();
        console.log(blog);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    },
}
</script>

<style lang="scss" scoped>

    .Bar{
        display: flex;
        width: 100%;
        height: 70px;
        background: #656565;
    }

    .logo{
        width: 91px;
        background: #7b8b6f;
    }

    .pageName{
        width: 140px;
        background: #656565;
    }

    .searchBar{
        position: relative;
        width: 300px;
        display:flex;
        align-items:center;
        background: #ececea;
    }

    .search_btn{
        position: absolute;
        width: 20px;
        //top:25px;
        //margin-left: 10px;
        align-items: center;
        
    }

    .searchBox{
        position: absolute;
        left: 50px;
        height: 50px;
        width: 25 0px;
        background: #65656500;
        border: none;
        font-size: 25px;
    }

    .img-head{
        position: absolute;
        left: 1200px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: #7d7d7d 1px solid;
        background-size: cover;
        margin-bottom: 0.19rem;
        align-items: center;
        top: 5px;
    }

    .user-name{
        position: absolute;
        left: 1300px;
        font-size: 25px;
        color: #ececea;
        height: 70px;
        letter-spacing: 0.1px;
        font-weight: bold;
        top:16px;
    }

    .user-background{
        position: absolute;
        width: 1267px;
        height: 387px;
        background: #fffaf4;
        left: 85px;
        top: 111px;
        display: flex;
        border: #7d7d7d 1px solid;
    }

    .user-background-img{
        position: absolute;
        width: 1267px;
        height: 290px;
        object-fit: cover;

    }

    .img-head-2{
        position: absolute;
        left: 571px;
        top: 230px;
        height: 124px;
        width: 124px;
        border-radius: 50%;
        background-size: cover;
        border: #7d7d7d 1px solid;

    }
    .btn-personalpage{
        position: absolute;
        left: 416px;
        top: 313px;
        height: 50px;
        width: 72px;
        font-size: 36px;
        font-weight: 900;
    }

    .page-body{
        position: absolute;
        top: 515px;
        left: 86px;
        display: flex;
    }

    .personal-information{
        position: absolute;
        
        width: 293px;
        height: 330px;
        background: #fffaf4;
        border: #7d7d7d 1px solid;
    }
    .photo-album{
        position: absolute;
        top: 340px;
        width: 293px;
        height: 200px;
        background: #fffaf4;
        border: #7d7d7d 1px solid;
    }
    .display{
        margin-top: 20px;
        display: flex;
    }
    .blog-body-head{
        width: 293px;
        height: 61.5px;
        background: #fffaf4;
        border: #7d7d7d 1px solid;
    }

</style>