window.addEventListener("load", () => {
    const form = document.querySelector("#todo-form");
    const input =document.querySelector("#new-todo-input");
    const listElement = document.querySelector("#todos");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const todo = input.value;

        if (!todo) {
            alert("Please fill out a todo");
            return;
        } 

        const todoElement = document.createElement("div");
        todoElement.classList.add("todo");

        const todoContentElement = document.createElement("div");
        todoContentElement.classList.add("content");

        todoElement.appendChild(todoContentElement);

        const todoInputElement = document.createElement("input");
        todoInputElement.classList.add("text");
        todoInputElement.type = "text";
        todoInputElement.value = todo;
        todoInputElement.setAttribute("readonly", "readonly");

        todoContentElement.appendChild(todoInputElement);

        const todoActionElement = document.createElement("div");
        todoActionElement.classList.add("actions");


        const todoDeleteElement = document.createElement("button");
        todoDeleteElement.classList.add("delete");
        todoDeleteElement.innerHTML = "Radera";

        todoActionElement.appendChild(todoDeleteElement);

        todoElement.appendChild(todoActionElement);

        listElement.appendChild(todoElement);

        input.value = "";
        
            todoDeleteElement.addEventListener("click", () => {
                listElement.removeChild(todoElement);

            });
        
    });
});

