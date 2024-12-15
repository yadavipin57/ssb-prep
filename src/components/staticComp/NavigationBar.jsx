import { useState } from "react";
import { navigationLinks } from "../../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev)=>!prev)
  };

  return (
    <div className="px-2 absolute top-2 right-0 transition-all duration-500 ease-in-out text-blue-700 sm:w-1/2">
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
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        } bg-green-500 sm:opacity-100 sm:scale-100 sm:translate-y-0 sm:pointer-events-auto sm:flex sm:items-center sm:justify-evenly`}
      >
        {navigationLinks.map((navigationLink, index) => (
          <li className="text-lg font-bold sm:text-xl" key={index}>{navigationLink}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
