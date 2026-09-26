const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let AllTodos = [];

todoForm.addEventListener('submit',function(e){
    e.preventDefault(); // so the page won't reload
    addTodo();
   
})

function addTodo(){
    const todoText =  todoInput.value;
    
    if(todoText.length >0){
        AllTodos.push(todoText);
        createTodoItem(todoText);
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
    const  todoLi = document.createElement("li");
    todoLi.innerText = todo; //on met le text a l'interrieur de l'element html
    todoList.append(todoLi);//on met l'element html dans l'element todoList qui contient la liste des taches
    return todoLi
}


/* 
j'ai un text area ou un form j'utilise submit 
 si j'ai un bouton j'utilise click
*/
