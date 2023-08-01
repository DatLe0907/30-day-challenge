let todoInput = document.querySelector(".todo__add-input"),
  todoAddBtn = document.querySelector(".todo__add-btn"),
  todoForm = document.querySelector("form"),
  todoList = document.querySelector(".todo__list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let todoValue = todoInput.value.trim();
  if (todoValue) {
    addTodoElement({
      text: todoValue,
    });
    setLocalTodoList();
  }
  todoInput.value = "";
});

function addTodoElement(todo) {
  let li = document.createElement("li");
  li.innerHTML = `
     <span>${todo.text}</span>
     <i class="fa-solid fa-trash"></i>
    `;
  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }

  li.addEventListener("click", function () {
    this.classList.toggle("completed");
  });

  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();
  });

  todoList.appendChild(li);
}

function setLocalTodoList() {
  let todoList = document.querySelectorAll(".todo__list li");
  let todoStorage = [];
  todoList.forEach(function (todo) {
    let text = todo.querySelector("span").innerHTML;
    let status = todo.getAttribute('class');
    console.log(status)
    todoStorage.push({
      text,
      status,
    });
  });
  localStorage.setItem("todoList", JSON.stringify(todoStorage));
}

function init() {
  let data = JSON.parse(localStorage.getItem("todoList"));
  data.forEach(function (item) {
    addTodoElement(item);
  });
}

init();
