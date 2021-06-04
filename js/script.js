// SHOW & HIDDEN HEADER MENU
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById("nav-menu");
  const toggle = document.getElementById("nav-toggle");

  if (menu && toggle) {
    toggle.onclick = () => {
      toggle.classList.toggle("toggle-action");
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICK NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navToggle.classList.remove("toggle-action");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// SCROLL NAV-LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId}]`)
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ADD SHADOW ON HEADER WHEN WE SCROLL DOWN
function scrollHeader() {
  const header = document.getElementById("header");
  this.scrollY >= 100
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SCROLL REVEAL ANIMATED
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: true,
});

// Home Animation
sr.reveal(".home__name");
sr.reveal(".home__text", { delay: 200 });
sr.reveal(".home__button", { delay: 400 });
sr.reveal(".home__img", { delay: 600 });

// Portfolio Animation
sr.reveal(".portfolio__img");
sr.reveal(".portfolio__text", { delay: 400 });
sr.reveal(".portfolio__button", { delay: 600 });

// Section Animation
sr.reveal(".section-subtitle");
sr.reveal(".section-title", { delay: 200 });

// Contact Animation
sr.reveal(".contact__text", { delay: 400 });
sr.reveal(".contact__button", { delay: 600 });

// Skill Animation
sr.reveal(".skills__img", { delay: 400, interval: 200 });
