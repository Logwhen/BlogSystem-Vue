<template lang="html">
    <div class="blogs">
        <div class="search">
            <input placeholder="请输入..." v-model="searchString" type="text"/>
            <button class="search-btn" @click="searchblog()">Search</button>
        </div>
        <div class="bor">
            <ul>
                <li v-for="n in list">
                    <div class="ablog">
                        <h1 class="get-title">
                            <div class="blog" @click="goblog(n.blogid)">{{n.title}}</div>
                        </h1>
                        <div class="get-abstract">
                            {{n.abstract}}
                        </div>
                        <div class="get-content">
                            <p v-html="n.content">
                                {{n.content}}</p>
                        </div>
                        <img class="del-icon" src="@/src/assets/del_icon.png" @click="delblog(n.blogid)">
                        <p>  </p>
                        <img class="com-icon" src="@/src/assets/com_icon.png" @click="comblog(n.blogid)">
                        <div class="get-time">
                            {{n.time}}
                        </div><br/>
                        <dialog-bar v-model="sendVal" type="danger" content="确定要删除本条博客吗？" v-on:cancel="clickCancel()" @danger="clickDelete()" dangerText="Delete"></dialog-bar>
                    </div>
                </li>
            </ul>
            <div class="editor" v-show="show">
                <div ref="toolbar" class="toolbar">
                </div>
                <div v-model="com.content" ref="editor" class="text">
                </div>
                <div class="submit">
                    <button class='complete' @click="writecom()">评论</button>
                </div>
            </div><br/>
        </div>
    </div>
</template>

<script>
    import dialogBar from './dialog.vue'
    import WangEditor from 'wangeditor'
    export default {
        components:{
            'dialog-bar': dialogBar,
        },
        data(){
            return{
                list:[],
                sendVal: false,
                searchString:"",
                com:{
                    blogid:"",
                    content:""
                },
                show:false,
            };
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            isClear: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            isClear(val) {
                if (val) {
                    this.editor.txt.clear()
                    this.info_ = null
                }
            },
            value: function(value) {
                if (value !== this.editor.txt.html()) {
                    this.editor.txt.html(this.value)
                }
            }
        },
        mounted(){
            this.seteditor()
            this.editor.txt.html(this.value)
        },
        created(){
            this.getblog();
        },
        beforeCreate () {
            document.querySelector('body').setAttribute('style', 'background-color:#efeff4;')
        },
        methods:{
            routeTo:function(des){
                this.$router.push(des);
            },
            getblog:async function(){
                let res =await this.api.showblog();
                this.list=res.data.result;
                console.log(this.list);
            },
            goblog:async function(id){
                localStorage.setItem('bid',id);
                this.$router.push({
                    path:'/blogdetail',
                    name:'BlogDetail',
                })
                //console.log(id);
            },
            delblog:async function(blogid){
                this.sendVal = true;
                console.log(blogid);
                this.clickDelete(blogid);
            },
            clickCancel(){
                console.log('取消');
            },
            async clickDelete(blogid) {
                let res = await this.api.delblog(blogid);
                console.log(res);
                this.$router.go(0)
                console.log("删除博客");
            },
            searchblog:async function(){
                localStorage.setItem('sestr',this.searchString);
                this.$router.push({
                    path:'/searchblog',
                    name:'SearchBlog',
                })
            },
            seteditor() {
                this.editor = new WangEditor(this.$refs.toolbar, this.$refs.editor);
                this.editor.customConfig.uploadImgShowBase64 = false;
                this.editor.customConfig.uploadImgServer = 'http://localhost:8080/saveImg';
                this.editor.customConfig.uploadImgHeaders = { };
                this.editor.customConfig.uploadFileName = 'myFileName';
                this.editor.customConfig.uploadImgMaxSize = 10 * 1024 * 1024;
                this.editor.customConfig.uploadImgMaxLength = 9;
                this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000;
                this.editor.withCredentials=true;

                // 配置菜单
                this.editor.customConfig.menus = [
                    'head', // 标题
                    'bold', // 粗体
                    'fontSize', // 字号
                    'fontName', // 字体
                    'italic', // 斜体
                    'underline', // 下划线
                    'strikeThrough', // 删除线
                    'foreColor', // 文字颜色
                    'backColor', // 背景颜色
                    'link', // 插入链接
                    'list', // 列表
                    'justify', // 对齐方式
                    'quote', // 引用
                    'emoticon', // 表情
                    'image', // 插入图片
                    'table', // 表格
                    'video', // 插入视频
                    'code', // 插入代码
                    'undo', // 撤销
                    'redo', // 重复
                    'fullscreen' // 全屏
                ]

                this.editor.create()
            },
            writecom:async function()
            {
                this.com.content=this.editor.txt.html();
                if(this.com.blogid=="") return;
                console.log(this.com);
                let res=await this.api.writecom(this.com);
                console.log(res);
                this.$router.go(0);
            },
            comblog:async function(bid)
            {
                this.com.blogid=bid;
                this.show=true;
            }
        }
    }
</script>

<style scoped>
    .blogs
    {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1.7rem;
        font-size: 15px;
        font-weight:400;
        color: #000000;
        position: relative;
    }
    .bor
    {
        width: 80vw;
        border-style: solid;
        margin:0 auto;
        background: #ffffff;
    }
    .ablog
    {
        width:70vw;
        border-style: none none dotted none;
        top:50%;
        left:50%;
        margin:0 auto;
        margin-top: .5rem;
    }
    .get-title
    {
        width: 6rem;
        height: 0.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .get-time
    {
        font-size: 15px;
        width: 6rem;
        height: 0.2rem;
    }
    .get-abstract
    {
        font-size: 15px;
        width: 6rem;
        height: 0.2rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .get-content
    {
        font-size: 20px;
        width: 10rem;
        height: 0.8rem;
        margin: 0.2rem auto;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /*截取第三行*/
        overflow: hidden;
    }
    .del-icon
    {
        height:24px;
        width:24px;
        float:right;
    }
    .com-icon
    {
        margin-right: .1rem;
        height:24px;
        width:24px;
        float:right;
    }
    *{
        padding: 0;
        margin: 0;
    }
    .search{
        width: 30%;
        margin: 100px auto;
        display: flex;
        font-size: 12px;
    }
    .search input{
        float: left;
        flex: 4;
        height: 30px;
        outline: none;
        border: 1px solid #428cff;
        box-sizing: border-box;
        padding-left: 10px;
    }
    .search button{
        float: right;
        flex: 1;
        height: 30px;
        background-color: #428cff;
        color: white;
        border-style: none;
        outline: none;
    }
    .search button:hover{
        font-size: 16px;
    }
    .editor
    {
        margin-left: 2rem;
        margin-top: .3rem;
        width: 6rem;
    }
    .toolbar
    {
        border: 1px solid #ccc;
    }
    .text
    {
        font-size: 12px;
        background: #f1f7f9;
        color: #000000;
        border: 1px solid #ccc;
        min-height: 200px;
    }
    .complete
    {
        height:30px;
        width:60px;
        color: #000000;
    }
</style>