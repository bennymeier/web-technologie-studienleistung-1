import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        helfer: resolve(__dirname, "helfer.html"),
        lineup: resolve(__dirname, "lineup.html"),
        impressum: resolve(__dirname, "impressum.html"),
      },
    },
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
    },
  },
});
