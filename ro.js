document.addEventListener("DOMContentLoaded", () => {
    const slideIns = document.querySelectorAll('.slide-in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, {
      threshold: 0.2 // Adjust the percentage of the section visible before triggering
    });
  
    slideIns.forEach(el => observer.observe(el));
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".toggle-button");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });




