document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling with proper header height offset
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  const headerHeight = header.offsetHeight;

  // Smooth scroll to sections
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetPosition = targetSection.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Active link highlighting on scroll
  const sections = document.querySelectorAll("section[id]");
  const options = {
    threshold: 0.5,
    rootMargin: `-${headerHeight}px 0px -50% 0px`,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.navbar a[href="#${id}"]`);

      if (entry.isIntersecting) {
        link?.classList.add("active");
      } else {
        link?.classList.remove("active");
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));

  // Initialize Swiper sliders
  const initializeSwiper = (selector, config) => {
    new Swiper(selector, {
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
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      },
      ...config,
    });
  };

  // Initialize different swiper instances
  initializeSwiper(".services-swiper", {
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  initializeSwiper(".gallery-swiper", {
    slidesPerView: 2,
    breakpoints: {
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1440: { slidesPerView: 5 },
    },
  });
  initializeSwiper(".testimonials-swiper", {
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
});
