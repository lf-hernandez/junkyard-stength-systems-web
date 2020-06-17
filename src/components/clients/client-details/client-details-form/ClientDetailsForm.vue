<script lang="ts" src="./ClientDetailsForm.ts"></script>

<template>
    <div class="clientDetailsForm">
        <form>
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" id="first-name" aria-describedby="first-name"
                       v-model="client.FirstName"/>
            </div>

            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" id="last-name" aria-describedby="last-name"
                       v-model="client.LastName"/>
            </div>
            <hr>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="client.Email"/>
            </div>

            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" aria-describedby="phone" v-model="client.Phone"/>
            </div>

            <hr>

            <div class="form-group">
                <label for="last-chek-in">Last Check-in</label>
                <input type="tel" class="form-control" id="last-chek-in" aria-describedby="last-check-in"
                       v-model="client.LastCheckIn"/>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <button type="button" class="btn btn-block btn-danger">Remove</button>
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-block btn-primary">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>