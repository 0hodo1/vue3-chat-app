import { ref } from "vue";
import { auth } from "../firebase/config";

const hata = ref(null);

const signup = async (email, parola, username) => {
  hata.value = null;
  try {
    if (username.trim() === "") {
      throw new Error("Username is required");
    }
    const res = await auth.createUserWithEmailAndPassword(email, parola);

    if (!res) {
      throw new Error("Problem here!");
    }

    await res.user.updateProfile({ displayName: username });

    hata.value = null;
    return res;
  } catch (error) {
    hata.value = error.message;
  }
};

const useRegister = () => {
  return { hata, signup };
};

export default useRegister;
