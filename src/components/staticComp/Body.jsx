import { createBrowserRouter } from "react-router-dom";
import Auth from "../auth/Auth";
import Homepage from "./Homepage";
import { RouterProvider } from "react-router-dom";

function Body() {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Auth/>
        },
        {
            path: "homepage",
            element: <Homepage/>
        }
    ])

    return (
      <>
        <RouterProvider router={appRouter} />
      </>
    )
  }
  
  export default Body;