import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import SignInForm from '@app/components/sign-in/sign-in-form/SignInForm.vue';

@Component({
    components: {
        SignInForm
    }
})
export default class SignIn extends Vue {}