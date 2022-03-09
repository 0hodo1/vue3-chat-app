import { ref } from "vue";
import { db } from "../firebase/config";

const useCollection = (collection) => {
  let hata = ref(null);

  const addDocument = async (document) => {
    hata.value = null;

    try {
      await db.collection(collection).add(document);
    } catch (error) {
      hata.value = "Message not sent";
    }
  };

  return { hata, addDocument };
};

export default useCollection;
