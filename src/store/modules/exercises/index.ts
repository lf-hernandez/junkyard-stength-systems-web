import { Module } from 'vuex';
import { state } from '@/store/modules/exercises/state';
import { getters } from '@/store/modules/exercises/getters';
import { mutations } from '@/store/modules/exercises/mutations';
import { actions } from '@/store/modules/exercises/actions';

import { ExercisesState, RootState } from '@/types/types';

const namespaced = true;

export const exercises: Module<ExercisesState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
