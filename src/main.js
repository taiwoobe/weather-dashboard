import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts'
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Globally register the components for project-wide use
Vue.use(VueFusionCharts, FusionCharts, Charts, PowerCharts, Widgets, FusionTheme);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
