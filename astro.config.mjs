import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    domains: ['ik.imagekit.io'], // allow optimization from ImageKit
  },
});
