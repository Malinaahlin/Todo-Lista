 let array = ["Handla", "Träna", "Läsa", "Plugga"];
    console.log(array);

    // let arr = document.getElementById("arr");

    for (i = 0; i < array.length; i++){
        console.log(array[i]);
        let arrayContainer = document.createElement("ul");
        let arrayList = document.createElement("li");
        let checkboxes = document.createElement("input");

        arrayContainer.appendChild(checkboxes);
        checkboxes.type = "checkbox";
        checkboxes.className = "checkbox";
        arrayContainer.appendChild(arrayList);
        document.body.appendChild(arrayContainer);

        arrayList.innerHTML += array[i];

             //EFTER EN HÄNDELSE
        arrayList.addEventListener("click", myFunction);

        function myFunction() {
            console.log(arrayList);
         

            }

   

    }

    // gör lista som loopar med alla 3 saker
    // ta bort med splice 
    // lägg till med push
    // loopa 
    // sätt innerhtml till en tom text.
    // variabel.innerHTML(" ");



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

