import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
         path: "/",
         element: <HomePage></HomePage>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      }
    ] 
  },
]);

export default router;