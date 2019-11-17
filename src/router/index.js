import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import FetchedUsers from '@/components/FetchedUsers'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/validateUser',
      name: 'FetchedUsers',
      component: FetchedUsers,
      props: (route) => ({
        meditators: route.params.meditators
      })
    }
  ]
})
