import adapter from '@sveltejs/adapter-static';

const repoName = 'ACTIVIDAD-2-ING-SFT-III';
const base = process.env.NODE_ENV === 'production' ? `/${repoName}` : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base
		}
	}
};

export default config;
