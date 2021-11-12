<script lang="ts">
	import { page } from '$app/stores';
	import ArrowLeftIcon from './ArrowLeftIcon.svelte';

	export let href;
	
</script>

<nav>
	<a sveltekit:prefetch href={href}><ArrowLeftIcon />Back</a>
</nav>

<style>
	nav {
		display: flex;
		position: fixed;
		top: 15px;
		left: 0;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;

		/* for the svg */
		fill: var(--heading-color);
		transition: all 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
		fill: var(--accent-color);
	}
</style>
