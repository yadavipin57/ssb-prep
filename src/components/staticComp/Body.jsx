import { createBrowserRouter } from "react-router-dom";
import Auth from "../auth/Auth";
import Homepage from "./Homepage";
import { RouterProvider } from "react-router-dom";
import { MAIN_BG } from "../../utils/constants";
import Wat from "../testComp/wat";
import WatTest from "../testComp/WatTest";
import TatTest from "../testComp/TatTest";
import Tat from "../testComp/Tat";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/homepage",  
      element: <Homepage />,
    },
    {
      path: "/wat",
      element: <Wat />,
    },
    {
      path: "/tat",
      element: <Tat />,
    },
    {
      path: "/wattest/:setId",
      element: <WatTest />,
    },
    {
      path: "/tattest/:setId",
      element: <TatTest />,
    },
  ]);

  const mainBG = new URL(MAIN_BG, import.meta.url).href;

  return (
    <>
      <RouterProvider router={appRouter} />
      <div className="w-full absolute top-0 left-0 -z-50">
        <img className="fixed w-full h-screen object-cover" src={mainBG} alt="LandingPage" />
      </div>
    </>
  );
}

export default Body;
