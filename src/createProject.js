import { Project } from './project-logic';

export function popUp() {
    let projectName = prompt('Create a new Project');
    if (projectName != null || projectName != undefined) {
        const newProject = Project(projectName);
        console.log(newProject, typeof newProject)
    };
}