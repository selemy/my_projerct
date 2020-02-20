<template>
    <div id="users-list">
        <h1>User List <span>{{counter}}</span></h1>
        <ul>
            <li v-for="user in users" :key="user.name" class="text-blue-600 hover:text-red-600 ...">
                <router-link tag="a" :to="`/users/${user.name}`">{{ user.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    // import {mapGetters} from 'vuex'
    export default {
        name: "List",
       
        methods: {
            getUsers() {
                this.$store.dispatch('getUsers')
            }
        },
        created() {
            this.getUsers()
        },
        computed: {
            users() {
                return this.$store.getters.users
            }
        }
        // computed: mapGetters([
        //     // 'users',
        //     // 'counter'
        //     users() {
        //         return this.$store.getters.users
        //     }
        // ])
        // computed: {
        //     counter() {
        //         return this.$store.state.counter
        //     }
        // }
    }
    
    
</script>

<style></style>