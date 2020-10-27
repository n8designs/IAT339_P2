//Selecting the button
const scrollToTopButton= document.getElementById("topButton");

// Function works to show scroll-to-top button if we scroll beyond
// a certain height

const scrollFunc =() => {
  let y = window.scrollY; // current scroll value

  // if scroll value is greater than the window height, add class
  // to the scroll-to-top button to show it

  if (y > 100) {
    // scrollToTopButton.className = "top-link show regbut";
    scrollToTopButton.style.display = "inline-flex";
  } else {
    // scrollToTopButton.className = "";
    scrollToTopButton.style.display = "none";
  }
};

scrollFunc();

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Set variable for the number of pixels we are from the top
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // if number is greater than 0, scroll back to 0, or the top of the document
  // animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  if (c>0) {
    window.requestAnimationFrame(scrollToTop);
    //ScrollTo takes an x and a y coordinate
    // Increase the '10' value to get a smoother/slower scroll
    window.scrollTo(0,c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}



const hamborgor = document.querySelector("#hamborgor");
const hamborgorstuffing = document.querySelector("#hamborgorstuffing");

hamborgor.onclick = function(e) {
  e.preventDefault();
  eathamborgor();
}

const eathamborgor = () => {
// if (hamborgorstuffing.style.display!= "block") {
// hamborgorstuffing.style.display="block";
// } else {
//   hamborgorstuffing.style.display="none";
//
// }
//
// }
if (hamborgorstuffing.classList.contains("display")) {
  hamborgorstuffing.classList.remove("display");
    hamborgorstuffing.classList.add("hidden");
} else  {
    hamborgorstuffing.classList.remove("hidden");
  hamborgorstuffing.classList.add("display");
}


}

// //only have the button appear when they have scrolled down
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (documnet.body.scrollTop > 100 ||
//   document.documentElement.scrollTop > 100) {
//     topbutton.style.display="block";
//   } else {
//       topbutton.style.display="none";
//     }
//   }
//
// // Make the button scroll to top
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop=0;
// }
