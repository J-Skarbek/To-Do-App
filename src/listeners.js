import { popUp } from './createProject.js';
import { testStorageKeys, testingToDos} from './eventFunctions.js'

export function domListeners() {
  const testBtn = document.querySelector('.test-button');
  testBtn.addEventListener('click', popUp);

  const testInputSubmission = document.querySelector('.input-submission');
  testInputSubmission.addEventListener('click', testingToDos);

  const testGetFromLocal = document.querySelector('.test-get-from-local');
  testGetFromLocal.addEventListener('click',testStorageKeys);
}