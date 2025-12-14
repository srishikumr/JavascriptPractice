const todolist = [];

function addTodo(){
    const name = document.querySelector('.js-name-input').value;
    todolist.push(name);
    console.log(todolist);
    //document.querySelector('.js-name-input').value = '';
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