import { ToDo } from './to-dos.js';
import { taskDisplay } from './displayTasks.js';

export function testStorageKeys() {
  let keys = Object.keys(localStorage);
  for(let key of keys) {
      console.log(localStorage.getItem(key));
  };
}

export function testingToDos() {
  const getTaskName = document.getElementById('task_name').value;
  const getTaskDueDate = document.getElementById('task_due_date').value;
  const getTaskOwnerName = document.getElementById('task_owner').value;
  const getTaskNotes = document.getElementById('notes').value;
  let newTask = ToDo(getTaskName, getTaskDueDate, '', getTaskOwnerName, '', getTaskNotes);
  taskDisplay(newTask);
  localStorage.setItem('taskObject', newTask.name);
  localStorage.setItem('taskOwner', newTask.owner);
  console.log(`Here's a test ${localStorage.taskObject}, owner is ${localStorage.taskOwner}.`);
  newTask.logToDoDetails();
}
