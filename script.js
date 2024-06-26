const root = document.querySelector(":root");
const header = document.querySelector("header");
root.style.setProperty("--header-height", `${header.offsetHeight}px`);

new TypeIt("#hero-name-text", {
  lifeLike: false,
  speed: 0,
})
  .type(" B")
  .pause(100)
  .type("a")
  .pause(100)
  .type("t")
  .pause(100)
  .type("m")
  .pause(100)
  .type("a")
  .pause(100)
  .type("n")
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .type("K")
  .pause(100)
  .type("a")
  .pause(100)
  .type("r")
  .pause(100)
  .type("t")
  .pause(100)
  .type("h")
  .pause(100)
  .type("i")
  .pause(100)
  .type("k")
  .pause(100)
  .type("e")
  .pause(100)
  .type("y")
  .pause(100)
  .type("a")
  .pause(100)
  .type("n")
  .pause(100)
  .type(",")
  .go();

const navbarCheckBox = document.querySelector("#menu-btn");
const navbarCheckBoxLabel = document.querySelector("#menu-btn-label");
navbarCheckBox.addEventListener("change", () => {
  if (navbarCheckBox.checked)
    navbarCheckBoxLabel.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  else navbarCheckBoxLabel.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

