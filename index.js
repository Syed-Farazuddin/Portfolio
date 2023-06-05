const styleToggle = document.querySelector(".switcher-toggler");
styleToggle.addEventListener("click", () => {
  console.log("Click is activated");
  document.getElementById("style_switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.getElementById("style_switcher").classList.contains("open")) {
    document.querySelector(".style_switcher").classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternative_style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
