// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    trailingSlash: "ignore",
    output: "static",
    srcDir: "./src",
    publicDir: "./public",
    outDir: "./dist",
    cacheDir:"./node_modules/.astro",
    compressHTML: "jsx",
    prerenderConflictBehavior: "error"
});
