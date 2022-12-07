import { defineConfig } from 'vite';

export default defineConfig({
	publicDir: false,

	build: {
		outDir: 'public',
		emptyOutDir: false,
		minify: true,
		lib: {
			entry: { embed: 'src/parent/embed.js' },
			formats: ['es']
		}
	}
});
