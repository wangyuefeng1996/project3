import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//引入路由
import index from '@/pages/index'
import movieDetail from '@/pages/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{keepAlive:true//在meta属性中设置自定义属性，为true则存活
      }
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    }
  ]
})
