<template>
	<div id="list-users">
		<h1>List Users</h1>
		<ul>
			<li v-for="employee in employees" :key="employee.id">
				{{ users_list }}
			</li>
		</ul>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
        name: "List",
        data() {
            return {
                users: []
            }
        },
        methods: {
            getUsers() {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(res => {
                        this.users = res.data.data
                    })
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e);
                        /* eslint-enable no-console */
                    })
            }
        },
        created() {
            this.getUsers()
        }
    }
</script>