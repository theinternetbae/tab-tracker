<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email"><br><br>
    <input type="password" name="password" placeholder="password" v-model="password"><br>
    <button @click="register">Register</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      console.log('register button was clicked', this.email, this.password)
    }
  }
}
</script>
<style scoped>

</style>
