
const form = document.querySelector('#add-todos');
const input = document.querySelector('#create-list');
const todolist = document.querySelector('#Todo-list');

window.addEventListener('load',function(){
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [] ;  //loads

  savedTodos.forEach(function(todoText){
    makeToDoSection(todoText);
  });
});


todolist.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.parentElement.remove(); 
        saveTodosToLS();  //if targeted button on list is clicked than remove parent el with created li and button from adding to list(actually removes todo and button)
    }
    //else if(e.target === newTodo){
    else if(e.target.tagName === 'TC'){  
       e.target.classList.toggle('done-todo');
       saveTodosToLS();
    }
});


form.addEventListener('submit',function(e){
  e.preventDefault();
  const todoText = input.value;
  if(todoText.trim() !== ''){
    makeToDoSection(todoText);
    input.value = '';
    saveTodosToLS();
  }
});


function makeToDoSection(todoText){

  const newTodoRow = document.createElement('tr');
  const todoTextCol = document.createElement('tc');
  todoTextCol.innerText = todoText;

  const removeBtnCol = document.createElement('tc');
 
  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('content' , 'remove');
  removeBtn.innerHTML = 'remove';
  removeBtnCol.appendChild(removeBtn);

  newTodoRow.appendChild(todoTextCol);
  newTodoRow.appendChild(removeBtnCol);

  document.getElementById('todoListBody').appendChild(newTodoRow);

  /* if(todoText.includes("remove")){
    newTodo.innerText = todoText.replace("remove" , "");
   }else{
    newTodo.innerText = todoText;
   } */
  //  newTodo.innerText = todoText;
  //  console.log(newTodo.innerText);
  // const removeBtn = document.createElement('button');
  // removeBtn.setAttribute('content' , 'remove');
  // removeBtn.textContent = 'remove';
  // newTodo.appendChild(removeBtn);
  // console.log(newTodo.innerText);

  // todolist.appendChild(newTodo);
};



function saveTodosToLS(){
  const todos = Array.from(todolist.querySelectorAll('tr')).map(todo => {
    return todo.querySelector('tc').innerText;
  });
  localStorage.setItem('todos' , JSON.stringify(todos));
 };





//function saveTodosToLS(){
// const todos = Array.from(todolist.querySelectorAll('tr')).map(todo => todo.innerText);
// localStorage.setItem('todos' , JSON.stringify(todos));
//}






