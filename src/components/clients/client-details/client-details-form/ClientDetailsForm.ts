import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Action, Getter, State } from 'vuex-class';
import { Client, ClientsState } from '@/types/types';

const namespace = 'clients';

@Component
export default class ClientDetailsForm extends Vue {
    @Prop() clientId: string;
    @State('clients', { namespace }) clients: Array<Client>;
    @Action('getClients', { namespace }) getClients: any;
    @Getter('clientById',  { namespace }) getClientById: any;

    async created() {
        try {
            await this.getClients();
        } catch(e) {
            console.log(e);
        }
    }

    get client() {
        return this.getClientById(this.clientId);
    }
}