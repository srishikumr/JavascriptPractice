const todolist = [];

const todoListObject = [];


function addTodo(){
    const name = document.querySelector('.js-name-input').value;
    todolist.push(name);
    console.log(todolist);
    //document.querySelector('.js-name-input').value = '';
}

function addTodo1(){
    const name = document.querySelector('.js-name-input1').value;
    todolist.push(name);
    console.log(todolist);
    //document.querySelector('.js-name-input').value = '';
    renderTodoList();
}



// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('.js-add-button')
//     .addEventListener('click', addTodo2);
// });

document.querySelector('.js-add-button')
.addEventListener('click',addTodo2)

function addTodo2(){
    
    const name = document.querySelector('.js-name-input2').value;
    const dueDate = document.querySelector('.js-date-input').value
    todoListObject.push({name: name, dueDate: dueDate});
    console.log(todolist);
    //document.querySelector('.js-name-input').value = '';
    renderTodoList1();
}

function renderTodoList(){
    
   let todoListHTML = '';
   todolist.forEach(function(todo, i){
  //  const todo = todolist[i];
        const html = `
        <p>
        ${todo} <button onclick= "deleteTodo(${i});"
        >Delete</button>
        </p>`
        todoListHTML += html;
        
   })
    //document.querySelector('.js-name-input').value = '';
    // for (let i = 0; i<todolist.length; i++){
    //     const todo = todolist[i];
    //     const html = `
    //     <p>
    //     ${todo} <button onclick= "deleteTodo(${i});"
    //     >Delete</button>
    //     </p>`
    //     todoListHTML += html;
        
    // }
    console.log(todoListHTML);
    document.querySelector('.todoListPrinter').innerHTML = todoListHTML;
}

function renderTodoList1(){
    
   let todoListHTML = '';
    //document.querySelector('.js-name-input').value = '';
    for (let i = 0; i<todoListObject.length; i++){
        const todoListObjects = todoListObject[i];
        const name = todoListObjects.name;
        const dueDate = todoListObjects.dueDate;
        const html = `
       <div>${name}</div>
       <div>${dueDate}</div>
       <button onclick= "" class = "delete-todo-button js-delete-button"
        >Delete</button>
       `
        todoListHTML += html;
        
    }
    console.log(todoListHTML);
    document.querySelector('.todoListPrinter1').innerHTML = todoListHTML;
    document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index)=>{
        deleteButton.addEventListener('click', ()=>{
            console.log(index); 
            deleteTodo1();
        })
    })

}


function deleteTodo(i){
    
        todolist.splice(i, 1);
        renderTodoList();
}

function deleteTodo1(i){
    
        todoListObject.splice(i, 1);
        renderTodoList1();
}

function addTaskByEnter(event){
    
    const key = event.key;
    if (key == 'Enter'){
        addTodo();
    
    }
//    else{
//     console.log('safe');
//    }
}

function addTaskByEnter1(event){
    
    const key = event.key;
    if (key == 'Enter'){
        addTodo1();
    
    }
//    else{
//     console.log('safe');
//    }
}
function addTaskByEnter2(event){
    
    const key = event.key;
    if (key == 'Enter'){
        addTodo2();
    
    }
//    else{
//     console.log('safe');
//    }
}