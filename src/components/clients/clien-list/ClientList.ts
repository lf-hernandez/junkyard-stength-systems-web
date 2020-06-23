import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ClientCard from '@/components/clients/client-card/ClientCard.vue';
import { Client } from '@/types/types';

@Component({
    components: {
        ClientCard
    }
})
export default class ClientList extends Vue {
    @Prop() clients: Array<Client>;
}