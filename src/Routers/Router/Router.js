import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Home/Login/Login";
import MyReviews from "../../pages/Reviews/MyReviews/MyReviews";
import ServiceDetail from "../../pages/Services/ServiceDetail";
import Services from "../../pages/Services/Services";
import Signup from "../../pages/Signup/Signup";
import PrivetRout from "../PrivetRout/PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://photograpy-server-black.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(
            `https://photograpy-server-black.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivetRout>
            <MyReviews></MyReviews>
          </PrivetRout>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
