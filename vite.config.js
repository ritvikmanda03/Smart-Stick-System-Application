// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mwi5vt7pni.execute-api.us-east-1.amazonaws.com/dev', // your AWS API URL
        changeOrigin: true,
        secure: false, // Set to `true` if you're using HTTPS on the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite the path to remove '/api' prefix
      },
    },
  },
});

