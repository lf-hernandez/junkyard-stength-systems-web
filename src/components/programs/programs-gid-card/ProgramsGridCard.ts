import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Client } from '@/types/types';
import { Getter } from 'vuex-class';

const namespace = 'clients';

@Component
export default class ProgramsGridCard extends Vue {
    @Prop() client: Client | undefined;
    @Getter('clientFullName', { namespace }) getClientFullName;

    getFullName(id: string) {
        return this.getClientFullName(id);
    }
}
