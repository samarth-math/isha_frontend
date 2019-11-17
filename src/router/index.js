import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import FetchedUsers from '@/components/FetchedUsers'
import EditableUser from '@/components/EditableUser'

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
    },
    {
      path: '/editUser',
      name: 'EditableUser',
      component: EditableUser,
      props: (route) => ({
        meditator: route.params.meditator
      })
    }
  ]
})
