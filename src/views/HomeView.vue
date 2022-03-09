<template>
  <div class="home container">
    <h2>Hodo Chat App</h2>
    <div v-if="isLogin">
      <Login />
      <p>
        Go to <span @click="isLogin = false">register page</span> for a register
      </p>
    </div>
    <div v-else>
      <Register />
      <p>Go to <span @click="isLogin = true">login page</span> for a login</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: { Register, Login },
  setup() {
    const isLogin = ref(true);
    return { isLogin };
  },
};
</script>

<style>
.home {
  text-align: left;
  padding: 20px 50px;
}
</style>
