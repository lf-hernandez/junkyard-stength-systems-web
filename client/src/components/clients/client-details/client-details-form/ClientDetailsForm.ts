import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Action, Getter, State } from 'vuex-class';
import { Client } from '@app/types/types';

const namespace = 'clients';

@Component
export default class ClientDetailsForm extends Vue {
    @Prop() client: Client;
    @Prop({default: false}) isNewClient: boolean;
    @State('clients', {namespace}) clients: Array<Client>;
    @Action('getClients', {namespace}) getClients: any;
    @Action('addClient', {namespace}) addClientAction: any;
    @Action('updateClient', {namespace}) updateClientAction: any;

    @Getter('clientById', {namespace}) getClientById: any;

    async updateClient() {
        await this.updateClientAction(this.client);
        this.$router.go(-1);
    }


    async addClient() {
        await this.addClientAction(this.client);
        this.$router.go(-1);
    }

    async handleSubmit() {
        if(this.isNewClient) {
            await this.addClient();
        } else {
            await this.updateClient();
        }
    }

    async cancelEdit() {
        await this.$router.go(-1);
    }
}