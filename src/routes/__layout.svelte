<script lang="ts">
	import Header from '../components/header/Header.svelte';
	import printBuildDetails from '../lib/printBuildDetails';
	import '../app.css';

	printBuildDetails();
</script>

<svelte:head>
	<title>lmcmillan.dev</title>
</svelte:head>

<!-- <Header /> -->
<main>
	<slot />
</main>

<footer>
	<div class="corner">
		<a href="https://github.com/lachlanmcmillan">github.com/lachlanmcmillan</a>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
