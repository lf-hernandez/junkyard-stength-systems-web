<template>
  <div class="Login">
    <div class="container">
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LoginForm from '@/components/login/LoginForm.vue';

@Component({
  components: {
    LoginForm
  }
})
export default class Login extends Vue {}
</script>
