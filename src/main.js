import Vue from 'vue';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select';
import VueRouter from 'vue-router';

import Basic from './Basic.vue';
import HelloWorld from './components/HelloWorld.vue';
import App from './App.vue';

Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('v-select', vSelect);
Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count += 1;
        },
    },
});

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
    store,
    render: h => h(Basic),
});
