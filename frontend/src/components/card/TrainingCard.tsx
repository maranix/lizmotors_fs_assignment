import React from "react";

import { mergeStyles } from "../../utils/utils";

interface Props {
    className?: string;
    variant?: CardVariant;
}

type CardVariant = "expanded" | "compact";
type CardProps = Omit<Props, "variant">;

const TrainingCard: React.FC<Props> = ({ className, variant = "compact" }) => {
    return variant === "compact" ? (
        <CompactCard className={className} />
    ) : (
        <ExpandedCard />
    );
};

const CompactCard: React.FC<CardProps> = ({ className = "" }) => {
    return (
        <article
            className={mergeStyles(
                "p-4 bg-card rounded-md shadow-md space-y-4",
                className,
            )}
        >
            <h1 className="text-xl font-bold">Personal Protective Equipment (PPE)</h1>
            <p className="text-text-secondary">
                Explore the importance, types, and best practices for using and
                maintaining protective gear.
            </p>
            <StageProgressBar />
        </article>
    );
};

// TODO: Switch to two column based layout.
//
// First column will display title and description.
// Second column will display circular status with percentage and an arrow icon on the bottom.
const ExpandedCard: React.FC<CardProps> = ({ className = "" }) => {
    return (
        <article
            className={mergeStyles(
                "p-4 bg-card rounded-md shadow-md space-y-4",
                className,
            )}
        >
            <h1 className="text-xl font-bold">Personal Protective Equipment (PPE)</h1>
            <p className="text-text-secondary">
                Explore the importance, types, and best practices for using and
                maintaining protective gear.
            </p>
        </article>
    );
};

// TODO: Add Arrow Icon
const StageProgressBar: React.FC = () => {
    const totalStages = 8;
    const completedStages = 3;

    const calculateCompletionPercentage = (): number => {
        return Math.floor((completedStages / totalStages) * 100);
    };

    const completionPercentage = calculateCompletionPercentage();

    return (
        <div className="flex flex-row justify-between items-center text-sm">
            <div
                id="progress-container"
                className="flex flex-row items-center space-x-2"
            >
                <div
                    id="training-progress-bar"
                    className="h-2 w-24 bg-secondary-light rounded-md"
                >
                    <div
                        className="h-2 bg-primary rounded-md"
                        style={{ width: `${completionPercentage}%` }}
                    ></div>
                </div>
                <p className="text-primary">
                    <span className="font-bold">
                        {completedStages}/{totalStages}
                    </span>{" "}
                    completed
                </p>
            </div>

            <p className="text-text-secondary">next</p>
        </div>
    );
};

export default TrainingCard;
