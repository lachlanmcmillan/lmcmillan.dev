<script lang="ts">
	// import { spring } from 'svelte/motion';

	let output = 0;

	// const displayed_count = spring();
	// $: displayed_count.set(count);
	// $: offset = modulo($displayed_count, 1);

	// function modulo(n: number, m: number) {
	// 	// handle negative numbers
	// 	return ((n % m) + m) % m;
	// }
</script>

<div class="calculator">
	<div class="output">{output}</div>
	<div class="row">
		<button class="digit" on:click={() => output = 7}>7</button>
		<button class="digit">8</button>
		<button class="digit">9</button>
		<button class="digit">-</button>
	</div>
	<div class="row">
		<button class="digit">4</button>
		<button class="digit">5</button>
		<button class="digit">6</button>
		<button class="digit">+</button>
	</div>
	<div class="row">
		<button class="digit">1</button>
		<button class="digit">2</button>
		<button class="digit">3</button>
		<button class="digit">x</button>
	</div>
	<div class="row">
		<button class="digit"></button>
		<button class="digit">0</button>
		<button class="digit"></button>
		<button class="digit">=</button>
	</div>
</div>

<style>
	.calculator {
        border: 1px solid black;
		width: 400px;
    	font-size: 48px;
    	font-family: monospace;
		background: rgb(225,111,96);
    }
	.row {
		display: flex;
	}
	.digit {
		flex: 1;
	}
</style>
