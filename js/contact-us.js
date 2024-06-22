const box = document.querySelector("#box");
const inputs = box.querySelectorAll("input:not([type='checkbox'])");
const ftitle = box.querySelector(".first-title");
const stitle = box.querySelector(".second-title");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    ftitle.innerText = "collabration";
    ftitle.classList.add("active-title");
    if (input.value.length === 0) {
      ftitle.classList.remove("active-title");
      ftitle.innerText = "contact us";
    }
  });
});

stitle.addEventListener("click", () => {
  stitle.classList.add("active-title");
  stitle.innerHTML = "let's go";
  stitle.scrollIntoView({ behavior: "smooth" });
});

box.addEventListener("scroll", () => {
  if (box.scrollTop > 220) {
    stitle.classList.add("active-title");
    stitle.innerHTML = "let's go";
  }
});
