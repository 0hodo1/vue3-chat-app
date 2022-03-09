import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null);

const signup = async (email, parola, username) => {
  error.value = null;
  try {
    if (username.trim() === "") {
      throw new Error("Username is required");
    }
    const res = await auth.createUserWithEmailAndPassword(email, parola);

    if (!res) {
      throw new Error("Error creating user");
    }

    await res.user.updateProfile({ displayName: username });

    error.value = null;
    return res;
  } catch (error) {
    error.value = error.message;
  }
};

const useRegister = () => {
  return { error, signup };
};

export default useRegister;
