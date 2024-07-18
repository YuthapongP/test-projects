/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#007bff",
        "custom-red": "#dc3545",
      },
    },
  },
  plugins: [],
};
