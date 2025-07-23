import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// Development config for testing password protection locally
export default defineConfig({
  site: "https://www.devarmor.com",
  output: "server", // Server mode for local testing
  integrations: [tailwind(), mdx(), sitemap(), icon()],
}); 