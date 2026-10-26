import { fileURLToPath, URL } from "node:url";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), vanillaExtractPlugin(), react()],
  resolve: {
    alias: {
      resources: fileURLToPath(new URL("./src/app/resources", import.meta.url)),
    },
  },
});
