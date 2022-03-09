<template>
  <form @submit.prevent="register">
    <h4>Register page</h4>
    <input
      type="text"
      placeholder="please enter your username"
      v-model="username"
    />
    <input type="email" placeholder="please enter your email" v-model="email" />
    <input
      type="password"
      placeholder="please enter your password"
      v-model="password"
    />
    <button>Sign Up</button>
  </form>
  <div class="error">
    {{ hata }}
  </div>
</template>

<script>
import { ref } from "vue";
import useRegister from "../composables/useRegister";

export default {
  setup(props, context) {
    const username = ref("");
    const email = ref("");
    const password = ref("");

    const { hata, signup } = useRegister();

    const register = async () => {
      //console.log(username.value,email.value,password.value);
      await signup(email.value, password.value, username.value);
      if (!hata.value) {
        context.emit("register");
      }
    };

    return { username, email, password, register, hata };
  },
};
</script>

<style></style>
