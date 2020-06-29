import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { Action, Getter, State } from 'vuex-class';
import { Client } from '@/types/types';

import ProgramsGrid from '@/components/programs/programs-grid/ProgramsGrid.vue';
import ProgramsSideNav from '@/components/programs/programs-side-nav/ProgramsSideNav.vue';

const namespace = 'clients';

@Component({
    components: {
        ProgramsGrid,
        ProgramsSideNav
    }
})
export default class Programs extends Vue {
    @State('clients', { namespace }) clients: Array<Client> | undefined;
    @Action('getClients', { namespace }) getClients;
    @Getter('clientFullName', { namespace }) getClientFullName;

    async created() {
        try {
            await this.getClients();
        } catch (e) {
            console.log(e);
        }
    }
}
