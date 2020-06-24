import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ProgramsGridCard from '@/components/programs/programs-gid-card/ProgramsGridCard.vue';

@Component({
    components: {
        ProgramsGridCard
    }
})
export default class ProgramsGrid extends Vue {
    async pushProgramDetailsRoute(id: string) {
        await this.$router.push({
            name: 'client-program-details.view',
            params: {
                clientId: id
            }
        });
    }
}