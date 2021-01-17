let killed = document.getElementById('dead');
let missed = document.getElementById('lost');
let winLoseCheck = () => {
	if (Number.parseInt(killed.textContent) === 10) {
		alert('Вы победили!')
		killed.textContent = 0;
		missed.textContent = 0;
	}
	if (Number.parseInt(missed.textContent) === 5) {
		alert('Вы проиграли')
		killed.textContent = 0;
		missed.textContent = 0;
	}
}

for (let i = 1; i <= 9; i++) {
	let getHole = index => document.getElementById(`hole${i}`)
	getHole().onclick = function() {
	if (this.className.includes('hole_has-mole')) {
		killed.textContent = Number.parseInt(killed.textContent) + 1;
	} else {
		missed.textContent = Number.parseInt(missed.textContent) + 1;
	}
	winLoseCheck();
	}
}