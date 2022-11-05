let userName = window.prompt("Adınızı Giriniz");
const domNameSpan = document.getElementById("myName");
const domMyClock = document.getElementById("myClock");

function setName(e) {
	if (e == "")
		e = "Ninja"
	return domNameSpan.innerText = e;
}

setName(userName)

function showTime() {
	let day = new Date();
	const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
	return (`${day.getHours()}:${('0' + day.getMinutes()).slice(-2)}:${('0' + day.getSeconds()).slice(-2)} ${days[day.getDate()]}`);
}

setInterval(() => {
	domMyClock.innerText = showTime();
}, 60);
