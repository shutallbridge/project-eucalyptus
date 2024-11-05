// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // https://docs.astro.build/en/guides/integrations-guide/tailwind/#applybasestyles
    tailwind({ applyBaseStyles: false }),
    // https://github.com/natemoo-re/astro-icon
    icon(),
    // https://docs.astro.build/en/guides/integrations-guide/alpinejs/
    alpinejs({ entrypoint: "/src/entrypoint" }),
  ],
});
