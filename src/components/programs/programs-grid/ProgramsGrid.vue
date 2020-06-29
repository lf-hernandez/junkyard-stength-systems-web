<template>
    <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-5" v-for="client in clients" :key="client.id">
            <ProgramsGridCard
                @click.native="pushProgramDetailsRoute(client.id)"
                :client="client"
            ></ProgramsGridCard>
        </div>
    </div>
</template>
<script lang="ts" src="./ProgramsGrid.ts"></script>
