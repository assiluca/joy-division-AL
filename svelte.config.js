import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'; // Corretto: di solito è 'mdsvex', non 'npmsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    
    preprocess: [
        vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

    compilerOptions: {
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
    },

    kit: {
        // Questa è la parte che ti mancava
        adapter: adapter({
            // Cartelle dove verrà generato il sito
            pages: 'build',
            assets: 'build',
            // Il fallback è fondamentale per le SPA
            fallback: '404.html', 
            precompress: false,
            strict: true
        })
    }
};

export default config;
