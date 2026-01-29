/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        // Financial specific colors
        money: {
          positive: "var(--money-positive)",
          negative: "var(--money-negative)",
        },
        seshan: {
          neutral: {
            800: "var(--bg-neutral-800)",
            700: "var(--bg-neutral-700)",
            500: "var(--bg-neutral-500)",
            200: "var(--bg-neutral-200)",
            100: "var(--bg-neutral-100)",
          },
          green: {
            500: "var(--bg-green-500)",
            200: "var(--bg-green-200)",
          },
          red: {
            500: "var(--bg-red-500)",
            200: "var(--bg-red-200)",
          },
          amber: {
            500: "var(--bg-amber-500)",
            100: "var(--bg-amber-100)",
          },
          slate: {
            100: "var(--bg-slate-50)",
            800: "var(--bg-slate-500)",
          },
          gold: {
            500: "var(--bg-gold-500)",
          }
        }

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-from-top-2": {
          from: { transform: "translateY(-0.5rem)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-from-top-2": "slide-in-from-top-2 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
