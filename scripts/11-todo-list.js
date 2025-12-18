const todolist = [];

let todoListHTML = '';

let j = 0;

function addTodo(){
    const name = document.querySelector('.js-name-input').value;
    todolist.push(name);
    console.log(todolist);
    //document.querySelector('.js-name-input').value = '';
}

function renderTodoList(){
    
    const name = document.querySelector('.js-name-input1').value;
    todolist.push(name);
    console.log(todolist);
    //document.querySelector('.js-name-input').value = '';
    for (let i = j; i<todolist.length; i++){
        const todo = todolist[i];
        const html = `
        <p>
        ${todo} <button 
        
        >Delete</button>
        </p>`
        todoListHTML += html;
        j++;
    }
    console.log(todoListHTML);
    document.querySelector('.todoListPrinter').innerHTML = todoListHTML;
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