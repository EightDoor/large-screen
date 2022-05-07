import { createApp } from 'vue'
import App from './App.vue'


// echarts
import "echarts";
import ECharts from 'vue-echarts'

import router from './router';
import "./index.css"

const app = createApp(App)

app.component('v-chart', ECharts)
app.use(router)
app.mount('#app')
