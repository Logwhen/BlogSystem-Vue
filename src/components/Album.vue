<template>
    <div id="Album">
        <Bar></Bar>

        <div class="body">
            <input type="file" id="file"  multiple accept="image/*" @change="handleFile"  />
            <img src="@/src/assets/inputPicture.jpg" @click="inputPicture" class="inputPicture">
        </div>

        <img :src="this.url" class="picture"/>
    </div>
</template>

<script>
import Bar from "@/src/components/Bar.vue";
import { uploadOSS } from '@/src/tools/oss'
export default {
    name:"Personalpage",
    data(){
        return{
            user:{},
            imgUrl:[],
            get_imgUrl:{},
            url:'',
            headurl:"http://whitealbum.oss-cn-beijing.aliyuncs.com/"
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
        let img = await this.api.userApi.getPicture();
        this.get_imgUrl=img.data.result;
        console.log(this.get_imgUrl);  
        this.url=`${this.headurl}/${this.get_imgUrl[3].url.replace(/\"/g, "")}`, 
        console.log(this.url);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    },
    methods:{
        async handleFile(event) {
            let files = event.target.files;
            this.imgUrl = await uploadOSS(event,files.length);
            console.log("imageURL")
            console.log(this.imgUrl);
            for(let i=0;i<this.imgUrl.length;i++){
                let res = await this.api.userApi.updatePicture(this.imgUrl[i]);
            }
        },
        inputPicture(){
            $('#file').click();
        }
    }

}
</script>

<style lang="scss" scoped>
#Album{
    position: absolute;
    background-size: 100% 100%;
    background: #FDF9EE;
    width: 100%;
    height: 1000%;
    align-items: center;


    .body{
        position: absolute;
        top: 520px;
        left: 86px;
        background: #fffaf4;
        border: #7d7d7d 1px solid;
        width: 1267px;
        height: 1000px;
}

    .picture{
        position: absolute;
        width: 300px;
        height: 300px;
        top:700px;
        left: 500px;
    }

    #file{
        display: none;
    }
}



</style>