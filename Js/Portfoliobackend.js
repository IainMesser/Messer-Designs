// Get the arrow elements
const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');

// Variable to track scroll timeout
let scrollTimeout;

// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
  // If the page is scrolled more than 50px horizontally, hide the arrows
  if (window.scrollX > 50) { 
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
  } else {
    arrow1.classList.remove('hidden');
    arrow2.classList.remove('hidden');
  }

  // Clear the previous timeout (if any)
  clearTimeout(scrollTimeout);

  // Set a new timeout to detect when scrolling stops
  scrollTimeout = setTimeout(function() {
    // Make the arrows visible again after the user stops scrolling
    arrow1.classList.remove('hidden');
    arrow2.classList.remove('hidden');
  }, 150); 
});




//Footer Year 
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
console.log(d.toLocaleString());
