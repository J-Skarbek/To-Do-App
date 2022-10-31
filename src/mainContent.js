export function createMainContent() {
  const mainContent = document.querySelector('.main-content-area');
  const projectListWrapper = document.createElement('div');
  mainContent.appendChild(projectListWrapper);
  projectListWrapper.classList.add('project-list');

  return mainContent;
}