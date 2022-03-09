<template>
  <div class="chat-window">
    <div v-if="hata">{{ hata }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div
        v-for="document in duzenlenmisBelgeler"
        :key="document.id"
        class="single"
      >
        <span class="created-at">{{ document.createdAt }}</span>
        <span class="name">{{ document.user }}</span>
        <span style="text-decoration: none">{{ document.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    const { hata, documents } = getCollection("messages");

    const duzenlenmisBelgeler = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { hata, documents, duzenlenmisBelgeler, messages };
  },
};
</script>

<style scoped></style>
