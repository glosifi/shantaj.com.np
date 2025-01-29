// JavaScript for simple interactions

document.addEventListener("DOMContentLoaded", function () {
    // Scroll to section on menu click
    const links = document.querySelectorAll(".navbar a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Add active class on scroll to sections
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        const link = document.querySelector(
          `.navbar a[href="#${entry.target.id}"]`
        );
        if (entry.isIntersecting) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  