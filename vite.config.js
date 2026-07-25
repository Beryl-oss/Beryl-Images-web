import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://berylimages.com',
      dynamicRoutes: [
        '/',
      ],
    }),
  ],

  server: {
    allowedHosts: [
      'errand-upcountry-paver.ngrok-free.dev'
    ]
  },

  preview: {
    host: true,
    allowedHosts: [
      'errand-upcountry-paver.ngrok-free.dev'
    ]
  }
})