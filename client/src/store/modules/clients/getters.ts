import { GetterTree } from 'vuex';
import { Client, ClientsState, RootState } from '@app/types/types';

export const getters: GetterTree<ClientsState, RootState> = {
    clientById: (state) => (id: string) => {
        return state.clients.find(client => client.id === id);
    },
    clientFullName: (state) => (id: string) => {
        const client = state.clients.find(client => client.id === id);
        return client ? `${ client.firstName } ${ client.lastName }` : false;
    }
};