// import { storageAvailable } from './storageHandlers.js';

// console.log(storageAvailable('localStorage'));

export function initStorage() {
  if (storageAvailable('localStorage')) {
    const tasks = [];
    localStorage.setItem('All', JSON.stringify(tasks));
    console.log(localStorage.getItem('All'));
  } else {
    console.log('Local Storage is not available');
  };

}

export function addToStorage() {
  localStorage.setItem(localStorage.key = 'All')
}