//open and close contact form
function openForm() {
    document.getElementById("form").style.display = "block";
}

function closeForm() {
    document.getElementById("form").style.display = "none";
}

//displays first image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

//changes slide when prev/next controls are used
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes slide when thumbnail controls are used
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //storing slides and thumbnail controls in their own arrays
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    //controlling what happens when slideIndex exceeds or is less than amount of slides
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};

    //hides inactive slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //removes active class from thumbnails
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    //displays image in slideshow
    slides[slideIndex - 1].style.display = "block";

    //adds active style to respective thumbnail
    dots[slideIndex - 1].className += " active";
}

//close contact form when user clicks off of it
//event listener added for any clicks on website
document.addEventListener("click", function(event){
    //if click happens on cancel button or anywhere that's not the contact form then call closeForm function
    if (event.target.matches(".cancel") || !event.target.closest(".form_popup") && !event.target.closest(".pop_up_button") && !event.target.closest(".contact")) {
        closeForm();
    }
}, false)