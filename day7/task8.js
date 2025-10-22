let likeBtn = document.querySelector(".like-btn");
let likeText = document.querySelector(".like-text");
let dislikeBtn = document.querySelector(".dislike-btn");
let dislikeText = document.querySelector(".dislike-text");

let isDisliked = true
let isLiked = true

likeBtn.addEventListener("click", function() {
    if(isLiked !== false){
      if (isDisliked) {
        likeText.textContent = "Liked";
        // likeBtn.style.backgroundColor = " rgba(206, 243, 106, 1)";
        likeBtn.style.backgroundColor = " rgba(144, 163, 87, 1)";
      } else {
        likeText.textContent = "Like";
        likeBtn.style.backgroundColor = "rgb(183, 224, 149)";
      }
      isDisliked = !isDisliked;
    }
})


dislikeBtn.addEventListener("click", function(){
    if(isDisliked !== false){
      if (isLiked) {
        dislikeText.textContent = "Disliked";
        dislikeBtn.style.backgroundColor = "rgba(206, 130, 69, 1)";
      } else {
        dislikeText.textContent = "Dislike";
        dislikeBtn.style.backgroundColor = "rgb(240, 182, 134)";
      }
      isLiked = !isLiked;
    }
})

//