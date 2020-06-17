<script lang="ts" src="./ClientCard.ts"></script>
<style lang="scss" src="./ClientCard.scss"></style>

<template>
    <div class="clientCard">
        <div class="card p-2">
            <div class="d-flex align-items-center">
                <div class="d-flex-shrink">
                    <ClientAvatar :initials="initials"></ClientAvatar>
                </div>
                <div class="d-flex-grow flex-fill p-2">
                    <h2 class="m-0">{{ fullName }}</h2>
                    <p class="m-0">Week {{ weekNumber }}</p>
                    <p class="m-0">Last Check-in {{ lastCheckIn}}</p>


                </div>
                <div class="p-4">
                    <button class="btn btn-lg btn-primary mr-3" @click="pushViewRoute">
                        View
                    </button>

                    <button class="btn btn-lg btn-success" @click="pushEditRoute">
                        Edit
                        <i class="far fa-pencil"></i>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>