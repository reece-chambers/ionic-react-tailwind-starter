import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const debugPlugin = () => ({
  postcssPlugin: 'debug-plugin',
  Once() {
    console.warn('>> PostCSS CONFIG LOADED <<');
  }
});

debugPlugin.postcss = true;

export default {
  plugins: [
    tailwindcss({ config: './tailwind.config.js' }),
    autoprefixer(),
    debugPlugin,
  ],
};
