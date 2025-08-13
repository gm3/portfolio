import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update `base` to your repo name if deploying to GitHub Pages
// e.g., base: '/my-repo/'
export default defineConfig({
  base: '/portfolio/',
  // assetsInclude: ['**/*.glb'], // removed lanyard/vrm assets for now
  build: { outDir: 'docs' },
  plugins: [react()],
})


