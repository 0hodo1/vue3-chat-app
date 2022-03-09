<template>
  <form>
    <input
      @keypress.enter.prevent="send"
      placeholder="Please leave a message"
      v-model="message"
    />
  </form>
</template>

<script>
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { date } from "../firebase/config";
import { ref } from "vue";

export default {
  setup() {
    const { user } = getUser();
    const message = ref("");

    const { addDocument, hata } = useCollection("messages");

    const send = async () => {
      const chat = {
        user: user.value.displayName,
        message: message.value,
        createdAt: date(),
      };
      await addDocument(chat);
      if (!hata.value) {
        message.value = "";
      } else {
        message.value = hata.value;
      }
    };

    return { message, send };
  },
};
</script>

<style scoped>
form {
  width: 500px;
  margin: 20px auto;
  text-align: center;
}
input {
  width: 100%;
  max-width: 100%;
  border: none;
}
</style>
