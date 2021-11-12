<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Calculator from '../../components/Calculator.svelte';
	import ReturnButton from '../../components/ReturnButton.svelte';
</script>

<section>
	<ReturnButton href="/" />
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
</style>
