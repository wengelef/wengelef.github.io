import Vue from 'vue'
import Router from 'vue-router'
import CV from '@/components/CV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CV',
      component: CV
    }
  ]
})
