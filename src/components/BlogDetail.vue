<template>
    <div class="blog">
        <div class="bor">
            <div class="the">
                <ul>
                    <li v-for="n in filterlist()">
                        <div class="blog-title">
                            {{n.title}}
                        </div>
                        <div class="blog-time">
                            {{"发布于 "+n.time}}
                        </div>
                        <div class="blog-abstract">
                            {{n.abstract}}
                        </div>
                        <div class="blog-content">
                            <p v-html="n.content">
                                {{n.content}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <img class="favour-icon" src="@/src/assets/favour_icon.png" @click="favour()">
        </div><br/>
        <div class="comment-line">
            <div class="comments">
                <ul>
                    <li v-for="c in comments">
                <div class="username">
                    {{c.userid}}
                </div>
                <div class="comment">
                    <p v-html="c.content">
                        {{c.content}}</p>
                </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogDetail",
        data(){
            return{
                bid:"",
                list:[],
                coms:[],
                blog:{
                    userid:"",
                    blogid:"",
                    title:"",
                    content:"",
                    time:"",
                    abstract:""
                },
                comment:{
                    blogid:"",
                },
                comments:[],
                msg:'',

            }
        },
        created(){
            this.getblogs();
            this.getblogid();
            this.getcoms();
            this.idname("10");
        },
        beforeCreate () {
            document.querySelector('body').setAttribute('style', 'background-color:#efeff4;')
        },
        methods:{
            getblogs:async function(){
                let res =await this.api.showblog();
                this.list=res.data.result;
                //console.log(this.list);
            },
            getblogid:async function(){
                this.bid=localStorage.getItem('bid');
                this.comment.blogid=this.bid;
                //console.log(this.blogid);
            },
            filterlist(){
                let id=this.bid;
                let res = this.list.filter(function(blog) {
                    return blog.blogid == id;
                });
                //console.log(res);
                return res;
            },
            getcoms:async function()
            {
                let res=await this.api.getcom(this.comment);
                this.comments=res.data.result;
                //console.log(this.comments);
            },
            favour:async function()
            {
                console.log(this.bid);
                let res=await this.api.addfavour(this.bid);
                //console.log(res);
            },
            idname:async function(uesrid){
                console.log(userid);
                let res=await this.api.getUser(userid);
                console.log(res);
            }
        },
        watch: {
            '$route': 'getblog'
        }
    }
</script>

<style scoped>
    .blog
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
    .the
    {
        width: 70vw;
        margin:0 auto;
        margin-top: .3rem;
        margin-bottom: .3rem;
    }
    .blog-title
    {
        font-size: 35px;
        font-weight: bolder;
    }
    .blog-time
    {
    }
    .blog-abstract
    {
        font-size: 20px;
    }
    .blog-content
    {
        font-size: 25px;
        width: 10rem;
        margin: 0.2rem auto;
    }
    .favour-icon
    {
        height:24px;
        width:24px;
        float:right;
        margin-right: 39vw;
        margin-top: .1rem;
        margin-bottom: .2rem;
    }
    .comment-line
    {
        width: 80vw;
        border-style: solid;
        margin:0 auto;
        background: #ffffff;
    }
    .comments
    {
        width: 70vw;
        margin:0 auto;
        margin-top: .3rem;
        margin-bottom: .3rem;
    }
</style>