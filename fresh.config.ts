import { defineConfig } from "$fresh/server.ts";
import plugins from "https://denopkg.com/deco-sites/std@1.26.8/plugins/mod.ts";
import manifest from "./manifest.gen.ts";
import tailwind from "./tailwind.config.ts";

export default defineConfig({
  render: (ctx, render) => {
    ctx.lang = "pt-BR";
    render();
  },
  plugins: plugins({
    manifest,
    // deno-lint-ignore no-explicit-any
    tailwind: tailwind as any,
  }),
});
