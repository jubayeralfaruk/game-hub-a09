import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../Pages/Home";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import GameDetails from "../Pages/GameDetails";
import PrivateRouter from "../provider/PrivateRouter";
import AllGames from "../Pages/AllGames";
import UserProfile from "../components/UserProfile";
import ForgotPassword from "../Pages/auth/ForgotPassword";
import PageError from "../components/ErrorPage/PageError";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    loader: ()=>fetch('/games.json'),
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-games",
        Component: AllGames,
        element: (
          <PrivateRouter>
            <AllGames></AllGames>
          </PrivateRouter>
        ),
        loader: ()=>fetch('/games.json')
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "gameDetails/:gameId",
        element: (
          <PrivateRouter>
            <GameDetails></GameDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/games.json"),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRouter>
            <UserProfile></UserProfile>
          </PrivateRouter>
        ),
      },
      {
        path:'*',
        element: <PageError></PageError>
      }
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword></ForgotPassword> ,
      },
      {
        path:'*',
        element: <PageError></PageError>
      }
    ],
  },
]);

export default router;
