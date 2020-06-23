import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from '@/types/types';

import { clients } from './modules/clients/module';

Vue.use(Vuex);

const storeOptions: RootState = {
    modules: {
        clients
    }
};

export default new Vuex.Store(storeOptions);
