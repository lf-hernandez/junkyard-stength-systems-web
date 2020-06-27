import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SignUpForm from '@app/components/sign-up/sign-up-form/SignUpForm.vue';
import SignUpMarketing from '@app/components/sign-up/sign-up-marketing/SignUpMarketing.vue';

@Component({
    components: {
        SignUpForm,
        SignUpMarketing
    }
})
export default class Signup extends Vue {}