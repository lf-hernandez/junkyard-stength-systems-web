import { GetterTree } from 'vuex';
import { ClientsState } from '@/types/ClientsState';
import { RootState } from '@/types/RootState';
import { Client } from '@/types/Client';

export const getters: GetterTree<ClientsState, RootState> = {
    clients: state => state.clients,
    clientById: state => (id: string) => state.clients.find((c: Client) => c.Id === id)
};