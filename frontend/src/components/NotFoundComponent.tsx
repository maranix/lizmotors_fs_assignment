type Variant = "default" | "custom";

interface Props {
    className?: string;
    children?: React.ReactNode;
    variant?: Variant;
}

const NotFoundComponent = ({
    className,
    children,
    variant = "default",
}: Props) => {
    return (
        <div className={`${className}`}>
            {variant == "default" ? (
                <h1 className="text-4xl font-black">404 Not Found</h1>
            ) : null}
            {children}
        </div>
    );
};

export default NotFoundComponent;
