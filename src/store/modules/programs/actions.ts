import { ActionTree } from 'vuex';

import { ProgramsState, RootState } from '@/types/types';

import * as data from '../../../../data.json';

export const actions: ActionTree<ProgramsState, RootState> = {
    async getPrograms({ commit }) {
        const programs = data.programs;
        commit('setPrograms', programs);
    },
    async addProgram({ commit }, program) {
        commit('addProgram', program);
    },
    async updateProgram({ commit }, program) {
        commit('updateProgram', program);
    },
    async deleteProgram({ commit }, program) {
        commit('deleteProgram', program);
    }
};
