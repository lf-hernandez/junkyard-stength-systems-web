import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ProgramDetailsForm from '@/components/programs/program-details-form/ProgramDetailsForm.vue';
@Component({
    components: {
        ProgramDetailsForm
    }
})
export default class AddProgram extends Vue {}
