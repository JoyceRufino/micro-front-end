import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app_shell",
      remotes: {
        mfe_clients: "http://localhost:5173/remoteEntry.js",
        mfe_entry: "http://localhost:5175/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5172,
    cors: true,
  },
});
