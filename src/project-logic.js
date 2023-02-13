export const allProjects = (function() {
  const projects = [];
  const displayProjects = () => {
    console.table(projects);
  };
  return {
    displayProjects,
    projects
  }
})();

export function ProjectPrototype(projectName, projectOwner) {
  const logDeets = () => console.log({projectName, projectOwner});
  return {
    logDeets,
  };
}

export function Project(projectName, projectOwner) {
  const { logDeets } = ProjectPrototype(projectName, projectOwner);
  const listOfProjects = [];
  const listOfTasks = [];
  return {
    projectName, 
    projectOwner,
    listOfTasks,
    logDeets,
    listOfProjects,
  };
}