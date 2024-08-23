function forSlider() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Slideshow: {
      playOnStart: true,
    },
  });
  new Carousel(
    document.getElementById("myCarousel"),
    {
      Autoplay: {
        timeout: 2000,
        pauseOnHover: false,
        showProgress: false,
      },
    },
    {
      Autoplay,
    }
  );
}

const box = document.querySelector("#box");
const itemContainer = box.querySelectorAll(".item-container");
const itemBox = box.querySelectorAll(".item-container > div > div");
const itemContent = box.querySelectorAll(".item-content");
const casesContainer = document.querySelectorAll("#cases-container");

let activePage = 0;
itemBox.forEach((item, i) => {
  item.addEventListener("click", () => {
    hideItems();
    renderContent(i);
  });
});

function renderContent(i) {
  itemContent[activePage].classList.add("d-none");
  itemContent[i].classList.remove("d-none");
  activePage = i;
  renderRandomCases(i);
  box.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  forSlider();
}

function hideItems() {
  box.children[0].classList.remove(
    "row-cols-1",
    "row-cols-md-2",
    "row-cols-xl-3"
  );
  itemContainer.forEach((item) => {
    item.classList.add("d-none");
  });
}

function showItems() {
  box.children[0].classList.add("row-cols-1", "row-cols-md-2", "row-cols-xl-3");
  itemContent[activePage].classList.add("d-none");
  itemContainer.forEach((item) => {
    item.classList.remove("d-none");
  });
}

window.addEventListener("click", (ev) => {
  if (!box.contains(ev.target)) {
    showItems();
  }
});

function renderRandomCases(i) {
  casesContainer[i].innerHTML = "";
  let x = 0;
  const randomCases = [];
  while (x < 3) {
    const randomIndex = Math.floor(Math.random() * itemContainer.length);
    if (!randomCases.includes(randomIndex) && i !== randomIndex) {
      createCase(i, randomIndex);
      randomCases.push(randomIndex);
      x++;
    }
  }
}
function createCase(i, ri) {
  const title = box.querySelectorAll(".item-container span")[ri].innerHTML;
  const imgSrc = box.querySelectorAll(".item-container img")[ri].src;
  const div = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");
  span.innerHTML = title;
  img.src = imgSrc;
  div.appendChild(img);
  div.appendChild(span);
  casesContainer[i].appendChild(div);
  div.addEventListener("click", () => {
    renderContent(ri);
  });
}
