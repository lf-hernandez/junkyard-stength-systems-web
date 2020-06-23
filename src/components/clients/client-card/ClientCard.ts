import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientAvatar from '@/components/ui/client-avatar/ClientAvatar.vue';

import { Client } from '@/types/types';

@Component({
    components: {
        ClientAvatar
    }
})
export default class ClientCard extends Vue {
    @Prop() client: Client;

    get fullName() {
        return `${this.client.FirstName} ${this.client.LastName}`;
    }

    get initials() {
        return this.client.FirstName.charAt(0).toUpperCase();
    }

    get weekNumber() {
        return this.client.WeekNumber;
    }

    get lastCheckIn() {
        return this.client.LastCheckIn;
    }

    pushEditRoute() {
        this.$router.push({name: 'client-details.edit', params: {clientId: this.client.Id, client: this.client}});
    }

    pushViewRoute() {
        this.$router.push({name: 'client-details.view', params: {clientId: this.client.Id, client: this.client}});
    }
}