const display = document.querySelector('#display');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const peopleInput = document.querySelector('#people');
console.log(display.innerHTML); // prints the text inside the tags
console.log(billInput.value); // prints the value entered into the input
console.log(peopleInput.value);
function calculateTip() {
	const billValue = billInput.value;
	const tipValue = tipInput.value;
	const pepleValue = peopleInput.value;
	const tipAmount = (billValue * (tipValue / 100)) / pepleValue;
	display.innerHTML = tipAmount.toFixed(2);
}
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
