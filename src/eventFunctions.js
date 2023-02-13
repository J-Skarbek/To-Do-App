import { ToDo } from './to-dos.js';
// import { allProjects } from './project-logic.js'
import { taskDisplay } from './displayTasks.js';
import { addToStorage } from './storageHandlers.js';

export function testStorageKeys() {
  let keys = Object.keys(localStorage);
  keys.forEach(key => {
    console.log(JSON.parse(localStorage.getItem(key)));
  });
}

export function addNewTask() {
  let getTaskName = document.getElementById('task_name').value;
  let getTaskDueDate = document.getElementById('task_due_date').value;
  let getTaskOwnerName = document.getElementById('task_owner').value;
  let getTaskNotes = document.getElementById('notes').value;
  const newTask = ToDo(getTaskName, getTaskDueDate, '', getTaskOwnerName, '', getTaskNotes); 
  taskDisplay(newTask);
  addToStorage(newTask);
}

export function checkStorage() {
  if (!localStorage.getItem('projects') && !localStorage.getItem('tasks')) {
    console.log('nothing in storage.')
  } else {
    // let keys = Object.keys(localStorage);
    // keys.forEach(key => {
    //   let projectItem = JSON.parse(localStorage.getItem(key));
    //   allProjects.projects.push(projectItem)
    //   console.log(JSON.parse(localStorage.getItem(key)));
    //   console.table(allProjects)
    // });
    console.log(`Tasks: ${JSON.parse(localStorage.getItem('tasks'))}`);
    console.log(`Tasks: ${JSON.parse(localStorage.getItem('projects'))}`);
  };
}

export function clearStorage() {
  localStorage.clear();
  console.log('Local Storage has been cleared.')
}
