import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import MemberHome from '@/components/Member_home'
import MemberCenter from '@/components/Member_center'
import Quiz from '@/components/Quiz'
import Winter from '@/components/Winter'
import Video from '@/components/Video'
Vue.use(Router)

export default new Router(
  {
    routes: [
      {
        path: '/',
        component: Home,
        meta: {
          showTab: true
        }
      },
      {
        path: '/Member/:id',
        component: Member,
        redirect: '/MemberHome',
        children: [
          {
            path: '/MemberHome',
            component: MemberHome
          },
          {
            path: '/MemberCenter',
            component: MemberCenter
          },
        ],
        meta: {
          showTab: true,
        },

      },
      {
        path: '/Quiz',
        component: Quiz,
        meta: {
          showTab: true
        }
      },
      {
        path: '/Winter',
        component: Winter,
        meta: {
          showTab: true
        }
      },
      {
        path: '/Video',
        component: Video,
        meta: {
          showTab: true
        }
      },
    ]

  })
