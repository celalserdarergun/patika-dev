/* 
let todoArray = [
	{task: "3 Litre Su İç", isChecked: false},
	{task: "Ödevleri Yap", isChecked: false},
	{task: "En Az 3 Saat Kodlama Yap", isChecked: false},
	{task: "Yemek Yap", isChecked: false},
	{task: "50 Sayfa Kitap Oku", isChecked: false},
];
 */

let todoArray = [];

if (localStorage.getItem("todo")) {
	todoArray = JSON.parse(localStorage.getItem("todo"));
}

function renderTodoList() {
	let list = document.getElementById("list");
	let htmlCode = "";
	todoArray.forEach((item, index) => {
		htmlCode += `
		<li id="todo-${index}" class="${item["isChecked"] == true ? "checked" : ""}">
		${item["task"]}
		<span class="close">
		<button onclick="delTodo(${index})" class="btn btn-danger">Sil</button>
		</span>
		</li>
		`;
	});
	list.innerHTML = htmlCode;
	localStorage.setItem("todo", JSON.stringify(todoArray))
}

renderTodoList();

function newElement() {
	const input = document.getElementById("task");
	if (input.value.trim() !== "") {
		addTodo(input.value.trim());
		$(".toast.success").toast("show");
		input.value = "";
	} else {
		$(".toast.error").toast("show");
	}
	renderTodoList()
}

function addTodo(value) {
	const todo = {
		task: value,
		isChecked: false
	}
	todoArray.push(todo);
}

function delTodo(index) {
	todoArray.splice(index, 1);
	renderTodoList();
}

let list = document.querySelector("ul");
list.addEventListener("click", checkTodo, false);

function checkTodo(item) {
	console.log(item.target)
	if (item.target.tagName === "LI") {
		const index = parseInt(item.target.id.split("-")[1]);
		if (todoArray[parseInt(index)].isChecked) {
			todoArray[parseInt(index)].isChecked = false;
		} else {
			todoArray[parseInt(index)].isChecked = true;
		}
	}
	renderTodoList();
}

function clearTodo() {
	todoArray = [];
	localStorage.clear();
	renderTodoList();
}