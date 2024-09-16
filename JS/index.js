const searchbar = document.getElementById("searchbar");
const wave = document.getElementById("wave");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (document.scrollingElement.scrollTop > wave.offsetTop) {
    nav.classList.add("full_nav");
    searchbar.style.display = "flex";
  } else {
    nav.classList.remove("full_nav");
    searchbar.style.display = "none"; // Assuming you want to hide the searchbar when not scrolled.
  }
});
