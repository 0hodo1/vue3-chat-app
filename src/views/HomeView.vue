<template>
  <div class="home container">
    <h2>Hodo Chat App</h2>
    <div v-if="isLogin">
      <Login @login="startChat" />
      <p>
        Go to <span @click="isLogin = false">register page</span> for a register
      </p>
    </div>
    <div v-else>
      <Register @register="startChat" />
      <p>Go to <span @click="isLogin = true">login page</span> for a login</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  components: { Register, Login },
  setup() {
    const isLogin = ref(true);
    const router = useRouter();

    const startChat = () => {
      router.push({ name: "ChatRoom" });
    };
    return { isLogin, startChat };
  },
};
</script>

<style>
.home {
  text-align: left;
  padding: 20px 50px;
}
</style>
