<template>
    <div class="programsLibrarySideNav">
        <div class="card shadow">
            <div class="card-header">
                <h5 class="card-title m-0 text-center">
                    Clients
                </h5>
            </div>
            <div class="card-body p-0">
                <div class="list-group">
                    <a class="list-group-item list-group-item-action" href="#" v-for="client in clients"
                       :key="client.id">
                        {{ FullName(client.id) }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ProgramsSideNav.ts"></script>