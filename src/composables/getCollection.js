import { ref } from "vue";
import { db } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const hata = ref(null);

  let collectionRef = db.collection(collection).orderBy("createdAt");

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];

      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      hata.value = null;
    },
    (err) => {
      documents.value = null;
      hata.value = "no data";
    }
  );
  return { documents, hata };
};

export default getCollection;
