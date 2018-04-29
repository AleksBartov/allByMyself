<template>
  <div>
    <input type='email' name='email' placeholder='email' v-model='email' /><br>
    <input type='password' name='password' placeholder='password' v-model='password' /><br>
    <button @click='register'>регистрация</button>
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
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
