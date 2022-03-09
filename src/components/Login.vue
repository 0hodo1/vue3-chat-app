<template>
  <form @submit.prevent="signin">
    <h4>Login Page</h4>
    <input type="email" placeholder="please a email" v-model="email" />
    <input type="password" placeholder="please a password" v-model="password" />
    <button>Login</button>
  </form>
  <div class="error">
    {{ hata }}
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const { hata, login } = useLogin();

    const signin = async () => {
      login(email.value, password.value);
    };
    return {
      email,
      password,
      signin,
      hata,
    };
  },
};
</script>

<style></style>
