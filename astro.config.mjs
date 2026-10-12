// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    icon({
      include: {
        "fluent-emoji-flat": ["cat-face"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
