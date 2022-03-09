import { ref } from "vue";
import { auth } from "../firebase/config";

const user = ref(auth.currentUser);

auth.onAuthStateChanged((k) => {
  user.value = k;
});

const getUser = () => {
  return { user };
};

export default getUser;
