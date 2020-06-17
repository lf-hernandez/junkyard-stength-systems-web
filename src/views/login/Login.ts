import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LoginForm from '@/components/login/login-form/LoginForm.vue';

@Component({
    components: {
        LoginForm
    }
})
export default class Login extends Vue {}