const box = document.querySelector("#box");
const inputs = box.querySelectorAll("input");
const ftitle = box.querySelector(".first-title");
const stitle = box.querySelector(".second-title");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (ifChecked() || ifHaveValue()) {
      ftitle.innerText = "collabration";
      ftitle.classList.add("active-title");
    } else {
      ftitle.classList.remove("active-title");
      ftitle.innerText = "contact us";
    }
  });
});

const checkboxes = box.querySelectorAll("input[type='checkbox']");
function ifChecked() {
  let x = 0;
  for (let checkbox of checkboxes) {
    if (checkbox.checked) return true;
    x++;
  }
  if (x === 6) return false;
}
const textInputs = box.querySelectorAll("input:not([type='checkbox'])");
function ifHaveValue() {
  let x = 0;
  for (let input of textInputs) {
    if (input.value !== "") return true;
    x++;
  }
  if (x === 2) return false;
}
stitle.addEventListener("click", () => {
  stitle.classList.add("active-title");
  stitle.innerHTML = "let's go";
  stitle.scrollIntoView({ behavior: "smooth" });
});

const boxHeight = box.scrollHeight - box.getBoundingClientRect().height;
box.addEventListener("scroll", () => {
  if (box.scrollTop > boxHeight - 60) {
    stitle.classList.add("active-title");
    stitle.innerHTML = "let's go";
  }
});
box.addEventListener("scrollend", () => {
  if (box.scrollTop < 30) {
    stitle.classList.remove("active-title");
    stitle.innerHTML = "find us";
  }
});
