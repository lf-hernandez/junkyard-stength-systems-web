import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { Action, State, Getter } from 'vuex-class';
import { Client, ClientsState } from '@/types/types';
const namespace = 'clients';

@Component
export default class ProgramsSideNav extends Vue {
    @State('clients', { namespace }) clientsState: ClientsState;
    @Action('getClients', { namespace }) getClients: any;
    @Getter('clientFullName', { namespace }) getClientFullName: any;

    async created() {
        try {
            await this.getClients();
        } catch(e) {
            console.log(e);
        }
    }

    get clients(): Array<Client> {
        return this.clientsState.default.data;
    }

    FullName(id: string) {
        return this.getClientFullName(id);
    }
}