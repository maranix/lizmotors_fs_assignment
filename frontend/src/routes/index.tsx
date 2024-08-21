import React from "react";

import { createFileRoute } from "@tanstack/react-router";
import TrainingCard from "../components/card/TrainingCard";

const Index: React.FC = () => {
    return (
        <main className="p-8 mx-auto w-2/3">
            <h1 className="text-4xl font-black">Available Tracks</h1>
            <hr />

            <section id="training-tracks">
                <TrainingCard className="w-1/2" />
            </section>
        </main>
    );
};

export const Route = createFileRoute("/")({
    component: Index,
});
