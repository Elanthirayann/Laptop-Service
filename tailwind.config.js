export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        inter: ["Inter", "sans-serif"], 
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      dropShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        strong: "0 10px 25px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
