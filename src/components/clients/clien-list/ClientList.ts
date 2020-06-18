import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ClientCard from '@/components/clients/client-card/ClientCard.vue';
import { Client } from '@/types/Client';
import ClientsStore from '@/store/clients/ClientsStore';

@Component({
    components: {
        ClientCard
    }
})
export default class ClientList extends Vue {
    clients: Array<Client>;

    async created() {
        await this.loadClients();

        console.log('loading clients, be patient...');
        console.log(this.clients);
    }

    get IsClientsLoaded() {
        return !!this.clients;
    }

    async loadClients() {
        await ClientsStore.dispatch('getClients');

        this.clients = ClientsStore.state.clients;
    }

}