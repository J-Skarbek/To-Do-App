import _ from 'lodash';
import { formatDistance, subDays } from 'date-fns';
import './style.css';
import { createNav } from './nav-bar.js';
import { createSideBar } from './sidebar.js';
import { Project } from './project-logic.js';
import { ToDo } from './to-dos.js';
import { popUp } from './createProject.js';

const newProject = Project('New Project', 'John Skarbek');
newProject.logDeets();

const task1 = ToDo('Make Dinner', '11/29/1986', 'High', 'Make it with low cholesterol');
task1.logToDoDetails();


console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));

createNav();
createSideBar();

const testBtn = document.querySelector('.test-button');
testBtn.addEventListener('click', popUp);

