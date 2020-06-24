<template>
    <div class="programsSideNav">
        <div class="card shadow">
            <div class="list-group">
                <h5 class="list-group-item-secondary m-0 p-3">By Client</h5>
                <a class="list-group-item list-group-item-action"
                   href="#"
                   v-for="client in clients"
                   :key="client.id">{{ getFullName(client.id) }}</a>
                <h5 class="list-group-item-secondary m-0 p-3">By Template</h5>
                <a class="list-group-item list-group-item-action"
                   href="#"
                   v-for="template in templates"
                   :key="template">{{ template }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts"
        src="./ProgramsSideNav.ts"></script>
<style lang="scss"
       src="./ProgramsSideNav.scss"></style>