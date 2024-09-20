document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('myIcon');
    console.log('JavaScript loaded');

    icon.addEventListener('click', () => {
        console.log('Icon clicked');
        if (icon.classList.contains('bi bi-search-heart')) {
            icon.classList.remove('bi bi-search-heart');
            icon.classList.add('bi bi-search-heart-fill');
            console.log('Changed to state 2');
        } else {
            icon.classList.remove('icon-state2');
            icon.classList.add('bi bi-search-heart');
            console.log('Changed to state 1');
        }
    });
});

window.onscroll = function() {myFunction()};

// Get the navbar
var navi = document.getElementById("navi");

// Get the offset position of the navbar
var sticky = navi.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}