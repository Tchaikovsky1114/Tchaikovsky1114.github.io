const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];



function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo){

    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    const btnType = ["❤","🧡","💛","💚","💙","💜","💓","💗","🤎","💖"];
    button.innerText = btnType[Math.floor(Math.random() * btnType.length)];
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    };



// function sayHello(item){
//     console.log("this is turn of ",item);
//     }
// arrow function 사용
// (item) = > console.log("this is turn of ", item);
// 그대로 forEach에 사용 forEach(function (item){
// console.log("this is turn of ", item);
// }