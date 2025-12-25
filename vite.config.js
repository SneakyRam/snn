import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "SneakyRam",
        short_name: "SneakyRam",
        start_url: "/",
        display: "standalone",
        theme_color: "#4f46e5",
        background_color: "#000000"
      }
    })
  ]
});