//Javascript for Categories toggle button
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdownMenu.classList.remove('show');
    }
  });
});

//Javascript for menu-close-button and menu-open-button

const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener('click', () => {
  document.body.classList.toggle('show-mobile-menu');
})

menuCloseButton.addEventListener('click', () => {
  menuOpenButton.click();
})
//Another way you can remove the show-mobile-menu
// menuCloseButton.addEventListener('click', () => {
//   document.body.classList.remove('show-mobile-menu');
// })



