import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import FetchedUsers from '@/components/FetchedUsers'
import EditableUser from '@/components/EditableUser'
import SignWaiver from '@/components/SignWaiver'
import ThankYou from '@/components/ThankYou'

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
    },
    {
      path: '/checkin',
      name: 'SignWaiver',
      component: SignWaiver,
      props: (route) => ({
        meditator: route.params.meditator,
        visitInfo: route.params.visitInfo
      })
    },
    {
      path: '/done',
      name: 'ThankYou',
      component: ThankYou,
      props: (route) => ({
        success: route.params.success
      })
    }
  ]
})
