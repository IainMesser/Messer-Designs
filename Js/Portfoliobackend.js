// Get the arrow elements
const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');

// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
  // If the page is scrolled, make arrows invisible
  if (window.scrollY > 50) { // You can change 50 to the scroll distance you prefer
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
  } else {
    arrow1.classList.remove('hidden');
    arrow2.classList.remove('hidden');
  }
});