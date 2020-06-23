import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { State, Action } from 'vuex-class';
import { ClientsState } from '@/types/types';

import ClientCard from '@/components/clients/client-card/ClientCard.vue';

const namespace = 'clients';

@Component({
    components: {
        ClientCard
    }
})
export default class ClientList extends Vue {
    isDataLoaded = false;

    @State('clients', {namespace}) clientsState: ClientsState;
    @Action('getClients', {namespace}) getClients: any;


    async created() {
        try {
            console.log(this.clientsState.clients);
            await this.loadClients();
            this.isDataLoaded = true;
            console.log(this.clientsState.default.data);
        } catch (e) {
            console.log(e);
        }
    }


    async loadClients() {
        await this.getClients();
    }
}