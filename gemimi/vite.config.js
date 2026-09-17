import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to https://<user>.github.io/<repo>/, set base to '/<repo>/'.
// If deploying to a <user>.github.io root repo, leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: "/gemimi-site/",
});
