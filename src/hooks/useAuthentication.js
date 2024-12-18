import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const useAuthentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleAuthDataValidation = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;

    try {
      let userCredential;
      if (!isLogin) {
        // Sign-up logic
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
      } else {
        // Login logic
        userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
      }
      const user = userCredential.user;
    } catch (error) {
      setErrMessage(`${error.code} - ${error.message}`);
    }
  };

  return {
    email,
    password,
    isLogin,
    setIsLogin,
    errMessage,
    setErrMessage,
    handleAuthDataValidation,
  };
};

export default useAuthentication;
