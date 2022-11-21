const userForm = document.querySelector("#userForm")
userForm.addEventListener("submit", formHandler)

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const alertDOM = document.querySelector("#alert");

function formHandler(event) {
	event.preventDefault();
	const USER_NAME = document.querySelector("#username")
	const SCORE = document.querySelector("#score")
	if (USER_NAME.value && score.value) {
		addItem(USER_NAME.value, SCORE.value);
		USER_NAME.value = ""
		SCORE.value = ""
	} else {
		alertDOM.innerHTML = alertFunction(
		"Hop",
		"Eksik Bilgi Girdiniz",
		"danger"
		);
	}
}

const userList = document.querySelector("#userList");

function addItem(userName, score) {
	const li = document.createElement("li");
	li.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`;
	li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
	userList.append(li);
}