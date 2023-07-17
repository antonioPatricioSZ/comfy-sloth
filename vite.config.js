import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "src/main.js", // Path to your entry point file
    },
  },
  optimizeDeps: {
    include: ["dependency-package"], // Add the package name(s) here
  },
});
