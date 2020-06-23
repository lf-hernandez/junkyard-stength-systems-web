import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Getter } from 'vuex-class';

const namespace = 'clients';

@Component
export default class ClientDetailsForm extends Vue {
    @Prop() clientId: string;

    @Getter('clientById', {namespace}) getClientById: (arg0: any) => any;

    created() {
        console.log(this.$store);
        console.log(this.clientId);
        console.log(this.getClientById(this.clientId));
        console.log(this.client);
    }

    get client() {
        return this.getClientById(this.clientId);
    }
}