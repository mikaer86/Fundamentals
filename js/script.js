// ################### Like Button ###################

//  ################# Navigation ################

const navMobile = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

navMobile.addEventListener("click", () => {
  navMobile.classList.toggle("active");
  navMenu.classList.toggle("active");
});
