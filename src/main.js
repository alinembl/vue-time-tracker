import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'


Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  routes: [
    { path: '', component: App},
    { path: '/home', component: Home },
    { path: '/time-entries', component: TimeEntries,
        children: [
            { path: '/log-time', component: LogTime}
          ]
        }
      ]


})


var app = new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
