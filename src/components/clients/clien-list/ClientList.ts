import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { State, Action } from 'vuex-class';
import { ClientsState } from '@/types/ClientsState';

const namespace = 'clients';

import ClientCard from '@/components/clients/client-card/ClientCard.vue';


@Component({
    components: {
        ClientCard
    }
})
export default class ClientList extends Vue {
    isDataLoaded = false;

    @State('clients') clientsState: ClientsState;
    @Action('getClients', {namespace}) getClients: any;


    async created() {
        try {
            await this.loadClients();
            this.isDataLoaded = true;
        } catch (e) {
            console.log(e);
        }
    }


    async loadClients() {
        await this.getClients();
    }

    get clientList() {
        return this.clientsState.clients.default.data;
    }

}