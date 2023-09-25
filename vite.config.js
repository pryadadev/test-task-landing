/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
      "@hooks": path.resolve(__dirname, "./src/hooks")
    },
  },
  base: "/test-task-landing",
  plugins: [react(), svgr()],
});
