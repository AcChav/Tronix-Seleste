// counter 
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


// carousel script
document.addEventListener('DOMContentLoaded', function () {
  const slickSlider = document.querySelector('.slick__slider');
  const slideItems = slickSlider.querySelectorAll('.slide__item');
    
  // Set initial slide index and number of slides to show
  let slideIndex = 0;
  let slidesToShow = 4;
        
  // Helper function to update slide visibility based on current index
  function updateSlideVisibility() {
    slideItems.forEach((slide, index) => {
      let newIndex = (index + slideItems.length - slideIndex) % slideItems.length;
      slide.style.display = (newIndex >= 0 && newIndex < slidesToShow) ? 'block' : 'none';
          });
        }
        
  // Helper function to handle next button click
  function nextSlide() {
    slideIndex++;
    updateSlideVisibility();
  }
        
  // Helper function to handle previous button click
  function prevSlide() {
    slideIndex--;
    updateSlideVisibility();
  }
        
  // Get references to the "Prev" and "Next" buttons
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
        
  // Add click event listeners to the buttons
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
        
  // Function to adjust the number of slides shown based on screen width
  function adjustSlidesToShow() {
    if (window.innerWidth >= 1200) {
      slidesToShow = 4;
    } else if (window.innerWidth >= 991) {
      slidesToShow = 3;
    } else if (window.innerWidth >= 767) {
      slidesToShow = 2;
    } else {
      slidesToShow = 1;
    }
    updateSlideVisibility();
  }
        
    // Call the function to adjust the number of slides shown on page load
    adjustSlidesToShow();
        
    // Add an event listener to re-adjust slides when the window is resized
    window.addEventListener('resize', adjustSlidesToShow);
    
    // Infinite loop - Clone the slides and append/prepend to the slider
    const clonedSlides = Array.from(slideItems).map(item => item.cloneNode(true));
    slickSlider.prepend(...clonedSlides);
    slickSlider.append(...clonedSlides);
        
    // Set the initial position to show the first set of slides
    slideIndex = clonedSlides.length;
    updateSlideVisibility();
  });


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
