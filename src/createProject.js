import { Project, allProjects } from './project-logic';
import { testSavingProjects } from './storageHandlers.js';
export function popUp() {
  let projectName = prompt('Create a new Project');
  if (projectName != null || projectName != undefined || projectName != '') {
    const newProject = Project(projectName);
    newProject.projectOwner = 'Jameson\'s Lucky Carr';
    newProject.logDeets();
    allProjects.projects.push(newProject);
    allProjects.displayProjects();
    testSavingProjects();


    const mainContent = document.querySelector('.main-content-area');
    const projectListWrapper = document.createElement('div');
    mainContent.appendChild(projectListWrapper);
    projectListWrapper.classList.add('project-list');
    const projectList = document.createElement('ul');
    mainContent.appendChild(projectList);

    let domPopulate = document.createElement('li');
    domPopulate.innerText = `${newProject.projectName} is owned by ${newProject.projectOwner}`;
    projectList.appendChild(domPopulate);
    return newProject;
  };
}