import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/

const LIB_NAME = 'react-customgform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: LIB_NAME,
      formats: ['es', 'umd'],
      fileName: (format) => `${LIB_NAME}.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
})
