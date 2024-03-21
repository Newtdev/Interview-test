import Suspense from "common/Suspense";
import { RoutePaths } from "constants/RouteConstants";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { configureRoutes } from "../utils/RouteUtils";

function Session() {
  const routes = useRoutes(ROUTES);

  return (
    <>
      <Suspense>{routes}</Suspense>
    </>
  );
}

export default Session;

const ROUTES = configureRoutes(
  [
    {
      path: "*",
      element: <></>,
    },
    // {
    //   index: true,
    //   element: lazy(() => import("./SessionList")),
    // },
  ]
  // {
  //   pathPrifix: RoutePaths.ADMINS,
  //   excludePathPrifix: true,
  // }
);
