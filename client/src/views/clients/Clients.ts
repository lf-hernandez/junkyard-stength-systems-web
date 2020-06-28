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
    @State('clients', {namespace}) clients: Array<Client>;
    @Action('getClients', {namespace}) getClients: any;

    async created() {
       if(this.clients.length === 0) {
           try {
               await this.getClients();
           } catch (e) {
               console.log(e);
           }
       }
    }

    async pushAddClientRoute() {
        await this.$router.push({ name: 'client-details.add' });
    }
}