import { MutationTree } from 'vuex';
import { Client, ClientsState } from '@/types/types';

export const mutations: MutationTree<ClientsState> = {
    setClients(state, clients: Array<Client>) {
        state.clients = clients;
    },
    addClient(state, newClient: Client) {
        state.clients.push(newClient);
    },
    updateClient(state, updatedClient: Client) {
        const index = state.clients.findIndex(client => client.id === updatedClient.id);

        state.clients.splice(index, 1, updatedClient);
        state.clients = [...state.clients];
    },
    deleteClient(state, deletedClient: Client) {
        state.clients = [...state.clients.filter(client => client.id !== deletedClient.id)];
    }
};