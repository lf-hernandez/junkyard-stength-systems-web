import { Module } from 'vuex';
import { state } from '@/store/modules/clients/state';
import { getters } from '@/store/modules/clients/getters';
import { mutations } from '@/store/modules/clients/mutations';
import { actions } from '@/store/modules/clients/actions';

import { ClientsState, RootState } from '@/types/types';

const namespaced = true;

export const clients: Module<ClientsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
