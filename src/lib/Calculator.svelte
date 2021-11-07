<script lang="ts">
	// import { spring } from 'svelte/motion';

	let register = [];
	let total = 0;
	let operator;
	let output = "START";

	$: console.log({ register, total, operator, output})

	const getRegisterOutput = (r) => {
		console.log({ r })
		if (r.length == 0) {
			return "0";
		}
		return listToNumber(r);
	}

	const listToNumber = (list) => {
		return parseFloat(list.join(''));
	}

	const handleBtnPress = (val) => {
		if (val == "clear") {
			register = [];
			total = 0;
		} else if (val == "+") {
			total = total + listToNumber(register);
			output = total;
			operator = "+";
			register = [];
		} else if (val == "=") {
			if (operator == "+") {
				total = total + listToNumber(register);
				output = total;
				register = [];
				return;
			}
		} else {
			register.push(val)
		}
		output = getRegisterOutput(register);
	}
</script>

<div class="calculator">
	<div class="output">{output}</div>
	<div class="row">
		<button class="digit" on:click={() => handleBtnPress(7)}>7</button>
		<button class="digit" on:click={() => handleBtnPress(8)}>8</button>
		<button class="digit" on:click={() => handleBtnPress(9)}>9</button>
		<button class="digit" on:click={() => null}>-</button>
	</div>
	<div class="row">
		<button class="digit" on:click={() => handleBtnPress(4)}>4</button>
		<button class="digit" on:click={() => handleBtnPress(5)}>5</button>
		<button class="digit" on:click={() => handleBtnPress(6)}>6</button>
		<button class="digit" on:click={() => handleBtnPress("+")}>+</button>
	</div>
	<div class="row">
		<button class="digit" on:click={() => handleBtnPress(1)}>1</button>
		<button class="digit" on:click={() => handleBtnPress(2)}>2</button>
		<button class="digit" on:click={() => handleBtnPress(3)}>3</button>
		<button class="digit" on:click={() => null}>x</button>
	</div>
	<div class="row">
		<button class="digit" on:click={() => handleBtnPress("clear")}>CLS</button>
		<button class="digit" on:click={() => handleBtnPress(0)}>0</button>
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
