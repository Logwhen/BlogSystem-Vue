<template>
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
                        <div class="get-time">
                            {{n.time}}
                        </div><br/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                sendVal: false,
                searchString:"",
            };
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
                this.searchString=localStorage.getItem('sestr');
                console.log("search "+this.searchString);
                let res=await this.api.seablog(this.searchString);
                this.list=res.data.result;
                console.log(this.list);
            },
            goblog:async function(id){
                localStorage.setItem('bid',id);
                this.$router.push({
                    path:'/blogdetail',
                    name:'BlogDetail',
                })
            },
            searchblog:async function(){
                localStorage.setItem('sestr',this.searchString);
                this.$router.go(0);
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
</style>