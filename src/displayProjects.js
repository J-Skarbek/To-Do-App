export function listProjects() {
  const mainContent = document.querySelector('.main-content-area');
  const projectListWrapper = document.createElement('div');
  mainContent.appendChild(projectListWrapper);
  projectListWrapper.classList.add('project-list');

  const projectList = document.createElement('ul');
  mainContent.appendChild(projectList);

  let domPopulate = document.createElement('li');
  // domPopulate.innerText = Project.projectName;
  projectList.appendChild(domPopulate);

  return mainContent;
}
