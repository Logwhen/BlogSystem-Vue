<template>
    <div id="test">
        <div class="wrapper">
    <span class="text">头像</span>
    <div class="img" @click.stop="uploadHeadImg">
       <img src="http://whitealbum.oss-cn-beijing.aliyuncs.com/album/3N6HpF_81DB9AA9A8BB62C897210CDF06FBE84E.png" width="40" height="40" alt="">
       <i class="icon"></i>
    </div>
  <input type="file" id="file" multiple accept="image/*" @change="handleFile" class="hiddenInput" />
</div>

    </div>

</template>

<script>
import { uploadOSS } from '@/src/tools/oss'
export default {
    name:"Test",

    data(){
        return {
            imgUrl:[],
            get_imgUtl:[],
        }
    },
    mounted:async function(){
        let res = await this.api.userApi.getPicture();
        console.log(res);  

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
    }

}
</script>

<style scoped>

</style>