import { ActionTree } from 'vuex';

import { ExercisesState, RootState } from '@app/types/types';

import * as data from '../../../../data.json';

export const actions: ActionTree<ExercisesState, RootState> = {
    // TODO Service/API call
    async getExercises({ commit }) {
        const exercises = data.exercises;
        commit('setClients', exercises);
    },
    // TODO Service/API call
    async addExercise({ commit }, exercise) {
        commit('addExercise', exercise);
    },
    // TODO Service/API
    async updateExercise({ commit }, exercise) {
        commit('updateExercise', exercise);
    },
    // TODO Service/API
    async deleteExercise({ commit }, exercise) {
        commit('deleteExercise', exercise);
    }
};
