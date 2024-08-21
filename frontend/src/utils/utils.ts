export const mergeStyles = (...styles: string[]): string => {
    if (styles.length === 0) return "";

    let builtStyle = "";

    styles.forEach((style) => {
        builtStyle += style + " ";
    });

    return builtStyle.trim();
};
