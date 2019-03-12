import Vue from 'vue';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import VueRouter from 'vue-router';

import Basic from './Basic.vue';
import HelloWorld from './components/HelloWorld.vue';
import App from './App.vue';

Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.component('v-select', vSelect);
Vue.config.productionTip = false;

const routes = [
    { path: '/app', component: App },
    { path: '/hw', component: HelloWorld },
];

const router = new VueRouter({
    routes,
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(Basic),
});
