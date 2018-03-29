import Vue from 'vue'
import router from './router';
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-30177848-7', 
  router,
})