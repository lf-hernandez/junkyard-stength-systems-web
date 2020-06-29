import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ClientAvatar extends Vue {
    @Prop() initials: string;
}