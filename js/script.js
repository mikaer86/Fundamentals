// ################### Like Button ###################

function like() {

    const likeBtn = document.getElementById('heart');
    const likeCount = document.getElementById('number');

    likeBtn.addEventListener('click', function onClick(event) {
    
      event.target.style.stroke = 'red';
      event.target.style.fill = 'red';
  
  });
   
}



//  ################# Navigation ################


const navMobile = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

  navMobile.addEventListener('click', () => {

  navMobile.classList.toggle('active');
  navMenu.classList.toggle('active');

});












 









