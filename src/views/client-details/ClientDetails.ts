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
    @Prop() clientId: string;
    @Prop({default: false}) isNewClient: boolean;
    @State('clients', { namespace }) clients: Array<Client>;
    @Action('getClients', { namespace }) getClients: any;
    @Action('addClient', {namespace}) addClient: any;
    @Getter('clientById', { namespace }) getClientById: any;

    client: Client | null = null;


    async created() {
        try {
            await this.getClients();
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
                this.client = this.getClientById(this.clientId);
            }
        } catch(e) {
            console.log(e);
        }
    }


    get isEditView() {
        return this.$route.name === 'client-details.edit';
    }

    get initials() {
        return this.client.firstName.charAt(0).toUpperCase();
    }
}