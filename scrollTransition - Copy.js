const revealElements = document.querySelectorAll('.hide');

const revealOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin outside the root
  threshold: 0.3 // Trigger the reveal when 20% of the element is visible
};

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When the element is visible in the viewport
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)'; // Change translateY to translateX
    } else {
      // When the element is not visible in the viewport
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateX(-100px)'; // Change translateY to translateX
    }
  });
};

// Create the Intersection Observer instance
const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

// Start observing each reveal element
revealElements.forEach(element => {
  revealObserver.observe(element);
});
