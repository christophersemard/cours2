import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#1dc0d4",

                    secondary: "#ffffff",

                    accent: "#f7d94b",

                    neutral: "#102759",

                    "base-100": "#0c1f47",

                    info: "#00c5ff",

                    success: "#00c573",

                    warning: "#9d6300",

                    error: "#ee0637",
                },
            },
        ],
    },
};
export default config;
