import Suspense from "common/Suspense";
import { RoutePaths } from "constants/RouteConstants";

import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { configureRoutes } from "utils/RouteUtils";

function AppPublic() {
  const routes = useRoutes(ROUTES);
  return (
		<div className="flex-col flex-1 ">
			<Suspense>{routes}</Suspense>
		</div>
	);
}

export default AppPublic;

const ROUTES = configureRoutes([
  {
    path: RoutePaths.HOME.concat("*"),
    element: lazy(() => import("./public/Public")) as any,
  },
]);
