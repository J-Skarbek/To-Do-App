export default function createNav() {
  const navBar = document.querySelector('.nav-bar');
  const addLogoWrapper = document.createElement('div');
  const addLogo = document.createElement('img');
  const addNavItemsWrapper = document.createElement('div');
  const navItems = document.createElement('ul');

  const navLinks = [
    'Home',
    'Blank',
    'Test',
    'Et Cetera',
  ];

  navBar.appendChild(addLogoWrapper);
  addLogoWrapper.appendChild(addLogo);
  navBar.appendChild(addNavItemsWrapper);
  addNavItemsWrapper.appendChild(navItems);

  navLinks.forEach(link => {
    let newLink = document.createElement('li')
    navItems.appendChild(newLink)
  });

  return navBar;

}