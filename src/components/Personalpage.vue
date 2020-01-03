<template>
    <div id="personalpage">
        <Bar></Bar>

        <div class="page-body">
            <div class="personal-information">
                <div style="margin-top: 18.5px;margin-left: 15px;font-size: 18px; font-weight:900;">个人简介</div>
                <div style="background: #656565; weight:293px; height: 1px;margin-top: 18px"></div>
                <div style="display: flex; flex-direction: column">
                <div class="display">
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">用户名 ： </div>
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">{{this.user.username}}</div>
                </div>
                <div class="display">
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">性别 ： </div>
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">{{this.user.gender}}</div>
                </div>
                <div class="display">
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">邮箱 ： </div>
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">{{this.user.email}}</div>
                </div>
                <div class="display">
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">地址 ： </div>
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">{{this.user.address}}</div>
                </div>
                <div class="display">
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">电话号 ： </div>
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">{{this.user.phone}}</div>
                </div>
                <div class="display">
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">个人简介 ： </div>
                    <div style="margin-left: 15px;font-size: 15px; font-weight:900;">{{this.user.introduce}}</div>
                </div>
                </div>
            </div>

            <div class="photo-album">
                <div style="margin-top: 18.5px;margin-left: 15px;font-size: 18px; font-weight:900;">相册</div>
                <div style="background: #656565; weight:293px; height: 1px;margin-top: 18px"></div>

                <div style="background: #656565; weight:293px; height: 1px;margin-top: 100px;"></div>
                <div style="position: absolute; top: 170px; left: 115px; font-size: 15px" @click="gotoAlbum">查看更多 ></div>
            </div>

            <div class="w-blog-body" style="position: absolute; margin-left: 33.5px;"></div>

            <div class="blog-body" style="position: absolute; left:976px;">
                <div class="blog-body-head">
                    <div style="margin-top: 18.5px;margin-left: 15px;font-size: 18px; font-weight:900;">博客文章</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bar from "@/src/components/Bar.vue";
export default {
    name:"Personalpage",
    data(){
        return{
            user:{},
        }
    },
    components: {
    Bar,
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
    methods:{
        gotoAlbum(){
            this.$router.replace("/album");
        }
    }
}
</script>

<style lang="scss" scoped>
#personalpage{
    position: absolute;
    background-size: 100% 100%;
    background: #FDF9EE;
    width: 100%;
    height: 1000%;
    align-items: center;

    .bar{
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
}

</style>