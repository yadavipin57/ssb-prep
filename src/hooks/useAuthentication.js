import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const useAuthentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (userDetails) {
      navigate("/homepage");
    } else {
      navigate("/");
    }
  }, []);

  console.log(userDetails);

  const handleAuthDataValidation = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;

    //Login and Sign Up logic

    if (!isLogin) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setUserDetails(user);
          navigate("/homepage");
          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
          return Promise.reject(errorMessage); // Return the error for the caller to handle
        });
    } else {
      // Login logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUserDetails(user);
          navigate("/homepage");
          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
          return Promise.reject(errorMessage); // Return the error for the caller to handle
        });
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
    userDetails,
  };
};

export default useAuthentication;
