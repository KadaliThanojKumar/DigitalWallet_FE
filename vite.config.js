// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "./", // Ensures correct relative paths
//   root: "./",
//   publicDir: "public", // Ensures `index.html` is correctly located
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Root path for deployment
});

