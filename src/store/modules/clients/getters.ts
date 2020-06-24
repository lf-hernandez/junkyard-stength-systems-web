import { GetterTree } from 'vuex';
import { Client, ClientsState, RootState } from '@/types/types';

export const getters: GetterTree<ClientsState, RootState> = {
    clientById(state, id: string) {
        return state.clients.find(client => client.id === id);
    },
    clientFullName(state, id: string) {
        return state.clients.find(client => client.id === id) ? (client: Client) => { `${ client.firstName } ${ client.lastName }` } : false;
    }
};