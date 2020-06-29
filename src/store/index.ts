import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from '@/types/types';

import { clients } from './modules/clients/index';
import { exercises } from './modules/exercises/index';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
    modules: {
        clients,
        exercises
    }
};

export default new Vuex.Store<RootState>(options);
