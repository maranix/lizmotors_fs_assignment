export const mergeStyles = (...styles: string[]): string => {
	if (styles.length === 0) return "";

	let builtStyle = "";

	for (const style of styles) {
		builtStyle += `${style} `;
	}

	return builtStyle.trim();
};
