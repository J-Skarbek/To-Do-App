import { taskDisplay } from "./displayTasks";
import { allProjects } from "./project-logic";

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

export const testSavingProjects = () => {
  localStorage.setItem('projects', JSON.stringify(allProjects));
  console.log(`Testing local storage: ${JSON.parse(localStorage.getItem('projects'))}.`)
}