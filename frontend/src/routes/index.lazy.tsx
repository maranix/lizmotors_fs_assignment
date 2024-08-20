import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<h1 className="flex justify-center text-4xl font-black">
			React + TanStack
		</h1>
	);
}
