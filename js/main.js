let menuItems = document.getElementsByClassName('header-navigation-link');
let onClick = function (event) {
    [].forEach.call(menuItems, item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
};
[].forEach.call(menuItems, item => item.addEventListener('click', onClick, false));
