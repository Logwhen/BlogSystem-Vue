<template>
  <div class="PersonInfo">
        <div class="transparent-container" @touchmove.prevent>
        </div>
        <div class="personinfo-container">
            <div id="header" @click="isShowUploadLayer=true;"></div>
            <div id="name">{{user.userName}}</div>
            <div id="logout-btn" @click="logout()">退出登录</div>
            <div id="btn" @click="showPersonInfo(false)"></div>
        </div>
        <van-popup
            v-model="isShowUploadLayer"
            position="bottom"
            :overlay-style="{background:'#ffffff00'}"
            :style="{ height: '110px' }"
        >
            <div
            style="display: flex; padding: 10px; flex-direction: column; height: 100%; justify-content:space-around; align-items:center; font-size:15px; font-weight: bold; text-align:center; letter-spacing: 0.4em; color: #8e8e8e;"
            >
            <div @click="uploadHeader()">本地上传头像</div>
            <div style="width: 80%; height:1px; background: #eee;"></div>
            <div style="color: #e41b1b;" @click="isShowUploadLayer=false;">取消</div>
            </div>
        </van-popup>
        <!-- <input type="file" name="file" id="fileInputEntry" οnchange="fileUpload()" style="display:none"> -->
        </div>
</template>

<script>
import { Message, Notification } from "element-ui";
import loadingPic from "../../assets/loading/loading1.gif";
export default {
  name: "PersonInfo",
  data() {
    return {
      isShowUploadLayer: false
    };
  },
  props: [
      "user"
  ],
  components: {},
  watch: {
    user() {
      console.log("[user watch effects]", this.user);
      if (typeof(this.user) == 'null' || typeof(this.user) == 'undefined'){return}
      this.$("#header")[0].style.background =
        "url(" + this.user.avatarUrl + ")";
      this.$("#header")[0].style.backgroundSize = "cover";
    }
  },
  methods: {
    showPersonInfo: function(isShow) {
      if (isShow == true) {
        document.getElementsByClassName("transparent-container")[0].style.display = "block";
        document.getElementsByClassName(
          "personinfo-container"
        )[0].style.transform = "translateY(0%)";
        document.getElementsByClassName(
            "transparent-container"
        )[0].style.background = "#00000021";
      } else if (isShow == false) {
        document.getElementsByClassName(
          "personinfo-container"
        )[0].style.transform = "translateY(-100%)";
        document.getElementsByClassName(
          "transparent-container"
        )[0].style.background = "#ffffff00";
        setTimeout(() => {
            document.getElementsByClassName("transparent-container")[0].style.display = "none";
        }, 500);
      }
    },
    uploadHeader: function() {
      this.isShowUploadLayer = false;
      //获取文件
      var input = document.createElement("input");
      input.type = "file";
      input.click();
      //调用tencent cloud
      var vueObj = this; //export this to vueObj
      input.onchange = function() {
        var file = input.files[0];
        if (!file) {
          return;
        }
        //上传文件，文件名会重新自动生成独一无二的编码并作为返回值返回，因此上传后需要获取腾讯云的文件名
        let fileName = vueObj.api.uploadFile(file, "/headers");
        //获取文件url，根据腾讯云上的文件名+路径获取对象的url
        var avatarUrl = vueObj.api.getFileUrl(fileName, "/headers");
        //更新UI和后端
        vueObj.updateHeader(avatarUrl);
      };
    },
    updateHeader(avatarUrl) {
      if (!avatarUrl) {
        Notification({
          title: "头像设置失败",
          position: "top-right",
          type: "error"
        });
        return;
      }
      //更新后端
      this.api.updateUser(this.user.id, { avatarUrl: avatarUrl });
      this.user.avatarUrl = avatarUrl; //current user
      //调整UI为loading
      document.getElementById("header").style.backgroundImage =
        "url(" + loadingPic + ")";
      document.getElementById("header").style.backgroundSize = "20px 20px";
      document.getElementById("header").style.backgroundRepeat = "no-repeat";
      document.getElementById("header").style.backgroundPosition = "center";
      setTimeout(() => {
        //更新父组件
        this.$parent.getUserInfo();
        document.getElementById("header").style.backgroundImage =
          "url(" + avatarUrl + ")";
        document.getElementById("header").style.backgroundSize = "cover";
        Notification({
          title: "头像设置成功",
          position: "top-right",
          type: "success"
        });
      }, 1500);
    },
    logout() {
      localStorage.removeItem("userId");
      this.$router.push("/login");
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.transparent-container {
  font-size: 13px;
  display: none;
  position: fixed;
  top: 0.6rem;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 0.6rem);
  font-size: 13px;
  color: #3e3e3e;
  background: #ffffff00;
  transition: 500ms;
}

.personinfo-container {
  display: flex;
  position: fixed;
  width:100%;
  top: 0.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 21px 0 16px 0;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  background: #fff;

  transform: translateY(-100%);
  transition: 500ms;

  #header {
    height: 71px;
    width: 71px;
    border-radius: 50%;
    border: #7d7d7d 1px solid;

    background: url("../../assets/avatar1.jpg");
    background-size: cover;

    margin-bottom: 0.19rem;
  }

  #name {
    color: #3e3e3e;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.05em;

    margin-bottom: 0.18rem;
  }

  #logout-btn {
    border-radius: 4px;
    background: #e21818;
    height: 25px;
    width: 80px;
    line-height: 25px;
    text-align: center;
    vertical-align: middle;
    color: #ffffff;
    font-size: 10px;
    letter-spacing: 0.1em;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  #btn {
    height: 8px;
    width: 13px;
    background: url("../../assets/up-btn.png");
    background-size: cover;
  }
}
</style>
