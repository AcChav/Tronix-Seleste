  // counter section
  function animateCounterOnScroll() {
      const counters = document.querySelectorAll('.timer');
    
      const options = {
        threshold: 0.2 // Adjust this threshold value to control when the animation triggers (0.2 means 20% visibility)
      };
    
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                const target = entry.target;
                const speed = parseInt(target.getAttribute('data-speed'));
                const targetValue = parseInt(target.getAttribute('data-to'));
    
                let currentValue = 0;
                const updateCounter = () => {
                  const increment = targetValue / (speed / 100); // Calculate increment per millisecond
                  currentValue += increment;
    
                  if (currentValue >= targetValue) {
                    target.textContent = targetValue;
                  } else {
                      if (targetValue >= 100) {
                            target.textContent = Math.floor(currentValue);
                      } else {
                          target.textContent = Math.round(currentValue);
                      }
                          requestAnimationFrame(updateCounter);
                      }
                  };
    
              updateCounter();
              observer.unobserve(target); // Unobserve the target element after animation starts to avoid unnecessary repetition
              }
          });
      }, options);

      counters.forEach(counter => {
          observer.observe(counter);
      });
  }
    
  window.addEventListener('load', animateCounterOnScroll);

  // ------------------------------------------------------------------------
  // scroll to top btn script
  document.addEventListener("DOMContentLoaded", function () {
      // Get the button element
      var backButton = document.getElementById("back__top");

      // Add a click event listener to the button
      backButton.addEventListener("click", function () {
           // Scroll the page back to the top
          // Use the 'behavior: smooth' property to make the scroll smooth
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
      });
  });
