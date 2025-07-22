import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.devarmor.com",
  output: "server", // Enable server-side rendering for form handling
  adapter: vercel(),
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
