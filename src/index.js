import './style.css';
import _ from 'lodash';
// import { formatDistance, subDays } from 'date-fns';
import { domListeners } from './listeners.js'
import { createNav } from './nav-bar.js';
import { createMainContent } from './mainContent.js';
import { createSideBar } from './sidebar.js';
import { listProjects } from './displayProjects.js';
import { taskListDisplay} from './displayTasks.js';
// import { checkStorage } from './eventFunctions';
// import { ToDo } from './to-dos.js';
import { addTest } from './newTask-Updated.js';
// import { storageAvailable } from './storageHandlers.js';

// console.log(storageAvailable('localStorage'));

// export function checks() {
//   console.log(checkStorage);
// }
createNav();
createMainContent();
createSideBar();
listProjects();
taskListDisplay();
domListeners();
addTest('Creation1');
addTest('Creation2');
addTest('Creation3');
addTest('Creation4');
