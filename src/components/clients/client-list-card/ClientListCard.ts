import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientAvatar from '@/components/ui/client-avatar/ClientAvatar.vue';

import { Client } from '@/types/types';

@Component({
    components: {
        ClientAvatar
    }
})
export default class ClientListCard extends Vue {
    @Prop() client!: Client;

    get fullName() {
        return `${this.client.firstName} ${this.client.lastName}`;
    }

    get initials() {
        return this.client.firstName.charAt(0).toUpperCase();
    }

    get weekNumber() {
        return this.client.weekNumber;
    }

    get lastCheckIn() {
        return this.client.lastCheckIn;
    }
}
