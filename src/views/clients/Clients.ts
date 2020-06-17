import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ClientList from '@/components/clients/clien-list/ClientList.vue';

@Component({
    components: {
        ClientList
    }
})
export default class Clients extends Vue {}