document.addEventListener("DOMContentLoaded", function () {
  // Scroll to section on menu click
  const links = document.querySelectorAll(".navbar a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjusting for navbar height
          behavior: "smooth",
        });
      }
    });
  });

  // Add active class on scroll to sections
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.5, // This can be adjusted depending on when you want the link to become active
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    centeredSlides: false, // Disable centering to avoid layout issues
    on: {
      init: function () {
        this.update(); // Ensure correct initialization
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
  });
});
