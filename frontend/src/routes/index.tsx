import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<h1 className="flex justify-center text-4xl font-black">
			React + TanStack
		</h1>
	);
}
