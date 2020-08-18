import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from '@/types/types';

import { clients } from './modules/clients/index';
import { exercises } from './modules/exercises/index';
import { programs } from './modules/programs/index';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
    modules: {
        clients,
        exercises,
        programs
    }
};

export default new Vuex.Store<RootState>(options);
