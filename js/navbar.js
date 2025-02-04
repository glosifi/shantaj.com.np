document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMenuButton = document.getElementById("close-menu");
  
    // Toggle mobile menu on hamburger click
    mobileMenuButton.addEventListener("click", function () {
      mobileNav.classList.toggle("active"); // Toggle the mobile navbar visibility
      mobileMenuButton.classList.toggle("active"); // Toggle the hamburger icon to cross
    });
  
    // Close mobile menu on close button click
    closeMenuButton.addEventListener("click", function () {
      mobileNav.classList.remove("active");
      mobileMenuButton.classList.remove("active");
    });
  });
  