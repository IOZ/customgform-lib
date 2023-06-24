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
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: LIB_NAME,
      fileName: LIB_NAME,
    }
  }
})
