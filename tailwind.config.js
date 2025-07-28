/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "color-wave": {
          "0%": {
            color: "#ef4444",
          },
          "25%": {
            color: "#f97316",
          },
          "50%": {
            color: "#eab308",
          },
          "75%": {
            color: "#22c55e",
          },
          "100%": {
            color: "#3b82f6",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        "wave-up-down": {
          "0%, 100%": { transform: "scaleY(0.6)" },
          "25%": { transform: "scaleY(1.0)" },
          "50%": { transform: "scaleY(1.4)" },
          "75%": { transform: "scaleY(0.8)" },
        },
        "wave-pulse": {
          "0%, 100%": { transform: "scaleY(0.8)" },
          "20%": { transform: "scaleY(1.2)" },
          "40%": { transform: "scaleY(0.7)" },
          "60%": { transform: "scaleY(1.1)" },
          "80%": { transform: "scaleY(0.9)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "color-wave": "color-wave 4s infinite alternate",
        typing: "typing 6s steps(20), blink .9s infinite",
        "wave-up-down": "wave-up-down 1.8s ease-in-out infinite",
        "wave-pulse": "wave-pulse 1.5s ease-in-out infinite",
      },
      fontFamily: {
        "cnc-ra": ["C&C Red Alert", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
