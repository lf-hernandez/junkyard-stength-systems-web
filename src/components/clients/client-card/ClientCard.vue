<script lang="ts" src="./ClientCard.ts"></script>
<style lang="scss" src="./ClientCard.scss"></style>

<template>
    <div class="clientCard">
        <div class="card p-2">
            <div class="d-flex align-items-center p-2">
                <ClientAvatar :initials="initials"></ClientAvatar>
                <div class="flex-fill text-center">
                    <h2 class="m-0">{{ fullName }}</h2>
                    <p class="m-0">Week {{ weekNumber }}</p>
                    <p class="m-0">Last Check-in {{ lastCheckIn}}</p>
                </div>
                <div class="ml-auto p-4">
                    <button class="btn btn-lg btn-primary mr-3" @click="pushViewRoute">
                        <font-awesome-icon icon="id-card"></font-awesome-icon>
                        View
                    </button>

                    <button class="btn btn-lg btn-success" @click="pushEditRoute">
                        <font-awesome-icon icon="edit"></font-awesome-icon>
                        Edit
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>