import { Project, allProjects } from './project-logic';

export function popUp() {
  let projectName = prompt('Create a new Project');
  if (projectName != null || projectName != undefined || projectName != '') {
    const newProject = Project(projectName);
    newProject.logDeets();
    allProjects.projects.push(newProject);
    allProjects.displayProjects();
    return newProject;
  };
}