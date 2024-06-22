const inputs = document.querySelectorAll("input:not([type='checkbox'])");
const ftitle = document.querySelector(".first-title");
const stitle = document.querySelector(".second-title");
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
