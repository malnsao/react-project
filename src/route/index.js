import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";

import NotFound from "@/pages/NotFound";
import Icon from "@/pages/Icon";

import { Navigate } from "react-router-dom";

export const config = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" />,
  },
  {
    path: "/icon",
    element: <Icon />,
  },
];
export default () => useRoutes(config);
