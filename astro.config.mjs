import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.devarmor.com",
  output: "server", // Enable server-side rendering for form handling
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
