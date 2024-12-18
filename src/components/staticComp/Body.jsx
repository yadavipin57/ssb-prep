import { createBrowserRouter } from "react-router-dom";
import Auth from "../auth/Auth";
import Homepage from "./Homepage";
import { RouterProvider } from "react-router-dom";
// import { LANDING_PAGE } from "../../utils/constants";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
      {/* <div>
        <img src={LANDING_PAGE} alt="LandingPage" />
      </div> */}
    </>
  );
}

export default Body;
