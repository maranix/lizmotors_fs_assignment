import React from "react";

import { createFileRoute } from "@tanstack/react-router";

const Index: React.FC = () => {
    return (
        <h1 className="flex justify-center text-4xl font-black">
            React + TanStack
        </h1>
    );
};

export const Route = createFileRoute("/")({
    component: Index,
});
