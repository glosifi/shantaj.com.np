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
