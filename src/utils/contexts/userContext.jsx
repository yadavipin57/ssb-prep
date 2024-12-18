import { createContext, useState } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedInUser, setSignedInUser] = useState(null);
  return (
    <userContext.Provider value={{ signedInUser, setSignedInUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
