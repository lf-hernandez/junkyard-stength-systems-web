import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ClientDetailsForm from '@/components/clients/client-details/client-details-form/ClientDetailsForm.vue';
import ClientAvatar from '@/components/ui/client-avatar/ClientAvatar.vue';
import ClientsStore from '@/store/clients/ClientsStore';

@Component({
    components: {
        ClientAvatar,
        ClientDetailsForm
    }
})
export default class ClientDetails extends Vue {
    client: any = {};

    created() {
        const clientId = this.$route.params.clientId;

        this.client = ClientsStore.getters.clientById(clientId)
    }

    get isEditView() {
        return this.$route.name === 'client-details.edit';
    }

    get initials() {
        return this.client.FirstName.charAt(0).toUpperCase();
    }
}