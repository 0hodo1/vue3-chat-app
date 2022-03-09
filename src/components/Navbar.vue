<template>
  <nav>
    <div>
      <p>Merhaba {{ user.displayName }}</p>
      <p class="email">Merhaba {{ user.email }}</p>
    </div>
    <button @click="logout">X</button>
  </nav>
</template>

<script>
import { auth } from "../firebase/config";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";

export default {
  setup() {
    const router = useRouter();
    const { user } = getUser();
    const logout = async () => {
      await auth.signOut().then(() => {
        router.push({ name: "home" });
      });
    };

    return { logout, user };
  },
};
</script>

<style></style>
