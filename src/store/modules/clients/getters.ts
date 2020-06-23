import { GetterTree } from 'vuex';
import { Client, ClientsState, RootState } from '@/types/types';

export const getters: GetterTree<ClientsState, RootState> = {
    clientById: (state, id: string) => {
        state.clients.find(c => c.Id === id);
    }
};