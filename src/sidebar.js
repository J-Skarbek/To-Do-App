export function createSideBar() {
    const sideBar = document.querySelector('.side-bar');
    const itemWrapper = document.createElement('div')

    sideBar.appendChild(itemWrapper);


    return sideBar;
}