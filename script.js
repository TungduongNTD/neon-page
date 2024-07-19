// script.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#container a");
  
    links.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.classList.add("active");
      });
  
      link.addEventListener("mouseout", () => {
        link.classList.remove("active");
      });
    });
  });
  