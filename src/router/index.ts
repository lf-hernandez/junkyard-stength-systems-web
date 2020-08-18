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
        component: () =>
            import(/* webpackChunkName: "clients" */ '../views/client-details/ClientDetails.vue')
    },
    {
        path: '/clients/new-client/client-details',
        name: 'client-details.add',
        props: { isNewClient: true },
        component: () =>
            import(/* webpackChunkName: "clients" */ '../views/client-details/ClientDetails.vue')
    },
    {
        path: '/clients/:clientId/client-details/edit',
        name: 'client-details.edit',
        props: true,
        component: () =>
            import(
                /* webpackChunkName: "client-details" */ '../views/client-details/ClientDetails.vue'
            )
    },
    {
        path: '/exercise-library',
        name: 'exercise-library',
        component: () =>
            import(
                /* webpackChunkName: "exercise-library" */ '../views/exercise-library/ExerciseLibrary.vue'
            )
    },
    {
        path: '/exercise-library/:category',
        name: 'exercise-library.category',
        props: true,
        component: () =>
            import(
                /* webpackChunkName: "exercise-library" */ '../views/exercise-library/ExerciseLibrary.vue'
            )
    },
    {
        path: '/exercise-library/add',
        name: 'exercise-library.add',
        props: true,
        component: () =>
            import(
                /* webpackChunkName: "exercise-library" */ '../views/add-exercise/AddExercise.vue'
            )
    },
    {
        path: '/exercise-details/:id/:slug',
        name: 'exercise-details.view',
        props: true,
        component: () =>
            import(
                /* webpackChunkName: "exercise-library" */ '../views/exercise-details/ExerciseDetails.vue'
            )
    },
    {
        path: '/exercise-details/:id/:slug/edit',
        name: 'exercise-details.edit',
        props: true,
        component: () =>
            import(
                /* webpackChunkName: "exercise-library" */ '../views/exercise-details/ExerciseDetails.vue'
            )
    },
    {
        path: '/programs',
        name: 'programs',
        component: () => import(/* webpackChunkName: "programs" */ '../views/programs/Programs.vue')
    },
    {
        path: '/add-program',
        name: 'add-program',
        redirect: 'add-program/program-details',
        component: () =>
            import(/* webpackChunkName: "programs" */ '../views/add-program/AddProgram.vue'),
        children: [
            {
                path: '/add-program/program-details',
                name: 'add-program.program-details',
                component: () =>
                    import(
                        /* webpackChunkName: "programs" */ '../components/programs/program-details-form/ProgramDetailsForm.vue'
                    )
            },
            {
                path: '/add-program/program-design',
                name: 'add-program.program-design',
                component: () =>
                    import(
                        /* webpackChunkName: "programs" */ '../components/programs/program-design-form/ProgramDesignForm.vue'
                    )
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
