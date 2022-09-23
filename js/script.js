// ################### Like Button ###################

heartButtons = document.getElementsByClassName("svg-heart");
console.dir(heartButtons);

for (let element of heartButtons) {
  //set up eventlisterners

  element.addEventListener("click", (e) => {
    //use e or element
    //create a 'red-heart' css class
    //then use this code instead of "coloring code"
    //element.classList.toggle('red-heart')

    e.target.style.stroke = "red";
    e.target.style.fill = "red";
  });
  console.log(element);
}

function like() {}

//const likeCount = document.getElementById('number');

//  ################# Navigation ################

const navMobile = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

navMobile.addEventListener("click", () => {
  navMobile.classList.toggle("active");
  navMenu.classList.toggle("active");
});
