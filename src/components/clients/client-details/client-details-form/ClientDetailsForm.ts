import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ClientDetailsForm extends Vue {
    @Prop() client: any;
}