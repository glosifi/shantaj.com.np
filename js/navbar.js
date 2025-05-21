// document.addEventListener("DOMContentLoaded", function () {
//     const mobileMenuButton = document.getElementById("mobile-menu");
//     const mobileNav = document.getElementById("mobile-nav");
//     const closeMenuButton = document.getElementById("close-menu");

//     // Toggle mobile menu on hamburger click
//     mobileMenuButton.addEventListener("click", function () {
//       mobileNav.classList.toggle("hidden"); // Toggle the mobile navbar visibility
//       mobileMenuButton.classList.toggle("active"); // Toggle the hamburger icon to cross
//     });

//     // Close mobile menu on close button click
//     closeMenuButton.addEventListener("click", function () {
//       mobileNav.classList.add("hidden");
//       mobileMenuButton.classList.remove("active");
//     });
//   });
//   // Select DOM elements
//   const mobileMenu = document.getElementById("mobile-menu");
//   const mobileNav = document.getElementById("mobile-nav");
//   const closeMenuBtn = document.getElementById("close-menu");

//   // Open mobile menu on hamburger click
//   mobileMenu.addEventListener("click", () => {
//     mobileNav.classList.remove("translate-x-full");
//   });

//   // Close mobile menu on close button click
//   closeMenuBtn.addEventListener("click", () => {
//     mobileNav.classList.add("translate-x-full");
//   });

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const headerHeight = header.offsetHeight;

  const navLinks = document.querySelectorAll('a[href^="#"]');
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-menu");

  // ✅ Open mobile menu
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  // ✅ Close mobile menu
  closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });

  // ✅ Scroll to section and close menu
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const targetId = href.startsWith("#") ? href.substring(1) : null;
      const targetSection = targetId ? document.getElementById(targetId) : null;

      if (targetSection) {
        e.preventDefault();

        // Close mobile menu
        mobileMenu.classList.add("translate-x-full");

        // Scroll after short delay
        setTimeout(() => {
          const offsetTop = targetSection.offsetTop - headerHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }, 100);
      }
    });
  });
});
