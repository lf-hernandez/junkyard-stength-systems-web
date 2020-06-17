import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ClientListViewer from '@/components/clients/clien-list/ClientList.vue';

@Component({
    components: {
        ClientListViewer
    }
})
export default class Clients extends Vue {}