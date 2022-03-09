<template>
  <form @submit.prevent="uyeOl">
    <h4>Üye Olma Ekranı</h4>
    <input type="text" placeholder="please a username" v-model="username" />
    <input type="email" placeholder="please a email" v-model="email" />
    <input type="password" placeholder="please a password" v-model="parola" />
    <button>Üye Ol</button>
  </form>
  <div class="error">
    {{ error }}
  </div>
</template>

<script>
import { ref } from "vue";
import useRegister from "../composables/useRegister";

export default {
  setup(props, context) {
    const username = ref("");
    const email = ref("");
    const parola = ref("");

    const { error, signup } = useRegister();

    const uyeOl = async () => {
      //console.log(username.value,email.value,parola.value);
      await signup(email.value, parola.value, username.value);
      if (!error.value) {
        context.emit("register");
      }
    };

    return { username, email, parola, uyeOl, error };
  },
};
</script>

<style></style>
