<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
	import Calculator from '$lib/Calculator.svelte';
</script>

<svelte:head>
	<title>lmcmillan.dev</title>
</svelte:head>

<section>
	<h1>lmcmillan.dev</h1>
	<p><b>Welcome</b> to my site</p>
	<Calculator />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		color: burlywood;
	}
</style>
