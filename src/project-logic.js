// export function projectTemplate() {

// }

export const Project = (projectName, projectOwner) => {
  const logDeets = () => console.log({projectName, projectOwner});

  return {
    projectName, 
    projectOwner,
    logDeets
  }
}

// const newProject = Project('New Project', 'John Skarbek')