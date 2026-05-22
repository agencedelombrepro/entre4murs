import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/peintre-laigle",
    element: <CityPage city="laigle" />,
  },
  {
    path: "/peintre-verneuil-davre-et-diton",
    element: <CityPage city="verneuil" />,
  },
  {
    path: "/peintre-mortagne-au-perche",
    element: <CityPage city="mortagne" />,
  },
  {
    path: "/peintre-nogent-le-rotrou",
    element: <CityPage city="nogent" />,
  },
  {
    path: "/peintre-gace",
    element: <CityPage city="gace" />,
  },
  {
    path: "/peintre-argentan",
    element: <CityPage city="argentan" />,
  },
  {
    path: "/peintre-tourouvre-au-perche",
    element: <CityPage city="tourouvre" />,
  },
  {
    path: "/peintre-saint-sulpice-sur-risle",
    element: <CityPage city="saintsulpice" />,
  },
  {
    path: "/peintre-rai",
    element: <CityPage city="rai" />,
  },
  {
    path: "/peintre-aube",
    element: <CityPage city="aube" />,
  },
  {
    path: "/peintre-crulai",
    element: <CityPage city="crulai" />,
  },
  {
    path: "/peintre-chandai",
    element: <CityPage city="chandai" />,
  },
  {
    path: "/peintre-moulins-la-marche",
    element: <CityPage city="moulins" />,
  },
  {
    path: "/peintre-longny-les-villages",
    element: <CityPage city="longny" />,
  },
]);
