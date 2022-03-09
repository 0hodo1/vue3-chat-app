<template>
  <form @submit.prevent="register">
    <h4>Login Page</h4>
    <input type="email" placeholder="please a email" v-model="email" />
    <input type="password" placeholder="please a password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const register = () => {
      console.log(email.value, password.value);
    };
    return {
      email,
      password,
      register,
    };
  },
};
</script>

<style></style>
