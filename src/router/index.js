import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import MemberHome from '@/components/Member_home'
import MemberCenter from '@/components/Member_center'
import Personalcenter from '@/components/Personalcenter'
import Personal from '@/components/Personal'
import Recording from '@/components/Recording'
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
        },
        children: [
          {
            path: 'Basketball', //篮球
            component: () => import('@/components/ball/Basketball'),//路由懒加载
            meta: {
              showTab: true
            },
          },
          {
            path: 'Interfootball', //国际足球
            component: () => import('@/components/ball/Interfootball'),//路由懒加载
            meta: {
              showTab: true
            },
          },
          {
            path: 'Chinesefootball', //中国足球
            component: () => import('@/components/ball/Chinesefootball'),//路由懒加载
            meta: {
              showTab: true
            },
          }

        ]
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
          {
            path: '/Personalcenter',
            component: Personalcenter,
            redirect: '/Personal',
            children: [
              {
                path: '/Personal',
                component: Personal //个人资料
              },
              {
                path: '/Recording',
                component: Recording //播放记录
              }
            ]
          }
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
