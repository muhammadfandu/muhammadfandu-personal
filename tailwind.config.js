/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Apple-inspired color palette
      colors: {
        // Neutral grays
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
        'neutral-200': '#e5e5e5',
        'neutral-300': '#d4d4d4',
        'neutral-400': '#a3a3a3',
        'neutral-500': '#8f8f8f',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',

        // Primary accent (Apple uses blue, we'll use refined teal)
        'primary-50': '#f0fdfa',
        'primary-100': '#ccfbf1',
        'primary-200': '#99f6e4',
        'primary-300': '#5eead4',
        'primary-400': '#2dd4bf',
        'primary-500': '#14b8a6',
        'primary-600': '#0d9488',
        'primary-700': '#0f766e',
        'primary-800': '#115e59',
        'primary-900': '#134e4a',

        // Surface colors for glassmorphism
        surface: {
          light: 'rgba(255, 255, 255, 0.8)',
          dark: 'rgba(30, 30, 30, 0.8)',
          glass: 'rgba(255, 255, 255, 0.25)',
        },
      },

      // Typography - Apple uses SF Pro, we'll use Inter as fallback
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Inter', 'Helvetica Neue', 'sans-serif'],
        'display': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },

      // Animations - Apple-like easing
      transitionDuration: {
        'apple': '300ms',
        'apple-slow': '500ms',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'apple-spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Enhanced spacing via apples design
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },

      // Apple-style shadows
      boxShadow: {
        'apple': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'apple-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'apple-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },

      // Blur for glassmorphism
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },

      // Refined border radius
      borderRadius: {
        'apple-sm': '4px',
        'apple': '8px',
        'apple-lg': '12px',
        'apple-xl': '18px',
        'apple-2xl': '24px',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwind'),
  ],
}
