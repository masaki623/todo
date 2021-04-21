'use strict';

const todos = [];
const todo = [];
const todobutton = document.getElementById('send-button');
const todovalue = document.getElementById('todo-input');
const todolist = document.getElementById('todolist');

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
    indexCell.textContent = number;
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
      if(WorkButton.value = '作業中'){
        WorkStatus('完了');
      } else {
        WorkStatus('作業中');
      }});

    RemoveButton.addEventListener('click', () => {
      array.splice(number,1);
      displayTodos(todos);
 });
    
  });
};

const addTodos = task => {
  const todo = {
    task: task,
    status: '作業中'
  };
  todos.push(todo);
  todovalue.value = '';
};

todobutton.addEventListener('click', () => {
  
  if(!todovalue.value){
    todovalue.value = '';
  } else {
  const task = todovalue.value;
  addTodos(task);
  displayTodos(todos);
}});



