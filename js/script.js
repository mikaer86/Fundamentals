// ################### Like Button ###################

//  ################# Navigation ################

const navMobile = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

navMobile.addEventListener("click", () => {
  navMobile.classList.toggle("active");
  navMenu.classList.toggle("active");
});
