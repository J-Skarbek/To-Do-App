export function displayTaskList(newTask) {
  const taskList = document.createElement('div')
  taskList.classList.add('task-wrapper')
  const mainContent = document.querySelector('.main-content-area')
  mainContent.appendChild(taskList)

  taskList.innerText = newTask

  // return taskList;
}

// export function generateTasks() {

// }