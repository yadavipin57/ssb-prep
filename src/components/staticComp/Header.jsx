import useAuthentication from "../../hooks/useAuthentication";
import NavigationBar from "./NavigationBar";

const Header = () => {
  // const {userDetails} = useAuthentication()

  // console.log(userDetails)

  const { userDetails } = useAuthentication();

  if (!userDetails) {
    return (
      <div className="p-2 sm:p-4 flex justify-between items-center bg-green-500">
        <h1 className="sm:text-5xl font-bold text-blue-700">
          SSB PREP No User
        </h1>
        <div>
          <NavigationBar />
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-4 flex justify-between items-center bg-green-500">
      <h1 className="sm:text-5xl font-bold text-blue-700">SSB PREP</h1>
      <div>
        <NavigationBar />
      </div>
    </div>
  );
};

export default Header;
