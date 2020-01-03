import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/src/components/HelloWorld'
import Login from "./components/Login"
import Register from "./components/Register"
import PersonInfo from '@/src/components/page_personal/PersonInfo'
import VueCordova from 'vue-cordova'
import Personalpage from "./components/Personalpage"
import Test from "./components/Test"
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
            path: '/album',
            name: 'Album',
            component: Album,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
        {
            path: '/login',
            name: 'Login',
            component:Login ,
        },
        {
            path: '/register',
            name: 'Register',
            component:Register ,
        },
        {
            path:'/personinfo/:id',
            name:'PersonInfo',
            component:PersonInfo,
        },
        {
            path:'/personalpage',
            name:'Personalpage',
            component:Personalpage,
        }
    ]
})