import { useContext, useState } from "react";
import { NAVIGATION_LINKS } from "../../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useSignOut from "../../hooks/useSignOut";
import userContext from "../../utils/contexts/userContext";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {signedInUser} = useContext(userContext)

  const { handleSignOut } = useSignOut();

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
        <div className="px-2 absolute top-2 right-0 transition-all duration-500 ease-in-out text-[#EFD6AD] sm:w-8/12 z-50">
          {/* Menu Icon for Small Devices */}
          <div
            className={`ml-[70%] sm:hidden ${isMenuOpen ? "hidden" : "flex"}`}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </div>

          {/* Close Icon for Small Devices */}
          <div
            className={`ml-[70%] sm:hidden ${isMenuOpen ? "flex" : "hidden"}`}
            onClick={handleMenuClick}
          >
            <CloseIcon />
          </div>

          {/* Navigation Links */}
          <ul
            className={`p-3 sm:p-4 transform transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0 bg-[#5197AB]"
                : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
            } sm:opacity-100 sm:scale-100 sm:translate-y-0 sm:pointer-events-auto sm:flex sm:items-center sm:justify-evenly`}
          >
            <li className="text-lg font-bold sm:text-xl">{signedInUser}</li>
            {NAVIGATION_LINKS.map((navigationLink, index) => (
              <li className="text-lg font-bold sm:text-xl" key={index}>
                {navigationLink}
              </li>
            ))}
            <li className="text-lg font-bold sm:text-xl">
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default NavigationBar;

// useEffect(()=>{
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       const username = user.email
//       setUsername(username)
//       // ...
//     } else {
//       // User is signed out
//     }
//   });
// }, [username])
