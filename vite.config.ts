import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.IS_CI ? '/km-wedding/' : '/',
  plugins: [
    tailwindcss(),
  ],
})