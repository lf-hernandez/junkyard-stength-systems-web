import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Client } from '@/types/types';
import { Getter } from 'vuex-class';

const namespace = 'clients';

@Component
export default class ProgramsSideNav extends Vue {
    @Prop() clients: Array<Client>;
    @Getter('clientFullName', {namespace}) getClientFullName: any;

    templates = [
        'Strength',
        'Hypertrophy',
        'Combat Sport Conditioning'
    ];

    getFullName(id: string) {
        return this.getClientFullName(id);
    }
}