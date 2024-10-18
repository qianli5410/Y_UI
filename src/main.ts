import { createApp } from 'vue'
import App from './App.vue'
import YUI from './index'
console.log(YUI);

createApp(App).use(YUI).mount('#app')