import { Project, allProjects } from './project-logic';

export function popUp() {
  let projectName = prompt('Create a new Project');
  if (projectName != null || projectName != undefined) {
    const newProject = Project(projectName);
    console.log(newProject, typeof newProject)
    allProjects.projects.push(newProject);
    allProjects.displayProjects();
    return newProject;
  };
// console.log(newProject, typeof newProject)
// allProjects.projects.push(newProject);
// allProjects.displayProjects();
}