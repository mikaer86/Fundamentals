const likeBtn = document.getElementById('heart');
const likeCount = document.getElementById('number');

function like() {

    likeBtn.addEventListener('click', function onClick(event) {
    
        event.target.style.stroke = 'red';
        event.target.style.fill = 'red';
    
    });
}


 









