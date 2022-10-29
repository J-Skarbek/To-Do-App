export function taskListDisplay() {
  const taskListWrapper = document.createElement('div');
  taskListWrapper.classList.add('task-wrapper');
  const mainContent = document.querySelector('.main-content-area');
  mainContent.appendChild(taskListWrapper);
  const tasks = document.createElement('ul');
  taskListWrapper.appendChild(tasks);
}

export function taskDisplay(newTask) {
  const getUl = document.querySelector('.task-wrapper ul')
  const newListItem = document.createElement('li');
  newListItem.innerText = `Here's a test ${newTask.name}, owner is ${newTask.owner}.`;
  getUl.appendChild(newListItem);
}

// export function displayTaskList(newTask) {
//   const taskListWrapper = document.createElement('div');
//   taskListWrapper.classList.add('task-wrapper');
//   const mainContent = document.querySelector('.main-content-area');
//   mainContent.appendChild(taskListWrapper);
//   const tasks = document.createElement('ul');

//   taskList.innerText = newTask;
// }
