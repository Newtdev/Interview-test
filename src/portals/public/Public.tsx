import Suspense from "common/Suspense";
import { RoutePaths } from "constants/RouteConstants";
import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { configureRoutes } from "utils/RouteUtils";
import PublicHeader from "./components/PublicHeader";
import Footer from "./general/Footer";
import MainConent from "./general/MainConent";

import SectionThree from "./general/SectionThree";
import SectionTwo from "./general/SectionTwo";
import SectionOne from "./general/SectionOne";
import SectionFour from "./general/SectionFour";
import FeaturesSection from "./general/FeaturesSection";
import TrustedBy from "./general/TrustedBy";
import SectionFive from "portals/public/general/SectionFive";
import SectionSix from "portals/public/general/SectionSix";

function Public() {
	const routes = useRoutes(ROUTES);
	return (
		<main className="w-screen h-full min-w-screen ">
			<PublicHeader />
			<Suspense>{routes}</Suspense>
			<SectionThree />
			<Footer />
		</main>
	);
}

export default Public;

const Home = () => {
	return (
		<>
			<MainConent />

			<SectionOne />
			<FeaturesSection />
			<SectionTwo />
			<SectionFour />
			<SectionFive />
			<SectionSix />
		</>
	);
};

const ROUTES = configureRoutes([
	{
		path: "*",
		element: <Navigate to={RoutePaths.HOME} />,
	},
	{
		path: RoutePaths.HOME,
		element: <Home />,
	},
	{
		path: RoutePaths.CALCULATION,
		element: lazy(() => import("./general/Calculator")) as any,
	},
	{
		path: RoutePaths.FAQ,
		element: lazy(() => import("./general/FAQ")) as any,
	},
	{
		path: RoutePaths.PRICING,
		element: lazy(() => import("./general/Pricing")) as any,
	},

	{
		path: RoutePaths.SOLUTIONS,
		element: lazy(() => import("./general/Solutions")) as any,
	},
	{
		path: RoutePaths.COMPANY,
		element: lazy(() => import("./general/Company")) as any,
	},
	{
		path: RoutePaths.BLOG,
		element: lazy(() => import("./general/Blog")) as any,
	},
	{
		path: RoutePaths.RESOURCES,
		element: lazy(() => import("./general/Resources")) as any,
	},
]);
