/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-sm": "inset 0 -4px 0 #0000",
        "custom-lg": "inset 0 -8px 0 #0000",
      },
      colors: {
        "dark-navy-shadow": "#10212A",
        "dark-navy": "#1A2A33",
        "semi-dark-navy": "#1F3641",
        silver: "#A8BFC9",
        "silver-hover": "#DBE8ED",
        "silver-shadow": "#6B8997",
        "light-blue": "#31C3BD",
        "light-blue-hover": "#65E9E4",
        "light-blue-shadow": "#118C87",
        "light-yellow": "#F2B137",
        "light-yellow-hover": "#FFC860",
        "light-yellow-shadow": "#CC8B13",
      },
      borderRadius: {
        5: "0.313rem",
        10: "0.625rem",
      },
    },
  },
  plugins: [],
};
