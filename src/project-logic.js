const allProjects = (function() {
  const projects = [];
  const displayProjects = () => {
    console.table(projects);
  };
  return {
    displayProjects,
    projects
  }
})();

const ProjectPrototype = (projectName, projectOwner) => {
  const pushProject = allProjects.projects.push(Project);
  const displayProjects = allProjects.displayProjects()
  const logDeets = () => console.log({projectName, projectOwner});
  return {
    logDeets,
    pushProject,
    displayProjects,
  };
}

export const Project = (projectName, projectOwner) => {
  const {logDeets, pushProject, displayProjects} = ProjectPrototype(projectName, projectOwner);
  return {
    projectName, 
    projectOwner,
    logDeets,
    pushProject,
    displayProjects,
  }
}