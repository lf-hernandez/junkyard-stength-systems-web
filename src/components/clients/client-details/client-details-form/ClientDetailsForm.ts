import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Action, Getter, State } from 'vuex-class';
import { Client } from '@/types/types';

const namespace = 'clients';

@Component
export default class ClientDetailsForm extends Vue {
    @Prop() client: Client | undefined;
    @Prop({ default: false }) isNewClient: boolean | undefined;
    @State('clients', { namespace }) clients: Array<Client> | undefined;
    @Action('getClients', { namespace }) getClients: undefined;
    @Action('addClient', { namespace }) addClientAction;
    @Action('updateClient', { namespace }) updateClientAction;
    @Getter('clientById', { namespace }) getClientById;

    async updateClient() {
        await this.updateClientAction(this.client);
        this.$router.go(-1);
    }

    async addClient() {
        await this.addClientAction(this.client);
        this.$router.go(-1);
    }

    async handleSubmit() {
        if (this.isNewClient) {
            await this.addClient();
        } else {
            await this.updateClient();
        }
    }

    cancelEdit() {
        this.$router.go(-1);
    }
}
