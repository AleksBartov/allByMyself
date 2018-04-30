<template>
  <div>
    <input type='email' name='email' placeholder='email' v-model='email' /><br><br>
    <input type='password' name='password' placeholder='password' v-model='password' /><br><br>
    <button @click='register'>REGISTER</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
