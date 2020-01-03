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
        </div><br/>
        <div class="comment-line">
            <div class="comments">

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
                    contnet:"",
                    time:"",
                    abstract:""
                },
                blogid:"",
                msg:'',

            }
        },
        created(){
            this.getblogs();
            this.getblogid();
            this.getcoms();
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
                this.blogid=this.bid;
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
                console.log(this.blogid)
                let res=await this.api.getcom(this.blogid);


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