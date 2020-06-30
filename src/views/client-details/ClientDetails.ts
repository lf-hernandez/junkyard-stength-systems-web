import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientDetailsForm from '@/components/clients/client-details/client-details-form/ClientDetailsForm.vue';
import ClientAvatar from '@/components/ui/client-avatar/ClientAvatar.vue';
import { Action, Getter, State } from 'vuex-class';
import { Client } from '@/types/types';

const namespace = 'clients';

@Component({
    components: {
        ClientAvatar,
        ClientDetailsForm
    }
})
export default class ClientDetails extends Vue {
    @Prop() clientId: string | undefined;
    @Prop({ default: false }) isNewClient: boolean | undefined;
    @State('clients', { namespace }) clients: Array<Client> | undefined;
    @Action('getClients', { namespace }) getClients;
    @Action('addClient', { namespace }) addClient;
    @Action('deleteClient', { namespace }) deleteClientAction;
    @Getter('clientById', { namespace }) getClientById;

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

    pushEditRoute() {
        this.$router.push({
            name: 'client-details.edit',
            params: { clientId: this.client.id }
        });
    }

    get initials() {
        return this.client.firstName.charAt(0).toUpperCase();
    }
}
