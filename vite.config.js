import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/sri-veda-real-estates/',

  build: {
    // Optimize bundle size with esbuild (faster than terser)
    minify: 'esbuild',
    target: 'es2015',
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'swiper': ['swiper'],
          'lucide-icons': ['lucide-react'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging (disabled for smaller builds)
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'swiper', 'lucide-react'],
  },

  // Preview server optimization
  preview: {
    port: 3000,
    strictPort: true,
  },

  // Development server optimization
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: true,
    },
  },
})
