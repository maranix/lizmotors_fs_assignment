import type React from "react";

import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NotFoundComponent from "../components/NotFoundComponent";

const Root: React.FC = () => {
	return (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
};

export const Route = createRootRoute({
	component: Root,
	notFoundComponent: () => {
		return <NotFoundComponent className="h-screen w-full flex flex-col justify-center items-center" />;
	},
});
