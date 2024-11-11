// Get the scroll arrow element and the sections
const scrollArrow = document.querySelector('.scroll-arrow');
const scrollContainer = document.querySelector('.scroll-container');

// When the arrow is clicked, scroll to the next section horizontally
scrollArrow.addEventListener('click', () => {
  // Scroll to the next section by translating the scroll container to the left by 100vw
  scrollContainer.style.transform = 'translateX(-100vw)';

  // Hide the arrow after click
  scrollArrow.classList.add('hidden');
});

// Optional: Detect when the user scrolls horizontally to hide the arrow
window.addEventListener('scroll', () => {
  if (window.scrollX > window.innerWidth) {
    scrollArrow.classList.add('hidden'); // Hide the arrow once user scrolls to the next section
  } else {
    scrollArrow.classList.remove('hidden'); // Show the arrow if still in the Home section
  }
});
