let addMessage = document.querySelector(".message");
(addButton = document.querySelector(".add")),
  (todo = document.querySelector(".todo"));

let todoList = [];

addButton.addEventListener("click", () => {
  let NewTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  todoList.push(NewTodo);
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList));
});

const displayMessages = () => {
  let displayMessage = "";
  todoList.forEach((item, index) => {
    displayMessage += `
        <li>
        <input type='checkbox' id="item_${index}" ${
      item.checked ? "checked" : ""
    }/>
           <label for="item_${index}" class=${item.important ? "important" : ''}>${item.todo}</label>
        </li>
        `;
    todo.innerHTML = displayMessage;
  });
};

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMessages();
}
todo.addEventListener("change", () => {
  let valueLabel = todo.querySelector(
    "[for=" + event.target.getAttribute("id") + "]"
  ).innerHTML;

  todoList.forEach((item) => {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("todo", JSON.stringify(todoList)); 
    }
  });
});

todo.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    todoList.ForEach((item) => {
        if(item.todo === event.target.innerHTML) {
            item.important = !item.important;
            displayMessages()
            localStorage.setItem("todo", JSON.stringify(todoList));
        }
    })
})
