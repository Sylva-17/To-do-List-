const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let AllTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit',function(e){
    e.preventDefault(); // so the page won't reload
    addTodo();
   
})

function addTodo(){
    const todoText =  todoInput.value;
    
    if(todoText.length >0){
        AllTodos.push(todoText);
        updateTodoList();
        saveTodos();
        todoInput.value =""; 
    }
    
}

function updateTodoList(){
    todoList.innerHTML = "";
    AllTodos.forEach((todo,todoIndex)=>{
        const todoItem = createTodoItem(todo, todoIndex);
        todoList.append(todoItem);
    })
}

function createTodoItem(todo, todoIndex){
    const todoId = "todo-" + todoIndex;
    const  todoLi = document.createElement("li");

    todoLi.className = "todo";
    todoLi.innerHTML= `
        <input type="checkbox" id="${todoId}">
                <label class="custom-checkbox" for="${todoId}">
                    <span class="material-symbols-outlined">check</span>
                </label>
                <label for="${todoId}" class="todo-text">
                    ${todo}
                </label>
                <button class="delete-btn">
                    <span class="material-symbols-outlined">delete</span>
                </button> 

    `
    const deleteBtn = todoLi.querySelector(".delete-btn");
    deleteBtn.addEventListener("click",()=>{
        deleteItem(todoIndex);

    })
    return todoLi;
}

function deleteItem(todoIndex){
    AllTodos = AllTodos.filter((_,i) => i !== todoIndex);
            saveTodos();
        updateTodoList();
}

function saveTodos(){
    const todosJson = JSON.stringify(AllTodos);//transforme du text en JSON contraiement a parse
    localStorage.setItem("todos", todosJson);

}

function getTodos(){
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos)
    //si l'utilisateur visite le site pour la 1ere fois 
    //alors le tableau est vide donc localStorage revoi NULL 
    // au lieu de renvoyer NULL il renvoi []
}



/*   
j'ai un text area ou un form j'utilise submit 
 si j'ai un bouton j'utilise click
*/
