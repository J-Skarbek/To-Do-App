import './style.css';
import _ from 'lodash';
// import { formatDistance, subDays } from 'date-fns';
import { domListeners } from './listeners.js'
import { createNav } from './nav-bar.js';
import { createMainContent } from './mainContent.js';
import { createSideBar } from './sidebar.js';
import { listProjects } from './displayProjects.js';
import { taskListDisplay} from './displayTasks.js';
// import { ToDo } from './to-dos.js';
// import { initStorage } from './initStorage';
// import { storageAvailable } from './storageHandlers.js';

// console.log(storageAvailable('localStorage'));


createNav();
createMainContent();
createSideBar();
listProjects();
taskListDisplay();
domListeners();
