import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe_entry",
      filename: "remoteEntry.js",
      exposes: {
        "./EntryPage": "./src/EntryPage.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5175,
    cors: true,
  },
  base: "http://localhost:5175/", // <-- Adicione esta linha
});
