import Vue from 'vue'
import Router from 'vue-router'
import Main from './page/main.vue'
import About from './page/about.vue'
import Other from './page/other.vue'
import Home from './page/home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/other',
      name: 'Other',
      component: Other
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
