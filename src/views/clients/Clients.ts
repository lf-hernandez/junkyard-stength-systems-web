import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { Action, State } from 'vuex-class';

import { Client } from '@/types/types';
import ClientList from '@/components/clients/client-list/ClientList.vue';

const namespace = 'clients';

@Component({
    components: {
        ClientList
    }
})
export default class Clients extends Vue {
    @State('clients', { namespace }) clients: Array<Client> | undefined;
    @Action('getClients', { namespace }) getClients;

    async created() {
        if (this.clients.length === 0) {
            try {
                await this.getClients();
            } catch (e) {
                console.log(e);
            }
        }
    }

    pushAddClientRoute() {
        this.$router.push({ name: 'client-details.add' });
    }
}
