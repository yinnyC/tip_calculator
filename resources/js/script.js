const display = document.querySelector('#display');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const peopleInput = document.querySelector('#people');

function calculateTip() {
	const billValue = parseInt(billInput.value);
	const tipValue = parseInt(tipInput.value);
	const pepleValue = parseInt(peopleInput.value);
	console.log('bill is', billValue);
	console.log('tip is', tipValue);
	console.log('ppl is', pepleValue);
	const tipAmount = (billValue * (tipValue / 100)) / pepleValue;
	console.log(tipAmount);
	display.innerHTML = tipAmount;
}
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
