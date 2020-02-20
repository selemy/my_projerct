<template>
	<div id="notification">
		<div v-colored:background="color">
			{{ message || '' }}
			<button @click="cancel">X</button>
		</div>
	</div>
</template>

<script>
	export default {
	
		name: "Notification",
		props: [ 'message', 'status'],
		data(){
			return {
				colors: {
					'error': 'red',
					'success': 'green',
					'warning': 'yellow',
					'default': 'grey'
				}
			}
		},
		methods: {
			cancel() {
				this.$emit('cancel')
			}
		},
		computed: {
			color() {
				return this.colors[this.status] || this.colors['default']
			}
		}
	}
</script>