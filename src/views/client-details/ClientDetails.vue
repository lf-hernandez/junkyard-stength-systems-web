<template>
    <div class="clientDetails container pt-5"
         v-if="client">
        <div class="d-flex justify-content-between">
            <div>
                <h1 class="text-left font-weight-light m-0">
                    <template v-if="isEditView">
                        Edit Client Details
                    </template>
                    <template v-if="isNewClient">
                        Add New Client
                    </template>
                    <template v-else>
                        Client Details
                    </template>
                </h1>
            </div>
            <div>
                <template v-if="isDetailsView">
                    <button class="btn btn-secondary btn-lg"
                            @click="returnToClientList">
                        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
                        Back
                    </button>
                </template>
            </div>
        </div>
        <div class="card shadow mt-5">
            <div class="card-body text-left">
                <template v-if="isEditView || isNewClient">
                    <ClientDetailsForm :client="client"
                                       :isNewClient="isNewClient"></ClientDetailsForm>
                </template>
                <template v-else>
                    <div class="d-flex">
                        <div class="flex-shrink">
                            <ClientAvatar :initials="initials"></ClientAvatar>
                        </div>
                        <div class="flex-grow flex-fill ml-4 p-2">
                            <p>First Name: {{ client.firstName }}</p>
                            <p>Last Name: {{ client.lastName }}</p>
                            <hr>
                            <p>Email: {{ client.email }}</p>
                            <p>Phone: {{ client.phone}}</p>
                            <hr>
                            <p>Last Check-in: {{ client.lastCheckIn}}</p>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-12 col-sm-6">
                            <button class="btn btn-block btn-danger mr-3"
                                    @click="deleteClient">
                                <font-awesome-icon :icon="['fas', 'id-card']"></font-awesome-icon>
                                Delete
                            </button>
                        </div>
                        <div class="col-12 col-sm-6">
                            <button class="btn btn-block btn-primary"
                                    @click="pushEditRoute">
                                <font-awesome-icon :icon="['fas', 'edit']"></font-awesome-icon>
                                Edit
                            </button>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script lang="ts"
        src="./ClientDetails.ts"></script>