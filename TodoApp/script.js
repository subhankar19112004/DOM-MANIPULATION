function loadTodos() {
    // This function will load the todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todoList": [] };
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(todotext) {
    const todos = loadTodos();
    todos.todoList.push(todotext);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function executeFilterAction(event) {
    // console.log(event.target);
    const todoList = document.getElementById("todoList");

    const element = event.target;
    const value = element.getAttribute("data-filter");
    // console.log(value);
    todoList.innerHTML = '';
    const todos = loadTodos();
    if (value == "all") {
        console.log(todoList);

        todos.todoList.forEach(todo => {
            appendTodoInHtml(todo);
        })


    } else if (value == "pending") {
        todos.todoList.forEach(todo => {
            if(todo.isCompleted !== true)
            appendTodoInHtml(todo);
        })

    } else {
        // show completed todos
        todos.todoList.forEach(todo => {
            if(todo.isCompleted === true)
            appendTodoInHtml(todo);
        })
    }
}

function appendTodoInHtml(todotext) {
    const todoList = document.getElementById("todoList");

    const todo = document.createElement("li");
    const textDiv = document.createElement("div");

    textDiv.textContent = todotext.text;
    todo.classList.add("todoItem");

    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons");

    const editBtn = document.createElement("Button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("Button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("Button");
    completedBtn.textContent = "Complete";
    completedBtn.classList.add("completeBtn");


    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completedBtn);
    todo.appendChild(textDiv);
    todo.appendChild(wrapper);
    todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.getElementById("todoInput");

    const submitButton = document.getElementById("addTodo");

    const todoList = document.getElementById("todoList");

    const filterBtns = document.getElementsByClassName("filterBtn");

    for (const btn of filterBtns) {
        console.log(btn);
        btn.addEventListener("click", executeFilterAction);
    }

    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value;
        if (todoText == '') {
            alert("Please write something for the todo");
        } else {
            addTodoToLocalStorage({ text: todoText, isCompleted: false });
            appendTodoInHtml({ text: todoText, isCompleted: false });
            todoInput.value = '';
        }

    });

    todoInput.addEventListener("change", (event) => {
        // This call back method is fired everytime there is a change in the input tag
        const todoText = event.target.value;

        event.target.value = todoText.trim();

        console.log(event.target.value)

    });

    const todos = loadTodos();

    todos.todoList.forEach(todo => {
        appendTodoInHtml(todo);
    })
});