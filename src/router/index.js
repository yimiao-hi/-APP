import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import CinemaPage from '@/views/Cinema/CinemaPage'
import Active from '@/views/Active'
import Detail from '@/views/Detail'
import Stills from '@/views/Detail/Stills'
import StillsSwiper from '@/views/Detail/StillsSwiper'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import City from '@/views/Film/City'
import Cinemas from '@/views/Cinemas'
import Search from '@/views/Cinemas/Search'
import Center from '@/views/Center'
import FilmOrder from '@/views/Center/FilmOrder'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      // 首页film组件
      path: '*',
      redirect:'/film'
    },
    {
      path:'/film',
      component:Film,
      children:[
        {
          // 正在热映页面
          path:'nowplaying',
          component:Nowplaying
        },
        {
          // 即将上映页面
          path:'comingsoon',
          component:Comingsoon
        },
        {
          // 重定向，自动显示正在热映页面
          path: '',
          redirect:'/film/nowplaying'
        }
      ]
    },
    {
      // 影片页面
      path:'/cinema',
      component:Cinema,
    },
    {
    // 影院详情页面
    path:'/cinema/:id',
    name:"cinemaPage",
    component:CinemaPage,
    },
    {
      path:'/active',
      component:Active
    },
    {
      // 城市页面
      path:'/city',
      component:City
    },
    {
      // 影片详情页面
      path:'/detail/:id',
      name:"kerwindetail",
      component:Detail,
    },
    {
      // 影院页面
      path:'/cinemas/:id',
      name:"cinemas",
      component:Cinemas
    },
    {
      // “我的”页面
      path:'/center',
      component:Center
    },
    {
      path:'/center/filmOrder',
      component:FilmOrder
    }
  ]
})
// 全局router守卫
// Router.beforeEach((to,from,next)=>{
//   // 如果
//   // if(已经登录){
//   //   next();
//   // }else{
//   //   next("/login")
//   // }
// })
