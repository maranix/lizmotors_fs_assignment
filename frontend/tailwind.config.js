/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--color-primary)",
                    dark: "var(--color-primary-dark)",
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)",
                    light: "var(--color-secondary-light)",
                },
                background: "var(--color-background)",
                accent: {
                    mint: "var(--color-accent-mint)",
                    pink: "var(--color-accent-pink)",
                },
                text: {
                    DEFAULT: "var(--color-text)",
                    secondary: "var(--color-text-secondary)",
                },
                warning: "var(--color-warning)",
                card: {
                    DEFAULT: "var(--color-card-background)",
                },
            },
        },
    },
    plugins: [],
};
