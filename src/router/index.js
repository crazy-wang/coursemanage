import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
// import Demo1 from '@/views/demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Layout,
      children: [
        {
          path: 'text',
          name: 'Text',
          component: resolve => require(['../views/demo1'], resolve) // 路由懒加载写法
          // component: Demo1 // 直接写法
        }
      ]
    },
    {
      path: '/pkgl',
      name: 'Pkgl',
      component: Layout,
      children: [
        {
          path: 'pkcssz',
          name: 'Pkcs',
          component: resolve => require(['../views/pkgl/pkcssz'], resolve)
        },
        {
          path: 'xxkpk',
          name: 'Xxkpk',
          component: resolve => require(['../views/pkgl/xxkpk'], resolve)
        }
      ]
    },
    {
      path: '/sksjsz',
      name: 'Sksjsz',
      component: Layout,
      children: [
        {
          path: 'xxkkbsz',
          name: 'Xxkkbsz',
          component: resolve => require(['../views/sksjsz/xxkkbsz'], resolve)
        },
        {
          path: 'bxkkbsz',
          name: 'Bxkkbsz',
          component: resolve => require(['../views/sksjsz/bxkkbsz'], resolve)
        }
      ]
    },
    {
      path: '/jxjhgl',
      name: 'Jxjhgl',
      component: Layout,
      children: [
        {
          path: 'jhsq',
          name: 'Jhsq',
          component: resolve => require(['../views/jxjhgl/jhsq'], resolve)
        },
        {
          path: 'jhsh',
          name: 'Jhsh',
          component: resolve => require(['../views/jxjhgl/jhsh'], resolve)
        },
        {
          path: 'jhwh',
          name: 'Jhwh',
          component: resolve => require(['../views/jxjhgl/jhwh'], resolve)
        },
        {
          path: 'jxrwsc',
          name: 'Jxrwsc',
          component: resolve => require(['../views/jxjhgl/jxrwsc'], resolve)
        },
        {
          path: 'jxrwfp',
          name: 'Jxrwfp',
          component: resolve => require(['../views/jxjhgl/jxrwfp'], resolve)
        },
        {
          path: 'jxrwsh',
          name: 'Jxrwsh',
          component: resolve => require(['../views/jxjhgl/jxrwsh'], resolve)
        },
      ]
    },
    {
      path: '/xxkgl',
      name: 'Xxkgl',
      component: Layout,
      children: [
        {
          path: 'xksz',
          name: 'Xksz',
          component: resolve => require(['../views/xxkgl/xksz'], resolve) // 路由懒加载写法
          // component: Demo1 // 直接写法
        },
        {
          path: 'xkrwgl',
          name: 'Xkrwgl',
          component: resolve => require(['../views/xxkgl/xkrwgl'], resolve)
        }
      ]
    },
    {
      path: '/jstk',
      name: 'Jstk',
      component: Layout,
      children: [
        {
          path: 'tkshryap',
          name: 'Tkshryap',
          component: resolve => require(['../views/jstk/tkshryap'], resolve) // 路由懒加载写法
          // component: Demo1 // 直接写法
        },
        {
          path: 'tksq',
          name: 'Tksq',
          component: resolve => require(['../views/jstk/tksq'], resolve)
        },
        {
          path: 'dwtytksq',
          name: 'Dwtytksq',
          component: resolve => require(['../views/jstk/dwtytksq'], resolve)
        },
        {
          path: 'tksh',
          name: 'Tksh',
          component: resolve => require(['../views/jstk/tksh'], resolve)
        },
        {
          path: 'tkgl',
          name: 'Tkgl',
          component: resolve => require(['../views/jstk/tkgl'], resolve)
        },
      ]
    },
    {
      path: '/jsbk',
      name: 'Jsbk',
      component: Layout,
      children: [
        {
          path: 'ksgl',
          name: 'Ksgl',
          component: resolve => require(['../views/jsbk/ksgl'], resolve) // 路由懒加载写法
          // component: Demo1 // 直接写法
        },
        {
          path: 'wdja',
          name: 'Wdja',
          component: resolve => require(['../views/jsbk/wdja'], resolve)
        },
        {
          path: 'jyzwh',
          name: 'Jyzwh',
          component: resolve => require(['../views/jsbk/jyzwh'], resolve)
        },
        {
          path: 'zxjash',
          name: 'Zxjash',
          component: resolve => require(['../views/jsbk/zxjash'], resolve)
        },
        {
          path: 'rdjacxtj',
          name: 'Rdjacxtj',
          component: resolve => require(['../views/jsbk/rdjacxtj'], resolve)
        },
        {
          path: 'jxjdtjb',
          name: 'Jxjdtjb',
          component: resolve => require(['../views/jsbk/jxjdtjb'], resolve)
        },
      ]
    }
  ]
})
