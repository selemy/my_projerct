<template>
  <div id="app">
    <router-link active-class="font-bold" exact to="/">Home</router-link>
    <router-link active-class="font-bold" :to="`/users`"> User List </router-link>
    <router-link active-class="font-bold" :to="`/employees`"> Employees </router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {}
  }

}
</script>

<style src="./assets/css/tailwind.css"></style>
