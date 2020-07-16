import { ActionTree } from 'vuex';

import { ClientsState, RootState } from '@/types/types';

import * as data from '../../../../data.json';

// import api from '@/api';

export const actions: ActionTree<ClientsState, RootState> = {
    async getClients({ commit }) {
        const clients = data.clients;
        // const clients = await api.clients.getClients();
        commit('setClients', clients);
    },
    // TODO Service/API call
    async addClient({ commit }, client) {
        // const addedClient = await api.clients.addClient(client);
        commit('addClient', client);
    },
    // TODO Service/API
    async updateClient({ commit }, client) {
        // const updatedClient = await api.clients.updateClient(client);
        commit('updateClient', client);
    },
    // TODO Service/API
    async deleteClient({ commit }, client) {
        // const deletedClient = await api.clients.deleteClient(client);
        commit('deleteClient', client);
    }
};
