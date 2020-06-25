import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/home/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import(/* webpackChunkName: "auth" */ '../views/sign-in/SignIn.vue')
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import(/* webpackChunkName: "auth" */ '../views/sign-up/SignUp.vue')
    },
    {
        path: '/clients',
        name: 'clients',
        component: () => import(/* webpackChunkName: "clients" */ '../views/clients/Clients.vue')
    },
    {
        path: '/clients/:clientId/client-details',
        name: 'client-details.view',
        props: true,
        component: () => import(/* webpackChunkName: "client-details" */ '../views/client-details/ClientDetails.vue')
    },
    {
        path: '/clients/:clientId/client-details/edit',
        name: 'client-details.edit',
        props: true,
        component: () => import(/* webpackChunkName: "client-details" */ '../views/client-details/ClientDetails.vue')
    },
    {
        path: '/exercise-library',
        name: 'exercise-library',
        component: () => import(/* webpackChunkName: "exercise-library" */ '../views/exercise-library/ExerciseLibrary.vue'),
        children: [
            {
                path: ':muscle-group-name',
                name: 'exercise-library.muscle-group',
                props: true,
                component: () => import(/* webpackChunkName: "exercise-library" */ '../views/exercise-library/ExerciseLibrary.vue')
            }
        ]
    },
    {
        path: '/exercise-library/add',
        name: 'exercise-library.add',
        props: true,
        component: () => import(/* webpackChunkName: "exercise-library" */ '../views/add-exercise/AddExercise.vue')
    },
    {
        path: '/exercise-details/:id/:slug',
        name: 'exercise-details.view',
        props: true,
        component: () => import(/* webpackChunkName: "exercise-details" */ '../views/exercise-details/ExerciseDetails.vue')

    },
    {
        path: '/exercise-details/:id/:slug/edit',
        name: 'exercise-details.edit',
        props: true,
        component: () => import(/* webpackChunkName: "exercise-details" */ '../views/exercise-details/ExerciseDetails.vue')

    },
    {
        path: '/programs',
        name: 'programs',
        component: () => import(/* webpackChunkName: "programs" */ '../views/programs/Programs.vue')
    }
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
//   res.send('programs by id');
// });

// router.get('programs/create', (req, res, next) => {
//   res.send('create programs');
// });

// router.get('programs/:id/edit', (req, res, next) => {
//   res.send('edit programs by id');
// })
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
