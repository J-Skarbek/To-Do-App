import { taskDisplay } from "./displayTasks";
import { allProjects } from "./project-logic";

function addToStorage(newTask) {
  localStorage.setItem('task', JSON.stringify(newTask));
  console.log(`Testing local storage: ${localStorage.getItem('task')}.`)
  console.log(localStorage.length);
}

function displaySavedTasks() {
  if ( localStorage.length > 0 ) {
    localStorage.getItem('task')
    let test123 = JSON.parse(localStorage.getItem('task')); 
    taskDisplay(test123)
  };
}

const testSavingProjects = () => {
  localStorage.setItem('projects', JSON.stringify(allProjects));
  console.log(`Testing local storage: ${JSON.parse(localStorage.getItem('projects'))}.`)
}

function storageAvailable(type) {
  let storage;
  try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch (e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.key === 22 ||
          // Firefox
          e.key === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  };
}

export { addToStorage, displaySavedTasks, testSavingProjects, storageAvailable  }