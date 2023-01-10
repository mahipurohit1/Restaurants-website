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
