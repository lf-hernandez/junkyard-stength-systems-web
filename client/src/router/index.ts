import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Signup.vue')
  },
    {
    path: '/clients',
    name: 'clients',
    component: () => import(/* webpackChunkName: "clients" */ '../views/Clients.vue')
  },
    {
    path: '/exercise-library',
    name: 'exercise-library',
    component: () => import(/* webpackChunkName: "exercise-library" */ '../views/ExerciseLibrary.vue')
  },
  {
    path: '/programs',
    name: 'programs',
    component: () => import(/* webpackChunkName: "programs" */ '../views/Programs.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
//   router.get('/clients', (req, res, next) => {
//     res.send('clients list');
// });

// router.get('clients/:id', (req, res, next) => {
//     res.send('client by id');
// });

// router.get('clients/:id/edit', (req, res, next) => {
//     res.send('edit client by id');
// })

//   router.get('/exercises', (req, res, next) => {
//     res.send('exercises');
// });

// router.get('exercises/muscle/:muscle-name', (req, res, next) => {
//     res.send('exercises by muscle name');
// });

// router.get('exercises/:exercise-name', (req, res, next) => {
//     res.send('exercise by name');
// });

// router.get('exercises/:exercise-name/edit', (req, res, next) => {
//     res.send('edit exercise by name');
// });

// router.get('exercises/add', (req, res, next) => {
//     res.send('add new exercise');
// })
// router.get('/programs/:id', (req, res, next) => {
//   res.send('program by id');
// });

// router.get('programs/create', (req, res, next) => {
//   res.send('create program');
// });

// router.get('programs/:id/edit', (req, res, next) => {
//   res.send('edit program by id');
// })
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
