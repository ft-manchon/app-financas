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
      "blue": "#0000FF",
      "yellow": "#FFFF00",
      "pink": "#FF69B4",
      "red": "#FF0000",
      "orange": "#FFA500",
      "green": "#008000",
      "purple": "#A020F0"
    },
  },
  plugins: [],
};
export default config;
