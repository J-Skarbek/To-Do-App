import _ from 'lodash';
import './style.css';
import { createNav } from './nav-bar.js';
import { createSideBar } from './sidebar.js';
// import { ProjectPrototype } from './project-logic.js';
import { Project } from './project-logic.js';

const newProject = Project('New Project', 'John Skarbek')
newProject.logDeets();

createNav();
createSideBar();

