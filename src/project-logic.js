const ProjectPrototype = (projectName, projectOwner) => {
  const logDeets = () => console.log({projectName, projectOwner});
  return {
    logDeets
  };
}

export const Project = (projectName, projectOwner) => {
  const {logDeets} = ProjectPrototype(projectName, projectOwner);
  return {
    projectName, 
    projectOwner,
    logDeets
  }
}