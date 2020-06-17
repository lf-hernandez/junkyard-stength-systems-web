<script lang="ts" src="./ClientDetails.ts"></script>

<template>
    <div class="clientDetails">
        <div class="container">
            <h1 class="text-left font-weight-light m-0">
                <template v-if="isEditView">
                    Edit Client Details
                </template>
                <template v-else>
                    Client Details
                </template>
            </h1>
            <div class="card shadow mt-5">
                <div class="card-body text-left">
                    <template v-if="isEditView">
                        <ClientDetailsForm :client="client"></ClientDetailsForm>
                    </template>
                    <template v-else>
                        <div class="d-flex">
                            <div class="flex-shrink">
                                <ClientAvatar :initials="initials"></ClientAvatar>
                            </div>
                            <div class="flex-grow flex-fill ml-4 p-2">
                                <p>First Name: {{ client.FirstName }}</p>
                                <p>Last Name: {{ client.LastName }}</p>
                                <hr>
                                <p>Email: {{ client.Email }}</p>
                                <p>Phone: {{ client.Phone}}</p>
                                <hr>
                                <p>Last Check-in: {{ client.LastCheckIn}}</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

