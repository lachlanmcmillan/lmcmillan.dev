<script lang="ts">
	// import { spring } from 'svelte/motion';

	// let count = 0;

	// const displayed_count = spring();
	// $: displayed_count.set(count);
	// $: offset = modulo($displayed_count, 1);

	// function modulo(n: number, m: number) {
	// 	// handle negative numbers
	// 	return ((n % m) + m) % m;
	// }
</script>

<div class="calculator">
    CALCULATOR
	<div class="output">25</div>
	<div class="row">
		<button class="digit">7</button>
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
    }
</style>
