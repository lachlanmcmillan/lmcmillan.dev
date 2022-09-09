<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>lmcmillan.dev</title>
</svelte:head>

<section>
	<h1>lmcmillan.dev</h1>
	<p><strong>Welcome</strong> to my site</p>
	<a sveltekit:prefetch href="/code/calculator">calculator</a>
	<p><strong>animations</strong></p>
	<a sveltekit:prefetch href="/animations/text-underline">text underline</a>
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
