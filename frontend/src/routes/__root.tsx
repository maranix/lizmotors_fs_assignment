import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NotFoundComponent from "../components/NotFoundComponent";

export const Route = createRootRoute({
    component: Root,
    notFoundComponent: () => {
        return (
            <NotFoundComponent className="h-screen w-full flex flex-col justify-center items-center" />
        );
    },
});

function Root() {
    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}
