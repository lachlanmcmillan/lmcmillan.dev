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
		<button class="digit" on:click={() => output = 8}>8</button>
		<button class="digit" on:click={() => output = 9}>9</button>
		<button class="digit" on:click={() => null}>-</button>
	</div>
	<div class="row">
		<button class="digit" on:click={() => output = 4}>4</button>
		<button class="digit" on:click={() => output = 5}>5</button>
		<button class="digit" on:click={() => output = 6}>6</button>
		<button class="digit" on:click={() => null}>+</button>
	</div>
	<div class="row">
		<button class="digit" on:click={() => output = 1}>1</button>
		<button class="digit" on:click={() => output = 2}>2</button>
		<button class="digit" on:click={() => output = 3}>3</button>
		<button class="digit" on:click={() => null}>x</button>
	</div>
	<div class="row">
		<button class="digit" on:click={() => null}></button>
		<button class="digit" on:click={() => output = 0}>0</button>
		<button class="digit" on:click={() => null}></button>
		<button class="digit" on:click={() => null}>=</button>
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
	.output {
		text-align: right;
		padding-right: 6px;
	}
	.row {
		display: flex;
	}
	.digit {
		flex: 1;
	}
</style>
