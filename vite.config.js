import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`, // Ensure JSX syntax works in .js files
  },
  server: {
    hmr: {
      overlay: false, // Optional: Disable error overlay if it bothers you
    },
  },
});
