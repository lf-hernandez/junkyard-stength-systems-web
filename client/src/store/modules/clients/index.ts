import { Module } from 'vuex';
import { state } from '@app/store/modules/clients/state';
import { getters } from '@app/store/modules/clients/getters';
import { mutations } from '@app/store/modules/clients/mutations';
import { actions } from '@app/store/modules/clients/actions';

import { ClientsState, RootState } from '@app/types/types';

const namespaced = true;

export const clients: Module<ClientsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
