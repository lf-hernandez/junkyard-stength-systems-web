import { MutationTree } from 'vuex';
import { Client, ClientsState} from '@/types/types';

export const mutations: MutationTree<ClientsState> = {
    setClients(state: any, clients: Array<Client>) {
        state.clients = clients;
    },
    addClient(state: any, client: Client) {
        state.clients.push(client);
    },
    updateClient(state: any, client: Client) {
        const index = state.clients.findIndex((c: Client) => c.Id === client.Id);

        state.clients.splice(index, 1, client);
        state.clients = [...state.clients];
    },
    deleteClient(state: any, client: Client) {
        state.clients = [...state.clients.filter((c: Client) => c.Id !== client.Id)];
    }
}