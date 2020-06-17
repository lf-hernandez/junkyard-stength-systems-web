import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ClientCard extends Vue {
    @Prop() name: string;
    @Prop() weekNumber: number;

    get initials() {
        return this.name.split('')[0].toUpperCase();
    }
}