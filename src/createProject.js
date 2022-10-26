import { Project, allProjects } from './project-logic';
import { listProjects } from './displayProjects.js';

listProjects();

export function popUp() {
  let projectName = prompt('Create a new Project');
  if (projectName != null || projectName != undefined || projectName != '') {
    const newProject = Project(projectName);
    newProject.logDeets();
    allProjects.projects.push(newProject);
    allProjects.displayProjects();


    const mainContent = document.querySelector('.main-content-area');
    const projectListWrapper = document.createElement('div');
    mainContent.appendChild(projectListWrapper);
    projectListWrapper.classList.add('project-list');
    const projectList = document.createElement('ul');
    mainContent.appendChild(projectList);

    let domPopulate = document.createElement('li');
    domPopulate.innerText = newProject.projectName;
    projectList.appendChild(domPopulate);
    return newProject;
  };
}