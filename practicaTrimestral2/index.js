 document.addEventListener("DOMContentLoaded", function () {
        const navToggle = document.querySelector(".nav-toggle");
        const menu = document.querySelector(".menu-items");
        if (navToggle && menu) {
          navToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
          });
        }

        const fadeElements = document.querySelectorAll(".fade-in");
        fadeElements.forEach((el) => el.classList.add("visible"));

        function revealOnScroll() {
          const reveals = document.querySelectorAll(".scroll-reveal");
          reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
              el.classList.add("show");
            }
          });
        }
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
      });