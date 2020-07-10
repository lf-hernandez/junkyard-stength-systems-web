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
    @State('clients', { namespace }) clients!: Array<Client>;
    @Action('getClients', { namespace }) getClients!: () => void;
    @Getter('clientFullName', { namespace }) getClientFullName!: () => void;

    async created() {
        try {
            await this.getClients();
        } catch (e) {
            console.log(e);
        }
    }

    pushAddProgramRoute() {
        this.$router.push({ name: 'add-program' });
    }
}
