const links = document.querySelectorAll("a:link");
console.log(links);

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
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
