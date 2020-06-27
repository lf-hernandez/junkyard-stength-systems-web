import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import { Client } from '@app/types/types';

import ProgramsGridCard from '@app/components/programs/programs-gid-card/ProgramsGridCard.vue';

const namespace = 'clients';

@Component({
    components: {
        ProgramsGridCard
    }
})
export default class ProgramsGrid extends Vue {
    @Prop() clients: Array<Client>;
    @Getter('clientFullName', {namespace}) getClientFullName: any;

    async pushProgramDetailsRoute(id: string) {
        await this.$router.push({name: 'client-program-details.view', params: {clientId: id}})
    }
}