import { taskDisplay } from "./displayTasks";

export function addToStorage(newTask) {
  localStorage.setItem('task', JSON.stringify(newTask));
  console.log(`Testing local storage: ${localStorage.getItem('task')}.`)
  console.log(localStorage.length);
}

export function displaySavedTasks() {
  if ( localStorage.length > 0 ) {
    localStorage.getItem('task')
    let test123 = JSON.parse(localStorage.getItem('task')); 
    taskDisplay(test123)
  };

}