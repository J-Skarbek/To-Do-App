import _ from 'lodash';
import './style.css';
import { createNav } from './nav-bar.js';
import { createSideBar } from './sidebar.js';
import { Project } from './project-logic.js';
import { ToDo } from './to-dos.js';

const newProject = Project('New Project', 'John Skarbek')
newProject.logDeets();

const task1 = ToDo('Make Dinner', '11/29/1986', 'High', 'Make it with low cholesterol');
task1.logToDoDetails();

createNav();
createSideBar();

