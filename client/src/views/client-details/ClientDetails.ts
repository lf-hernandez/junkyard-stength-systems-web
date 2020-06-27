import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientDetailsForm from '@app/components/clients/client-details/client-details-form/ClientDetailsForm.vue';
import ClientAvatar from '@app/components/ui/client-avatar/ClientAvatar.vue';
import { Action, Getter, State } from 'vuex-class';
import { Client } from '@app/types/types';

const namespace = 'clients';

@Component({
    components: {
        ClientAvatar,
        ClientDetailsForm
    }
})
export default class ClientDetails extends Vue {
    @Prop() clientId: string;
    @Prop({default: false}) isNewClient: boolean;
    @State('clients', {namespace}) clients: Array<Client>;
    @Action('getClients', {namespace}) getClients: any;
    @Action('addClient', {namespace}) addClient: any;
    @Action('deleteClient', {namespace}) deleteClientAction: any;
    @Getter('clientById', {namespace}) getClientById: any;

    client: Client | null = null;


    async created() {
        if (this.isNewClient) {
            this.client = {
                id: '7',
                firstName: '',
                lastName: '',
                email: '',
                weekNumber: 0,
                phone: ''
            } as Client;
        } else {
            if (this.clients.length === 0) {
                await this.getClients();
            }
            this.client = this.getClientById(this.clientId);
        }
    }

    returnToClientList() {
        this.$router.go(-1);
    }

    get isEditView() {
        return this.$route.name === 'client-details.edit';
    }

    get isDetailsView() {
        return this.$route.name === 'client-details.view';
    }

    async deleteClient() {
        await this.deleteClientAction(this.client);
        this.$router.go(-1);
    }

    async pushEditRoute() {
        await this.$router.push({name: 'client-details.edit', params: { clientId: this.client.id }} );
    }

    get initials() {
        return this.client.firstName.charAt(0).toUpperCase();
    }
}