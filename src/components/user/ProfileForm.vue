<template>
	<div id="profile-form">
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" v-model="name">
		</div>
		<div>
			<label for="surname">Surname</label>
			<input type="text" id="surname" v-model="surname">
		</div>
		<div>
			<label for="aboutMe">AboutMe</label>
			<textarea  rows="15" type="text" id="aboutMe" v-model="aboutMe" style="width: 500px"></textarea>
		</div>
		<div>
			<button @click="save">Save</button>
			<button @click="cancel">Cancel</button>
		</div>
	</div>
</template>

<script>
import {eventBus} from '../../main'

	export default {
		props: {
			user: {
				type: Object,
				required: true				
			}
		},
		name: "ProfileForm",
		data(){
			return {
				name: '',
				surname: '',
				aboutMe: ''
			}
		},
		methods: {
			save(){
				let name = this.name
				let surname = this.surname
				let aboutMe = this.aboutMe

				this.$emit('save-user', {name, surname, aboutMe})

				eventBus.$emit('show-notify', {
					message: 'User saved',
					status: 'success'
				})
				this.cancel()
			},
			cancel(){
				this.$emit('cancel')
			}
		},
		created(){
			this.name = this.user.name
			this.surname = this.user.surname
			this.aboutMe = this.user.aboutMe
		}
	}

</script>