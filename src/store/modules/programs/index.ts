import { Module } from 'vuex';
import { state } from '@/store/modules/programs/state';
import { getters } from '@/store/modules/programs/getters';
import { mutations } from '@/store/modules/programs/mutations';
import { actions } from '@/store/modules/programs/actions';

import { ProgramsState, RootState } from '@/types/types';

const namespaced = true;

export const programs: Module<ProgramsState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
