import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store'
import axios from 'axios'
import routes from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import echartWordcloud from 'vue-echart-wordcloud'

Vue.use(echartWordcloud)
Vue.component('icon',Icon)

Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
        routes
    }
);

Vue.config.productionTip = false
Vue.prototype.axios = axios;


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
