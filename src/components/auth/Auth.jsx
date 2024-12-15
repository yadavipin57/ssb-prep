import { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";
import Header from "../staticComp/Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const navigation = useNavigate();

  const handleAuthDataValidation = () => {
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
          navigation("/homepage");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
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
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage)
        });
    }
  };

  const handleAuthOption = () => {
    setIsLogin((prev) => !prev);
    setErrMessage(null);
  };

  return (
    <>
      <Header />

      <div className="mt-[20%] sm:mt-[5%] mx-auto sm:w-2/5 text-blue-700">
        <form
          className="mx-auto w-11/12 sm:w-4/5 bg-green-300 bg-opacity-50"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="m-3 py-3 text-xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </h3>
          <input
            className="mx-[50%] my-4 translate-x-[-50%] px-4 py-2 w-4/5 border border-black placeholder:text-blue-400"
            type="email"
            placeholder="Email Id"
            ref={email}
          />
          <input
            className="mx-[50%] my-4 translate-x-[-50%] px-4 py-2 w-4/5 border border-black placeholder:text-blue-400"
            type="text"
            placeholder="Password"
            ref={password}
          />
          <p className="mx-[50%] translate-x-[-50%] w-4/5">{errMessage}</p>
          <button
            className="mx-[50%] my-4 translate-x-[-50%] px-4 py-2  w-4/5 border border-black"
            onClick={handleAuthDataValidation}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p
            className="mx-[50%] my-4 translate-x-[-50%] pb-6  w-4/5 cursor-pointer"
            onClick={handleAuthOption}
          >
            {isLogin
              ? "Don't have an account, Sign Up here"
              : "Already have an account, Login here"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Auth;