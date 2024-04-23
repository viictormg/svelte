<script>
	import About from "./components/About.svelte";
	export let name;
	export let lastName;
	let svelterLogo =  "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
</script>

<main>
	<h1>Hello {name}! {lastName}</h1>
	<About/>
	<img src="{svelterLogo}" alt="svelte">
</main>

<style>
	:global(body) {
		background-color: #f2eee2;
		color : #0048f6;
	}

	:global(:root) {
		--them-color: purple;
	}
	main img {
		width: 30%;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>