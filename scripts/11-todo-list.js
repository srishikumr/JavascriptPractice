const todolist = [];

function addTodo(){
    const name = document.querySelector('.js-name-input').value;
    todolist.push(name);
    console.log(todolist);
}

function addTaskByEnter(){
    
    console.log(event.key);
    if (key == 'Enter'){
        addTodo();
    
    }
   
}