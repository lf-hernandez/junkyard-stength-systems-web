import { ActionTree } from 'vuex';

import { ClientsState, RootState } from '@/types/types';

import * as data from '../../../../data.json';

export const actions: ActionTree<ClientsState, RootState> = {
    // TODO Service/API call
    async getClients({ commit }) {
        const clients = data.clients;
        commit('setClients', clients);
    },
    // TODO Service/API call
    async addClient({ commit }, client) {
        // const addedClient = await clientService.addClient(client);
        commit('addClient', client);
    },
    // TODO Service/API
    async updateClient({ commit }, client) {
        // const updatedClient = await clientService.updateClient(client);
        commit('updateClient', client);
    },
    // TODO Service/API
    async deleteClient({ commit }, client) {
        // const deletedClient = await clientService.deleteClient(client);
        commit('deleteClient', client);
    }
};
