// Get the scroll arrow element
const scrollArrow = document.querySelector('.scroll-arrow');

// Add a scroll event listener
window.addEventListener('scroll', function () {
  // Get the scroll position of the page
  const scrollPosition = window.scrollY;

  // If the user has scrolled past the first section (adjust this value based on your layout)
  if (scrollPosition > window.innerHeight) {
    // Fade out the scroll arrow
    scrollArrow.style.opacity = '0';
  } else {
    // Fade in the scroll arrow
    scrollArrow.style.opacity = '1';
  }
});
