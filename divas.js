//open modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//close modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//next/prev controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumbnail controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //declaring variable for loop counter
    var i;
    //declaring variable to hold slides
    var slides = document.getElementsByClassName("mySlides");
    //declaring variable to hold thumbnails
    var dots = document.getElementsByClassName("demo");
    //declaring variable to hold caption text
    var captionText = document.getElementById("caption");
    //following conditions make sure slideIndex var is never larger than 9 or smaller than 1
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    //only active slide is shown
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}