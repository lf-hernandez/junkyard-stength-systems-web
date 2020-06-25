import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { Action, Getter, State } from 'vuex-class';
import { Client, ClientsState } from '@/types/types';

import ProgramsGrid from '@/components/programs/programs-grid/ProgramsGrid.vue';
import ProgramsSideNav from '../../components/programs/programs-side-nav/ProgramsSideNav.vue';

const namespace = 'clients';

@Component({
    components: {
        ProgramsGrid,
        ProgramsSideNav
    }
})
export default class Programs extends Vue {
    @State('clients', { namespace }) clients: Array<Client>;
    @Action('getClients', { namespace }) getClients: any;
    @Getter('clientFullName', { namespace }) getClientFullName: any;

    async created() {
        try {
            await this.getClients();
        } catch(e) {
            console.log(e);
        }
    }
}