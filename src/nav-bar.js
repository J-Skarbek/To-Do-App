import MockLogo from './graphics/mock-up-logo.svg';

export function createNav() {
  const navBar = document.querySelector('.nav-bar');
  const addLogoWrapper = document.createElement('div');
  const addNavItemsWrapper = document.createElement('div');
  const navItems = document.createElement('ul');

  const logo = new Image();
  logo.src = MockLogo;
  logo.classList.add('app-logo')

  const navLinks = [
    'Home',
    'Blank',
    'Test',
    'Et Cetera',
  ];

  navBar.appendChild(addLogoWrapper);
  addLogoWrapper.appendChild(logo);
  navBar.appendChild(addNavItemsWrapper);
  addNavItemsWrapper.appendChild(navItems);
  navItems.classList.add('nav-links');

  navLinks.forEach(link => {
    let newLink = document.createElement('li')
    newLink.innerText = link;
    navItems.appendChild(newLink)
  });

  return navBar;

}