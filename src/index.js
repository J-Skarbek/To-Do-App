import _ from 'lodash';
import { formatDistance, subDays } from 'date-fns';
import './style.css';
import { createNav } from './nav-bar.js';
import { createSideBar } from './sidebar.js';
import { listProjects } from './displayProjects.js';
// import { Project } from './project-logic.js';
import { ToDo } from './to-dos.js';
import { popUp } from './createProject.js';
import { displayTaskList } from './displayTasks.js';

// const newProject = Project('New Project', 'John Skarbek');
// newProject.logDeets();


const task1 = ToDo('Make Dinner', '11/29/1986', 'High', 'Make it with low cholesterol');
task1.logToDoDetails();


console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));

createNav();
createSideBar();
listProjects();

const testBtn = document.querySelector('.test-button');
testBtn.addEventListener('click', popUp);

const testInputSubmission = document.querySelector('.input-submission');
testInputSubmission.addEventListener('click', testingToDos);


function testingToDos() {
    const getTaskName = document.getElementById('task_name').value;
    const getTaskDueDate = document.getElementById('task_due_date').value;
    const getTaskOwnerName = document.getElementById('task_owner').value;
    const getTaskNotes = document.getElementById('notes').value;
    let newTask = ToDo(getTaskName, getTaskDueDate, '', getTaskOwnerName, '', getTaskNotes);
    displayTaskList(newTask.name);
    newTask.logToDoDetails();
}

