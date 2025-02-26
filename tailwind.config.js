module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        smoothBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
          "30%": {
            transform: "translateY(16px)",
            animationTimingFunction: "ease-out",
          },
          "50%": {
            transform: "translateY(8px)",
            animationTimingFunction: "ease-in",
          },
          "70%": {
            transform: "translateY(12px)",
            animationTimingFunction: "ease-out",
          },
        },
      },
      animation: {
        smoothBounce: "smoothBounce 1s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
