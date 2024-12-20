import { useContext, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import userContext from "../../utils/contexts/userContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const {setSignedInUser, signedInUser} = useContext(userContext)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email} = user;
        setSignedInUser(email)

        if(location.pathname === "/"){
          navigate("/homepage")
        }
      } else {
        if(location.pathname !== "/" ) navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-2 sm:p-4 flex justify-between items-center bg-[#5197AB] bg-opacity-70">
      <h1 className="sm:text-5xl font-bold text-[#EFD6AD] shadow-xl">SSB PREP</h1>
      {signedInUser && (
        <div>
          <NavigationBar />
        </div>
      )}
    </div>
  );
};

export default Header;
