import { defineConfig } from 'vite'
import path from 'path';

const LIB_NAME = 'vue-customgform';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      name: LIB_NAME,
    },
    rollupOptions: {
      external: ['vue', '@customgform-lib/customgform-core'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@customgform-lib/customgform-core': 'customgformCore',
        },
      },
    },
  },
})
