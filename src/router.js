import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Login from "./components/login.vue"
import Register from "./components/Register.vue"
import PersonInfo from './components/page_personal/PersonInfo.vue'
import test from './components/test.vue'
import WriteBlog from './components/WriteBlog.vue'
import ShowBlog from './components/ShowBlog.vue'
import BlogDetail from './components/BlogDetail.vue'
import ViewBlog from './components/ViewBlog.vue'
import SearchBlog from './components/SearchBlog.vue'
import VueCordova from 'vue-cordova'
import Personalpage from "./components/Personalpage"
import Album from "./components/Album"

Vue.use(VueCordova)
Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/login',
            name: 'Login',
            component:Login,
        },
        {
            path: '/register',
            name: 'Register',
            component:Register,
        },
        {
            path:'/personinfo/:id',
            name:'PersonInfo',
            component:PersonInfo,
        },
        {
            path:'/writeblog',
            name:'WriteBlog',
            component:WriteBlog,
        },
        {
            path:'/test',
            name:'test',
            component:test,
        },
        {
            path:'/showblog',
            name:'ShowBlog',
            component:ShowBlog,
        },
        {
            path:'/blogdetail',
            name:'BlogDetail',
            component:BlogDetail,
        },
        {
            path:'/viewblog',
            name:'ViewBlog',
            component:ViewBlog,
        },
        {
            path:'/searchblog',
            name:'SearchBlog',
            component:SearchBlog,
        },
        {
            path: '/album',
            name: 'Album',
            component: Album,
        },
        {
            path:'/personalpage',
            name:'Personalpage',
            component:Personalpage,
        }

    ]
})
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}