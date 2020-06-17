<script lang="ts" src="./ClientDetails.ts"></script>

<template>
    <div class="clientDetails">
        <div class="card">
            <div class="card-body text-left">
                <form>
                    <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input type="text" class="form-control" id="first-name" aria-describedby="first-name"/>
                    </div>

                    <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input type="text" class="form-control" id="last-name" aria-describedby="last-name"/>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>

                    <div class="form-group">

                    </div>

                    <button type="submit" class="mt-5 btn btn-block btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

