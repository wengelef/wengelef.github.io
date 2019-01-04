import Vue from 'vue'
import Router from 'vue-router'
import CV from '@/components/CV'
import Private from '@/components/Private'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'CV', component: CV },
    { path: '/private', name: 'Private', component: Private }
  ]
})
