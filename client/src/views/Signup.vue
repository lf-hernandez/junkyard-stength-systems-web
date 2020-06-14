<template>
  <div class="Signup">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Join the JSS Community</h3>

          <ul class="text-left mt-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Vestibulum eu purus dignissim, mattis nisi vel, fermentum massa.</li>
            <li>Donec et neque ut elit rutrum dapibus.</li>
            <li>Nam molestie ipsum vitae tortor suscipit, id hendrerit nisl imperdiet.</li>
            <li>In rhoncus eros sit amet dolor dictum finibus eget non orci.</li>
          </ul>
        </div>
        <div class="col">
          <SignupForm></SignupForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

import SignupForm from "@/components/Signup/SignupForm.vue";

@Component({
  components: {
    SignupForm
  }
})
export default class Signup extends Vue {}
</script>
