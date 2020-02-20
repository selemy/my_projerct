<template>
	<div id="user-profile">
		<h1>User Profile {{ id }}</h1>
		<h4>{{ this.$route.query['friend'] }}</h4>
		<h4>{{ this.$route.query['age'] }}</h4>
		<button @click="back" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Back</button>
	
	</div>
</template>

<script>
	
	
	export default {
		name: "Profile",
		filters: {
			readMore(text, limit, suffix) {
				return text.substring(0, limit) + suffix
			}
		},
		data(){
			return {
				id: this.$route.params['id']
			}
		},
		methods: {
			back() {
				this.$router.push('/users')
			}
		},
        watch: {
            $route(to) {
                this.id = to.params['id']
            }
        }
	}

</script>