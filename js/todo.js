
/**
 * todo.js: display todo list on the screen
 * @author DoungukKim
 * @since 7/21/2023
 * @version v0.0.1
 */

const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");
const TODOS_KEY="todos"
let todos=[];


// save input value and call paintTodo() method to save input
function handleToDoSubmit(){
    // event.stopImmediatePropagation();
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

// delete todo list with x button
function deleteDodo(event){
    const li=event.target.parentElement;
    todos=todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();

}

// add todo list on the screen
function paintTodo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");

    li.id=newTodo.id;
    span.innerText = newTodo.text;
    button.innerText=" X ";
    button.addEventListener("click",deleteDodo);

    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function myFilter(){

}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos=localStorage.getItem(TODOS_KEY);



if(savedTodos!==null){
    const parsedTodos=JSON.parse(savedTodos);
    todos=parsedTodos;
    parsedTodos.forEach(paintTodo);
}

