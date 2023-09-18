import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js'; // Modify import location

const app = createApp(App);
app.use(router);
app.mount('#app');


