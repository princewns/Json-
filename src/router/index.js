import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '../views/ShowView.vue'

//vue 플러그인을 사용하기위한 use()메소드
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //게으른 탐색 : 처음부터 가져오는것이 아니라 실행할때 가져옴
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
  },
  {
    path: '/show',
    name: 'show',
    component: ShowView,
  },
  {
    //*기호를 이용해 다른 경로를 받아올 수 있다.
    path: '*',
    //redirect 를 사용하면 이미 작성된 경로로 이동시킬수 있다.
    redirect : "/show",
  },
  {
    path: '/dynamic/:id',
    name: 'dynamic',
    component: function () {
      return import('../views/DynamicView.vue')
    },
  },
];

//라우터 객체 생성
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, //라우터 경로
});

//해당 router를 export한다
export default router;
