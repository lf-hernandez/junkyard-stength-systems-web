import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientAvatar from '@/components/ui/client-avatar/ClientAvatar.vue';

@Component({
    components: {
        ClientAvatar
    }
})
export default class ClientCard extends Vue {
    @Prop() client: any;

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

    async pushEditRoute() {
        await this.$router.push({name: 'client-details.edit', params: { clientId: this.client.Id} });
    }

    async pushViewRoute() {
        await this.$router.push({name: 'client-details.view', params: { clientId: this.client.Id } });
    }
}