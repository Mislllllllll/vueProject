import './assets/main.css'
import 'babel-polyfill'
import fastclick from 'fastclick'
import { createApp } from 'vue'
import App from './App.vue'
fastclick.attach(document.body)

createApp(App).mount('#app')
