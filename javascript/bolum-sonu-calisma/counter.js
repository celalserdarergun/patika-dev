const value = document.querySelector("#value");

const btnDec = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnInc = document.querySelector(".increase");

let count = 0;
btnInc.addEventListener("click", counterEvent)
btnReset.addEventListener("click", counterEvent)
btnDec.addEventListener("click", counterEvent)


function counterEvent() {
	const list = this.classList;
	
	if (list.contains("increase")) {
		count++;
	} else if (list.contains("decrease")) {
		count--;
	} else {
		count = 0;
	}
	value.innerHTML = count;
}
