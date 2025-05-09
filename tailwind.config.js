/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primary_Background: "#ffffff",
      Secondary_Background: "#ceceda",
      Primary_Text: "#686b7a",
      Secondary_Text: "#b3c5c7",
      Tarnary_Text: "#f1d5c7",
    },
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%, 50%, 70%": { transform: "rotate(-10deg)" },
          "20%, 40%, 60%": { transform: "rotate(10deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.01)" },
        },
      },
    },
    animation: {
      "fade-in-up": "fade-in-up 1s ease-out forwards",
      "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      wave: "wave 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite",
    },
    backgroundImage: {
      "custom-gradient":
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(45,45,98,1) 35%, rgba(0,212,255,1) 100%)",
      background:
        "linear-gradient(90deg, rgba(90,88,123,1) 18%, rgba(7,7,49,1) 62%, rgba(17,18,18,1) 100%)",
    },
  },
  plugins: [],
};
