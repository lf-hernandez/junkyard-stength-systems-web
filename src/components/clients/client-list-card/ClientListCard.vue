<template>
    <div class="clientListCard">
        <div class="card p-2">
            <div class="d-flex align-items-center p-2">
                <ClientAvatar :initials="initials"></ClientAvatar>
                <div class="flex-fill text-center">
                    <h2 class="m-0">{{ fullName }}</h2>
                    <p class="m-0">Week {{ weekNumber }}</p>
                    <p class="m-0">Last Check-in {{ lastCheckIn }}</p>
                </div>
                <div class="ml-auto p-4"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./ClientListCard.ts"></script>
<style lang="scss" src="./ClientListCard.scss"></style>
