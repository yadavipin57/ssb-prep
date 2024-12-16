import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignOut = () => {
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        setUsername(null);
        console.log("This is null value of username: " + username);
      })
      .catch((error) => {});
  };

  return { handleSignOut, username };
};

export default useSignOut;
