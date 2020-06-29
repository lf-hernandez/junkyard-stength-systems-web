<template>
    <div class="clients container">
        <div class="row">
            <div class="col-12 col-sm-5">
                <h1 class="text-left font-weight-light m-0">Client Management</h1>
            </div>
            <div class="col-12 col-sm-7 d-flex justify-content-end">
                <form class="form-inline">
                    <div class="form-group mx-sm-3">
                        <input class="form-control form-control-lg"
                               type="text"
                               placeholder="Search"
                               aria-label="Search">
                    </div>
                </form>
                <button class="btn btn-primary"
                        type="button"
                        @click="pushAddClientRoute">
                    <font-awesome-icon icon="user-plus"></font-awesome-icon>
                    New Client
                </button>

            </div>
        </div>
        <br><br>
        <ClientList :clients="clients"></ClientList>
    </div>
</template>
<script lang="ts" src="./Clients.ts"></script>