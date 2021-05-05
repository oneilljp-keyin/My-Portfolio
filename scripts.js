const parallax = document.querySelector("#grid");

function parallaxScroll() {
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        document.body.style.backgroundPositionY = (offset * -0.5) + "px";
    });
}

window.addEventListener("load", parallaxScroll);

//Get the button:
mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the window, show the button
document.querySelector('.main').addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (document.querySelector('.main').scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the window
function topFunction() {
  document.querySelector('.main').scrollTop = 0;
}


const cards = document.querySelectorAll('.card');
for (const card of cards) {
  card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
}