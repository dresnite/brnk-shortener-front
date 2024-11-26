import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      large: '48px'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        intenseOrange: "#FE4409",
        softCyanGray: "#ADC2C3",
        lightGrayishBlue: "#C9CED6",
        veryDarkBlue: "#181E29",
        greenish: "#ADC2C3",
        blueish: '#1C283FB0'
      },
    },
  },
  plugins: [],
} satisfies Config;
