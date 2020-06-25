import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ClientList from '@/components/clients/clien-list/ClientList.vue';
import { Action, State } from 'vuex-class';
import { Client } from '@/types/types';

const namespace = 'clients';

@Component({
    components: {
        ClientList
    }
})
export default class Clients extends Vue {
    @State('clients', {namespace}) clients: Array<Client>;
    @Action('getClients', {namespace}) getClients: any;

    async created() {
        try {
            await this.getClients();
        } catch (e) {
            console.log(e);
        }
    }

    async pushAddClientRoute() {
        await this.$router.push({ name: 'client-details.add' });
    }
}