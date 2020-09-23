const displayTip = document.querySelector('#tip-amount');
const displayTotal = document.querySelector('#total-amount');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const peopleInput = document.querySelector('#people');

// Calculate Tip and Total
function calculateTip() {
	const billValue = parseInt(billInput.value);
	const tipValue = parseInt(tipInput.value);
	const pepleValue = parseInt(peopleInput.value);
	if (isNaN(billValue) || isNaN(tipValue) || isNaN(pepleValue)) {
		console.log(`Please Enter A Number`);
		return;
	}
	const tipAmount = parseFloat(
		((billValue * (tipValue / 100)) / pepleValue).toFixed(2)
	);
	const totalAmount = (tipAmount + billValue).toFixed(2);
	displayTip.innerHTML = `$${tipAmount}`;
	displayTotal.innerHTML = `$${totalAmount}`;
}
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

// Add one
function addOne(inputValue, upperbound = 100) {
	let originalValue = parseInt(inputValue.value);
	if (originalValue < upperbound) {
		originalValue += 1;
		inputValue.value = originalValue;
		calculateTip();
	}
}
// Minus One
function minusOne(inputValue, lowerbound) {
	let originalValue = parseInt(inputValue.value);
	if (originalValue > lowerbound) {
		originalValue -= 1;
		inputValue.value = originalValue;
		calculateTip();
	}
}
// Handle +/- buttons
const allbuttons = document.getElementById('left-column');
allbuttons.onclick = function (e) {
	if (e.target && e.target.classList.contains('add-one')) {
		if (e.target.dataset.name === 'tip') {
			addOne(tipInput);
		} else if (e.target.dataset.name === 'people') {
			addOne(peopleInput);
		}
	} else if (e.target && e.target.classList.contains('minus-one')) {
		if (e.target.dataset.name === 'tip') {
			minusOne(tipInput, 0);
		} else if (e.target.dataset.name === 'people') {
			minusOne(peopleInput, 1);
		}
	}
};
