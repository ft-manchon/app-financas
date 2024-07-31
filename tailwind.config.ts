import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFF",
      "dark": '#05263A',
      "light": "#D9D9D9",
      "emphasis": "#FB6F24",
      "placeholder": "#778F9E",
    },
  },
  plugins: [],
};
export default config;
