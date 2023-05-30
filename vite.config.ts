import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { internalIpV4 } from 'internal-ip'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const host = await internalIpV4()

  /** @type {import('vite').UserConfig} */
  const config = {
    plugins: [wasm(),
    topLevelAwait(),sveltekit()],
    test: {
      include: ['src/**/*.{test,spec}.{js,ts}'],
    },
    server: {
      host: '0.0.0.0', // listen on all addresses
      port: 5173,
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host,
        port: 5183,
      },
    },
  }

  return config
})