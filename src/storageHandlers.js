export function addToStorage(newTask) {
  localStorage.setItem('taskObject', newTask.name);
  localStorage.getItem('taskObject', newTask.name);
  // localStorage.setItem('taskOwner', newTask.owner);
}

// function getStorageVals() {
//   const currentColor = localStorage.getItem('bgcolor');
//   const currentFont = localStorage.getItem('font');
//   const currentImage = localStorage.getItem('image');