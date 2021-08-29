let container = document.querySelector(".container");
let inputField = document.querySelector(".inputField");
let addToDo = document.querySelector(".addToDo");
let todos = document.querySelector(".todos");
   
addToDo.addEventListener("click", function() {
			var p = document.createElement("p");
			var btn = document.createElement("button");
			p.classList.add("styling");
			p.innerText = "• "+inputField.value;
			todos.appendChild(p);
			inputField.value = "";
			p.addEventListener("click", function() {
			p.classList.toggle("garis");
			})
});


