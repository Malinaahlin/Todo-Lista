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
        // todoContentElement.innerText = todo;  

        todoElement.appendChild(todoContentElement);

        const todoInputElement = document.createElement("input");
        todoInputElement.classList.add("text");
        todoInputElement.type = "text";
        todoInputElement.value = todo;
        todoInputElement.setAttribute("readonly", "readonly");

        todoContentElement.appendChild(todoInputElement);

        const todoActionElement = document.createElement("div");
        todoActionElement.classList.add("actions");

        const todoEditElement = document.createElement("button");
        todoEditElement.classList.add("edit");
        todoEditElement.innerHTML = "Ändra";

        const todoDeleteElement = document.createElement("button");
        todoDeleteElement.classList.add("delete");
        todoDeleteElement.innerHTML = "Radera";

        todoActionElement.appendChild(todoEditElement);
        todoActionElement.appendChild(todoDeleteElement);

        todoElement.appendChild(todoActionElement);

        listElement.appendChild(todoElement);

        input.value = "";


        //Ta bort ändra knappen?
        todoEditElement.addEventListener("click", () => {
                if (todoEditElement.innerText.toLowerCase() === "Ändra") {
                    todoInputElement.setAttribute("readonly", "readonly");
                    todoEditElement.innerText = "Ändra";
                    console.log("Ändra1");
                 } else {
                    todoInputElement.removeAttribute("readonly");
                    todoInputElement.focus();
                    todoEditElement.innerText = "Spara";
                    console.log("Spara1");
                }
            });

            todoDeleteElement.addEventListener("click", () => {
                listElement.removeChild(todoElement);

            });
        
        // todoEditElement.addEventListener("click", () => {
        //     if (todoEditElement.innerText.toLowerCase() === "Ändra") {
        //         todoInputElement.removeAttribute("readonly");
        //         todoInputElement.focus();
        //         todoEditElement.innerText = "Spara";
        //         console.log("ändra");
        //     } else {
        //         todoInputElement.setAttribute("readonly", "readonly");
        //         todoEditElement.innerText = "Ändra";
        //         console.log("Spara");
        //     }
        // });
    });
});






































// let myIngredients = ["3 ägg", "2,5 dl vetemjöl", "0,5 tsk salt", "6 dl mjölk", "50 g smör"]
// console.log(myIngredients);

// let content = document.getElementById("container");
// let ul = document.createElement("ul")
// content.appendChild(ul);
//  for (i = 0; i < myIngredients.length; i++) {
//     let li = document.createElement("li");

//     li.innerHTML = myIngredients[i];
//     ul.appendChild("li");
// }


