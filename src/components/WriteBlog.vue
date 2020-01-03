<template lang="html">
    <div class="app">
        <div class="input-title">
            <input v-model="blog.title" type="text" placeholder="Title" size="50"/>
        </div>
        <div class="input-abst">
            <input v-model="blog.abstract" type="text" placeholder="Abstract" size="90"/>
        </div>
        <div class="editor">
            <div ref="toolbar" class="toolbar">
            </div>
            <div v-model="blog.content" ref="editor" class="text">
            </div>
        </div><br/>
        <div class="submit">
            <button class='complete' @click="writeblog()">上传</button>
        </div>
    </div>
</template>

<script>
    import WangEditor from 'wangeditor'
    export default {
        name: 'WriteBlog',
        data() {
            return {
                blog: {
                    title:"",
                    abstract:"",
                    content:""
                },
            }
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
                    this.editor.txt.clear();
                    this.info_ = null
                }
            },
            value: function(value) {
                if (value !== this.editor.txt.html()) {
                    this.editor.txt.html(this.value)
                }
            }
        },
        mounted() {
            this.seteditor();
            this.editor.txt.html(this.value)
        },
        methods: {
            writeblog:async function(){
                //var json = this.editor.txt.getJSON();console.log(json); // 获取 JSON 格式的内容
                //var jsonStr = JSON.stringify(json);console.log(jsonStr);
                this.blog.content=this.editor.txt.html();
                console.log(this.blog);
                let res = await this.api.writeblog(this.blog);
                //console.log(res);
                this.$router.go(0);
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
            }
        }
    }
</script>

<style lang="css">
    .app
    {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background:#ffffff;

        padding-top: 1.7rem;

        font-size: 15px;
        font-weight:400;
        color: #888888;
    }
    .input-title
    {
        width: 8rem;
        margin-bottom: .18rem;
    }
    .input-abst
    {
        width: 8rem;
        margin-bottom: .18rem;
    }
    .toolbar {
        width: 8rem;
        border: 1px solid #ccc;
    }
    .text
    {
        font-size: 12px;
        height: 4rem;
        width: 8rem;
        background: #f1f7f9;
        color: #000000;
        border: 1px solid #ccc;
        min-height: 500px;
    }
    .complete
    {
        height:100%;
        width:150%;
        color: #000000;
    }
</style>