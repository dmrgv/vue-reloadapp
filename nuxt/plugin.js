import Vue from 'vue';
import VueReloadApp from 'vue-reloadapp';

Vue.use(VueReloadApp, <%= serialize(options) %>);
