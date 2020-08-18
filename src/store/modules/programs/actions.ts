import { ActionTree } from 'vuex';

import { ProgramsState, RootState } from '@/types/types';

import * as data from '../../../../data.json';

export const actions: ActionTree<ProgramsState, RootState> = {
    async getClients({ commit }) {
        const programs = data.programs;
        commit('setPrograms', programs);
    },
    async addClient({ commit }, program) {
        commit('addProgram', program);
    },
    async updateClient({ commit }, program) {
        commit('updateProgram', program);
    },
    async deleteClient({ commit }, program) {
        commit('deleteProgram', program);
    }
};
