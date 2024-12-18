import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/contexts/userContext";

const useSignOut = () => {
  const navigate = useNavigate();

  const { setSignedInUser } = useContext(userContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSignedInUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return { handleSignOut };
};

export default useSignOut;
