import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../assets/base.css";

export const Route = createRootRoute({
    component: Root,
});

function Root() {
    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}
