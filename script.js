const links = document.querySelectorAll("a:link");
console.log(links);

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      document.body.classList.remove("over");
      home.classList.remove("open");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      document.body.classList.remove("over");
      home.classList.remove("open");
      const element = document.querySelector(href);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const eleHero = document.querySelector(".section-hero");
const home = document.querySelector(".home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      home.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      home.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(eleHero);

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const header = document.querySelector(".header");

menuOpen.addEventListener("click", function () {
  home.classList.add("open");
  document.body.classList.add("over");
});
menuClose.addEventListener("click", function () {
  home.classList.remove("open");
  document.body.classList.remove("over");
});
