const displayTip = document.querySelector('#display-tip-total');
const displayTotal = document.querySelector('#display-total-cost');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const peopleInput = document.querySelector('#people');

function calculateTip() {
	const billValue = parseInt(billInput.value);
	const tipValue = parseInt(tipInput.value);
	const pepleValue = parseInt(peopleInput.value);
	const tipAmount = parseFloat(
		((billValue * (tipValue / 100)) / pepleValue).toFixed(2)
	);
	console.log(tipAmount);
	displayTip.innerHTML = tipAmount;
	displayTotal.innerHTML = tipAmount + billValue;
	console.log('displaytip is', displayTip);
	console.log('displaytotal is', displayTotal);
}
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
