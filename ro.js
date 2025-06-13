let lastScrollY = window.scrollY;
let scrollingDown = true;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  scrollingDown = currentY > lastScrollY;
  lastScrollY = currentY;
});

document.addEventListener("DOMContentLoaded", () => {
  const slideIns = document.querySelectorAll('.slide-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && scrollingDown) {
        entry.target.classList.add('visible');
      } else if (!entry.isIntersecting && !scrollingDown) {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  slideIns.forEach(el => observer.observe(el));

  const toggle = document.querySelector(".toggle-button");
  const menu = document.querySelector(".menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});


document.addEventListener("DOMContentLoaded", () => {
  const slideIns = document.querySelectorAll('.slide-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        // Remove so it can re-trigger next time
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  slideIns.forEach(el => observer.observe(el));
});
