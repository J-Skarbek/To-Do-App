const tasksArray = [];

export function addTest(taskName) {
  localStorage.setItem(taskName, JSON.stringify(taskName));
  tasksArray.push(taskName);
  console.log(`Test input/task: ${JSON.parse(localStorage.getItem(taskName))}`);
  console.table(tasksArray);
}

export function addToStorage() {
  localStorage.setItem(localStorage.key = 'All')
}