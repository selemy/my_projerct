<template>
    <div id="home">
        <h1 class="bg-green-500 ...">Home Page<span>{{title}}</span></h1>
        <h1>{{ counter }}</h1>
    </div>
</template>

<script>
	// import {mapState} from 'vuex'
	import {mapGetters} from 'vuex'
	export default {
		name: "Home",
        // computed: mapState({
            // title: state => state.title //первый способ
               // title: 'title' //второй способ
            // })
		computed: mapGetters([
			'title',
			'counter'
		])
	}
</script>

<style></style>