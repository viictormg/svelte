import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'victor',
		lastName: 'mejia',
	}
});

export default app;