import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Learning Path Colors
        history: {
          primary: '#936639',    // Toffee Brown
          secondary: '#7f4f24',  // Saddle Brown
          accent: '#a68a64',     // Camel
        },
        terminology: {
          primary: '#a68a64',    // Camel
          secondary: '#b6ad90',  // Khaki
          accent: '#656d4a',     // Fern
        },
        risk: {
          primary: '#582f0e',    // Dark Walnut
          secondary: '#7f4f24',  // Saddle Brown
          accent: '#333d29',     // Charcoal
        },
        responsibility: {
          primary: '#a4ac86',    // Dry Sage
          secondary: '#c2c5aa',  // Light Khaki
          accent: '#656d4a',     // Fern
        },
        future: {
          primary: '#4285F4',    // Blue
          secondary: '#FBBC04',  // Yellow
          accent: '#34A853',     // Green
        },
        // Base Earth Tones
        charcoal: '#333d29',
        moss: '#414833',
        fern: '#656d4a',
        sage: '#a4ac86',
        khaki: '#b6ad90',
        camel: '#a68a64',
        toffee: '#936639',
        saddle: '#7f4f24',
        walnut: '#582f0e',
        ivory: '#F5F5DC',
        cream: '#c2c5aa',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
