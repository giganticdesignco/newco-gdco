import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
import App from './App.vue';
import './assets/tailwind.css'

createApp({
    extends: App,
    beforeCreate() {
        this.$store.commit('initializeStore')
    }
}).use(router).use(store).mount('#app');
