import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class AddProgramForm extends Vue {
    pushProgramDesignRoute() {
        this.$router.push({ name: 'add-program.program-design' });
    }
}
