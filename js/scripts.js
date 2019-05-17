$(document).ready(function(){
    $('#tab0').click(function (event) {
        event.preventDefault();
        $(".para1").toggle();
    });
    $('#tab1').click(function (event) {
        event.preventDefault();
        $(".para2").toggle();
        $(".para1").hide();
    });
    $('#tab2').click(function (event) {
        event.preventDefault();
        $(".para3").toggle();
        $(".para2").hide();
    });
    $('#tab3').click(function (event) {
        event.preventDefault();
        $(".para4").toggle();
        $(".para3").hide();

    });
    $('#tab4').click(function (event) {
        event.preventDefault();
        $(".para5").toggle();
        $(".para4").hide();
    });
    $('#tab5').click(function (event) {
        event.preventDefault();
        $(".para6").toggle();
        $(".para5").hide();
    });
    
});


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }