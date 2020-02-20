import {eventBus} from "../main"

export default {
	data() {
		return {
			notify: {
			massage: null,
			status: null
			},
			showNotify: false
		}
	
	}, 
	created() {
		eventBus.$on('show-notify', (notify) => {
		this.notify = notify
		this.showNotify = true
		})
	}
}
