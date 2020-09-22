const display = document.querySelector('#display');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');

console.log(display.innerHTML); // prints the text inside the tags
console.log(billInput.value); // prints the value entered into the input

function calculateTip() {
	const billValue = billInput.value;
	const tipValue = tipInput.value;

	const tipAmount = (billValue * tipValue) / 100;
	display.innerHTML = tipAmount.toFixed(2);
}
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
