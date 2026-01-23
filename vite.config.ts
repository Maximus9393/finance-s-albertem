import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React - loaded first
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // UI components - chunked separately
          'vendor-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
          ],
          // Forms - lazy loaded when needed
          'vendor-forms': ['react-hook-form', 'zod', '@hookform/resolvers'],
          // Charts - lazy loaded
          'vendor-charts': ['recharts'],
          // Utilities
          'vendor-utils': ['clsx', 'tailwind-merge', 'class-variance-authority', 'date-fns']
        }
      }
    },
    target: 'es2015',
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@radix-ui/react-accordion']
  }
}));
