/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2F80ED",
          secondary: "#ce0eb8",
          accent: "#3259e5",
          neutral: "#1c1523",
          "base-100": "#F3F3F3",
          info: "#63cbee",
          success: "#5ddfbc",
          warning: "#f59432",
          error: "#de2141",
        },
      },
    ],
  },
};
