import Vue from 'vue';
import Vuex from 'vuex';

import { Client } from '@/types/Client';

import * as data from '../../../data.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        clients: Array<Client>()
    },
    mutations: {
        getClients(state, clients: Client[]) {
            state.clients = clients;
        },
        addClient(state, client: Client) {
            state.clients.push(client);
        },
        updateClient(state, client: Client) {
            const index = state.clients.findIndex(c => c.Id === client.Id);

            state.clients.splice(index, 1, client);
            state.clients = [...state.clients];
        },
        deleteClient(state, client: Client) {
            state.clients = [...state.clients.filter(c => c.Id !== client.Id)];
        }
    },
    actions: {
        // TODO Service/API call
        async getClients(context) {
            const clients = data;
            context.commit('getClients', clients);
        },
        // TODO Service/API call
        async addClient(context, client) {
            // const addedClient = await clientService.addClient(client);
            context.commit('addClient', client);
        },
        // TODO Service/API
        async updateClient(context, client) {
            // const updatedClient = await clientService.updateClient(client);
            context.commit('updateClient', client);
        },
        // TODO Service/API
        async deleteClient(context, client) {
            // const deletedClient = await clientService.deleteClient(client);
            context.commit('deleteClient', client);
        }
    },
    getters: {
        clients: state => state.clients,
        clientById: state => (id: number) => state.clients.find(c => c.Id === id)
    },
    modules: {}
});
