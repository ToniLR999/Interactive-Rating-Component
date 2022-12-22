let selectCount = 0;
const ratings = document.querySelectorAll('.btn-option');
const submitButton = document.querySelector('button[type="submit"]');
const selectionDiv = document.querySelector('.selection');
const thankYouDiv = document.querySelector('.thank-you');
const ratingValue = document.querySelector('.selected-value');

function selectRating(e){
    ratings.forEach(rating => rating.classList.remove('btn-selected'));
  
    selectCount = e.target.value;
    console.log(selectCount);
    e.target.classList.add('btn-selected');
}

function submitRating(){
    if(selectCount !== 0){
        selectionDiv.classList.remove('active');
        thankYouDiv.classList.add('active');
        ratingValue.textContent = selectCount;
    }

}

ratings.forEach(rating => rating.addEventListener('click',selectRating));
submitButton.addEventListener('click',submitRating);