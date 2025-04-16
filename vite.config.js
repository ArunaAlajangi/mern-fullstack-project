import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Remove `tailwindcss()` from here
  server: { port: 5174 },
});