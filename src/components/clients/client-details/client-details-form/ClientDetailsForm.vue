<template>
    <div class="clientDetailsForm">
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input type="text"
                               class="form-control"
                               id="first-name"
                               aria-describedby="first-name"
                               v-model="client.firstName"/>
                    </div>

                    <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input type="text"
                               class="form-control"
                               id="last-name"
                               aria-describedby="last-name"
                               v-model="client.lastName"/>
                    </div>

                    <hr>

                    <div class="form-group">
                        <label for="last-check-in">Last Check-in</label>
                        <input type="tel"
                               class="form-control"
                               id="last-check-in"
                               aria-describedby="last-check-in"
                               v-model="client.lastCheckIn"/>
                    </div>
                </div>

                <div class="col">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email"
                               class="form-control"
                               id="email"
                               v-model="client.email"/>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text"
                               class="form-control"
                               id="phone"
                               aria-describedby="phone"
                               v-model="client.phone"/>
                    </div>
                </div>

            </div>
            <template v-if="isNewClient">
                <button class="btn btn-block btn-primary mt-4"
                        type="submit">
                    <font-awesome-icon class="mr-3"
                                       icon="user"></font-awesome-icon>
                    Add
                </button>
            </template>
            <template v-else>
                <div class="row mt-4">
                    <div class="col">
                        <button type="button"
                                class="btn btn-block btn-danger"
                                @click="deleteClient">
                            <font-awesome-icon :icon="['fas', 'trash']"></font-awesome-icon>
                            Remove
                        </button>
                    </div>
                    <div class="col">
                        <button type="submit"
                                class="btn btn-block btn-primary">
                            <font-awesome-icon :icon="['fas', 'save']"></font-awesome-icon>
                            Save
                        </button>
                    </div>
                </div>
            </template>
        </form>
    </div>
</template>
<script lang="ts"
        src="./ClientDetailsForm.ts"></script>