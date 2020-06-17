import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SignupForm from '@/components/sign-up/sign-up-form/SignupForm.vue';

@Component({
    components: {
        SignupForm
    }
})
export default class Signup extends Vue {}