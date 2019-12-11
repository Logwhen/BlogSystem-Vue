import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import { Checkbox, CheckboxGroup,Popup,Dialog,PullRefresh } from 'vant';

// 导入font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

//引入basic CSS
import '@/src/css/common.css'


Vue.use(ElementUI);
Vue.use(Checkbox).use(CheckboxGroup).use(Popup).use(Dialog).use(PullRefresh);

Vue.component('datetime', Datetime);

NutUI.install(Vue);

//引入API
import api from './js/api.js'
Vue.prototype.api = api;
//引入jquery
import $ from 'jquery'
Vue.prototype.$=$;
Vue.config.productionTip = false;

new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app')
