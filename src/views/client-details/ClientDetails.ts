import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientDetailsForm from '@/components/clients/client-details/client-details-form/ClientDetailsForm.vue';
import ClientAvatar from '@/components/ui/client-avatar/ClientAvatar.vue';
import { Action, Getter, State } from 'vuex-class';
import { Client, ClientsState } from '@/types/types';

const namespace = 'clients';

@Component({
    components: {
        ClientAvatar,
        ClientDetailsForm
    }
})
export default class ClientDetails extends Vue {
    @Prop() clientId: string;
    @State('clients', { namespace }) clientsState: ClientsState;
    @Action('getClients', { namespace }) getClients: any;
    @Getter('clientById', { namespace }) getClientById: any;

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

    get isEditView() {
        return this.$route.name === 'client-details.edit';
    }

    get initials() {
        return this.client.firstName.charAt(0).toUpperCase();
    }
}