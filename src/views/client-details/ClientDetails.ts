import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientDetailsForm from '@/components/clients/client-details/client-details-form/ClientDetailsForm.vue';
import ClientAvatar from '@/components/ui/client-avatar/ClientAvatar.vue';
import { Client } from '@/types/Client';

@Component({
    components: {
        ClientAvatar,
        ClientDetailsForm
    }
})
export default class ClientDetails extends Vue {
    @Prop() client: Client;

    get isEditView() {
        return this.$route.name === 'client-details.edit';
    }

    get initials() {
        return this.client.FirstName.charAt(0).toUpperCase();
    }
}