import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import ClientListCard from '@/components/clients/client-list-card/ClientListCard.vue';
import { Client } from '@/types/types';

@Component({
    components: {
        ClientListCard
    }
})
export default class ClientList extends Vue {
    @Prop() clients: Array<Client>;

    async pushViewRoute(id: string) {
        await this.$router.push({name: 'client-details.view', params: { clientId: id }} );
    }
}