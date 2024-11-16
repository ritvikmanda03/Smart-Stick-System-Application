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
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://mwi5vt7pni.execute-api.us-east-1.amazonaws.com/dev', 
  //       changeOrigin: true,
  //       secure: false, 
  //       rewrite: (path) => path.replace(/^\/api/, ''), 
  //     },
  //   },
  // },
});

