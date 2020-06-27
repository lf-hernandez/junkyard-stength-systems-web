import { Module } from 'vuex';
import { state } from '@app/store/modules/exercises/state';
import { getters } from '@app/store/modules/exercises/getters';
import { mutations } from '@app/store/modules/exercises/mutations';
import { actions } from '@app/store/modules/exercises/actions';

import { ExercisesState, RootState } from '@app/types/types';

const namespaced = true;

export const exercises: Module<ExercisesState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
