var index = 1;
autoSlide();



function autoSlide(){
	var slides = document.getElementsByClassName("pictures");
  for(var i = 0; i < slides.length; i++){
  slides[i].style.display = "none";
  }

  if (index > slides.length){
  index = 1
  }
  slides[index-1].style.display = "block";
    index++;
  setTimeout(autoSlide, 5000);
}

function changeSlides(x){
	showPic(index += x);
}

function showPic(x){
	var slides = document.getElementsByClassName("pictures");
  for(var i = 0; i < slides.length; i++){
  slides[i].style.display = "none";
  }
	if (index < 1){
  index = slides.length
  }
  if (index > slides.length){
  index = 1
  }
  slides[index-1].style.display = "block";
}

