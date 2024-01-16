// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuration Vite
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    // Alias pour les chemins d'importation
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // Configurer un proxy si nécessaire
    },
    // Commentez la ligne suivante pour activer la fonctionnalité de retour en arrière de l'API d'historique
    force: true,
  },
})
