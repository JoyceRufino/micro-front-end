import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe_clients",
      filename: "remoteEntry.js",
      exposes: {
        "./ClientsPage": "./src/ClientsPage.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173,
    cors: true,
  },
  base: "http://localhost:5173/", // <-- Adicione esta linha
});
