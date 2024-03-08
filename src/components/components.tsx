import { lazy } from "react";

import NavBar from "./Navbar/Navbar";
// const NavBar = lazy(() => import("./Navbar/Navbar"));

import ErrorPage from "./Error/ErrorPage";
// const ErrorPage = lazy(() => import("./Error/ErrorPage"));

import * as HomeComponents from "./Home/home";


export { NavBar, ErrorPage, HomeComponents };