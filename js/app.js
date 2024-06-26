const imageCont = document.querySelector(".fixed-img");
const image = imageCont.querySelector("img");
const yb = imageCont.querySelector(".yellow-box");
const span = document.querySelectorAll("#titleContent span");

span.forEach((title, i) => {
  title.addEventListener("mouseover", () => {
    title.classList.add("active-title");
    title.innerText = data[i].afterHover;
    image.src = data[i].imgSrc;
    image.classList.remove("hide");
    yb.classList.add("hide");
  });
  title.addEventListener("mouseleave", () => {
    title.classList.remove("active-title");
    title.innerText = data[i].title;
    image.classList.add("hide");
    yb.classList.remove("hide");
  });
});

const box = document.querySelector("#box");
box.addEventListener("scroll", () => {
  const boxHeight = box.scrollHeight - box.getBoundingClientRect().height;
  if (box.scrollTop > boxHeight - 20) {
    if (window.location.href.includes("who-we-are")) {
      window.location.href = "./what-we-do.html";
    } else if (window.location.href.includes("what-we-do")) {
      window.location.href = "./our-works.html";
    }
  }
});
