import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Preserve original image names and put them in assets/
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name ?? '')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]'; // fallback for other assets
        }
      }
    }
  }
});
