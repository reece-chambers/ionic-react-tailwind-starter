const config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './node_modules/@ionic/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind’s reset to prevent Ionic layout conflicts
  },
};

module.exports = config;
