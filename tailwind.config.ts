import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // Custom screen sizes for mobile devices only
      'xs': '320px',  // Example: extra small screens
      'sm': '480px',  // Example: small screens
      'md': '640px',  // Example: medium screens (max for mobile)
    },
    extend: {
      // You can extend the theme here if needed
      colors: {
        // Custom colors
        redAccent: '#FF808A'
      },
      spacing: {
        // Custom spacing
      },
    },
  },
  plugins: [],
}
export default config
