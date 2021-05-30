'use strict';

const todos = [];
const todo = [];
const todobutton = document.getElementById('send-button');
const todovalue = document.getElementById('todo-input');
const todolist = document.getElementById('todolist');
const radioBtn = document.getElementsByName('status');
const radioBtnAll =  document.getElementById('radioAll');
const radioBtnWorking = document.getElementById('radioWorking');
const radioBtnDone = document.getElementById('radioDone');
let id = 0;

const displayTodos = array => {
  todolist.textContent = '';
  array.forEach((task,number) => {
    const WorkButton = document.createElement('input');
    const RemoveButton = document.createElement('input');
    const newRow = todolist.insertRow();
    const indexCell = newRow.insertCell();
    const taskCell = newRow.insertCell();
    const statusCell = newRow.insertCell();
    const removeCell = newRow.insertCell();
  
    todolist.insertRow();
    indexCell.textContent = array[number].id;
    taskCell.textContent = array[number].task;
    
    WorkButton.type = 'button';
    WorkButton.value = array[number].status;
    statusCell.appendChild(WorkButton);

    RemoveButton.type = 'button';
    RemoveButton.value = '削除'
    removeCell.appendChild(RemoveButton);

    const WorkStatus = a => {
      array[number].status = a;
      WorkButton.value = a;
    };

    WorkButton.addEventListener('click',() => {
      if(WorkButton.value === '作業中'){
        WorkStatus('完了');
      } else {
        WorkStatus('作業中');
      }});

    RemoveButton.addEventListener('click', () => {
      array.splice(number,1);
      array.forEach((value, index) => {
        todos[index].id = index;
        });     
      displayTodos(todos);
 });
    
  });
};

const addTodos = task => {
  const todo = {
    task: task,
    status: '作業中',
    id: id
  };
  todos.push(todo);
  todovalue.value = '';
};

todobutton.addEventListener('click', () => {
  
  if(!todovalue.value){
    todovalue.value = '';
  } else {
  const task = todovalue.value;
  id++;
  addTodos(task);
  displayTodos(todos);
}});

const radioFilter = () => {
  if (radioBtnAll.checked) {
  return displayTodos(todos);
  } else if (radioBtnWorking.checked) {
  const doingTodos = todos.filter(element => 
  element.status === '作業中'
  )
  return displayTodos(doingTodos);
  } else if (radioBtnDone.checked) {
  const doneTodos = todos.filter(element =>
  element.status === '完了'
  )
  return displayTodos(doneTodos);
  }};
  
  radioBtn.forEach((status,number) => {
    radioBtn[number].addEventListener('click',() => {
      radioFilter();
    });
  });


