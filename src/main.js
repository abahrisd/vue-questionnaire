import Vue from 'vue';
import VeeValidate from 'vee-validate';

import App from './App.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
});

Vue.use(VeeValidate);
