<script lang="ts">
	enum Operator {
		Plus = "+",
		Minus = "-",
		Multiply = "*"
	}

	let register = [];
	let total = 0;
	let operator;
	let screen: string = "START";

	// $: console.log({ register, total, operator, screen})

	const listToNumber = (list) => {
		if (list.length == 0) return 0;

		return parseFloat(list.join(''));
	}

	const handleDigitClick = (digit: number) => () => {
		register.push(digit)
		screen = listToNumber(register).toString();
	}

	const handleCLSClick = () => {
		register = [];
		total = 0;
		screen = "0";
	}

	const handlePlusClick = () => {
		total = total + listToNumber(register);
		screen = total.toString();
		operator = Operator.Plus;
		register = [];
		return;
	}

	const handleMinusClick = () => {
		if (!operator) {
			total = total + listToNumber(register);
		} else {
			total = total - listToNumber(register);
		}
		screen = total.toString();
		operator = Operator.Minus;
		register = [];
		return;
	}

	const handleMultiplyClick = () => {
		if (!operator) {
			total = total + listToNumber(register);
		} else {
			total = total * listToNumber(register);
		}
		screen = total.toString();
		operator = Operator.Multiply;
		register = [];
		return;
	}

	const handleEQClick = () => {
		if (operator == Operator.Plus) {
			total = total + listToNumber(register);
			screen = total.toString();
			operator = null;
			register = [];
		} else if (operator == Operator.Minus) {
			total = total - listToNumber(register);
			screen = total.toString();
			operator = null;
			register = [];
		} else if (operator == Operator.Multiply) {
			total = total * listToNumber(register);
			screen = total.toString();
			operator = null;
			register = [];
		}

	}
</script>

<div class="calculator">
	<div class="output">{screen}</div>
	<div class="row">
		<button class="digit" on:click={handleDigitClick(7)}>7</button>
		<button class="digit" on:click={handleDigitClick(8)}>8</button>
		<button class="digit" on:click={handleDigitClick(9)}>9</button>
		<button class="digit" on:click={handleMinusClick}>-</button>
	</div>
	<div class="row">
		<button class="digit" on:click={handleDigitClick(4)}>4</button>
		<button class="digit" on:click={handleDigitClick(5)}>5</button>
		<button class="digit" on:click={handleDigitClick(6)}>6</button>
		<button class="digit" on:click={handlePlusClick}>+</button>
	</div>
	<div class="row">
		<button class="digit" on:click={handleDigitClick(1)}>1</button>
		<button class="digit" on:click={handleDigitClick(2)}>2</button>
		<button class="digit" on:click={handleDigitClick(3)}>3</button>
		<button class="digit" on:click={handleMultiplyClick}>x</button>
	</div>
	<div class="row">
		<button class="digit" on:click={handleCLSClick}>CLS</button>
		<button class="digit" on:click={handleDigitClick(0)}>0</button>
		<button class="digit" on:click={() => null}></button>
		<button class="digit" on:click={handleEQClick}>=</button>
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
